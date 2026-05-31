import { useEffect, useState } from "react";
import { db } from "../service/firebase/firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function ConcertList({ refresh }) {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchConcerts = async () => {
    setLoading(true);

    const querySnapshot = await getDocs(collection(db, "concerts"));

    const list = querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));

    setConcerts(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchConcerts();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "concerts", id));
      fetchConcerts();
    } catch (error) {
      console.error("Erreur delete:", error);
    }
  };

  if (loading) return <p>Loading concerts...</p>;

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