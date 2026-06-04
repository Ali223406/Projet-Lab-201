import { useEffect, useState } from "react";  // Importing necessary hooks from React for managing state and side effects
import { db } from "../service/firebase/firebase-config";  // Importing Firebase database configuration
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";  // Importing Firestore functions for database operations

export default function ConcertList({ refresh }) {  // Defining the ConcertList component which takes an optional refresh prop to trigger re-fetching of concerts when it changes
  const [concerts, setConcerts] = useState([]);  // State to store the list of concerts fetched from the database
  const [loading, setLoading] = useState(true);  // State to manage the loading state while fetching concerts

  const fetchConcerts = async () => {  // Function to fetch concerts from the Firestore database
    setLoading(true);

    const querySnapshot = await getDocs(collection(db, "concerts"));  // Getting all documents from the "concerts" collection

    const list = querySnapshot.docs.map((item) => ({  // Mapping over the documents to create a list of concerts with their data and ID
      id: item.id,
      ...item.data(),
    }));

    setConcerts(list);
    setLoading(false);
  };

  useEffect(() => {  // Using useEffect to fetch concerts when the component mounts or when the refresh prop changes
    fetchConcerts();
  }, [refresh]);

  const handleDelete = async (id) => {  // Function to handle the deletion of a concert by its ID
    try {
      await deleteDoc(doc(db, "concerts", id));
      fetchConcerts();
    } catch (error) {
      console.error("Erreur delete:", error);
    }
  };

  if (loading) return <p>Loading concerts...</p>;  // Displaying a loading message while concerts are being fetched

  return (
    <div>
      <h3>Liste des concerts ({concerts.length})</h3>

      {concerts.length === 0 ? (
        <p>Aucun concert</p>
      ) : (
        <ul>
          {concerts.map((c) => (
            <li key={c.id}>
              <h4>{c.ville}</h4>
              <p>{c.date}</p>
              <p>{c.lieu}</p>
              <p>{c.pays}</p>
              <p>{c.soldOut ? "🔴 Sold Out" : "🟢 Disponible"}</p>

              <button onClick={() => handleDelete(c.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}