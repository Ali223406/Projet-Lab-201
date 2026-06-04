import { useState } from "react";  // Importing useState hook from React for managing state
import { db } from "../service/firebase/firebase-config"; // Importing Firebase database configuration
import { collection, addDoc } from "firebase/firestore"; // Importing Firestore functions for adding documents

export default function ConcertForm({ onAdd }) { // Defining the ConcertForm component which takes an optional onAdd prop for refreshing the parent component after adding a concert
  const [ville, setVille] = useState("");  // State for the city input
  const [date, setDate] = useState("");  // State for the date input
  const [lieu, setLieu] = useState("");  // State for the venue input
  const [pays, setPays] = useState("");
  const [soldOut, setSoldOut] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {  // Function to handle the form submission for adding a new concert
    e.preventDefault();

    if (!ville || !date || !lieu || !pays) return;  // Check if all required fields are filled, if not, return early

    setLoading(true);
 
    try {
      await addDoc(collection(db, "concerts"), {   // Adding a new document to the "concerts" collection in Firestore with the form data
        ville,
        date,
        lieu,
        pays,
        soldOut,
      });

      // reset form
      setVille("");
      setDate("");
      setLieu("");
      setPays("");
      setSoldOut(false);

      // refresh parent
      if (onAdd) onAdd();
    } catch (error) {
      console.error("Erreur ajout concert:", error);
    } finally {
      setLoading(false);
    }
  };

  return (  // Returning the JSX for the ConcertForm component, which includes a form with inputs for city, date, venue, country, and sold out status, as well as a submit button
    <form onSubmit={handleSubmit}>
      <h3>Ajouter un concert</h3>

      <input
        type="text"
        placeholder="Ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="text"
        placeholder="Lieu"
        value={lieu}
        onChange={(e) => setLieu(e.target.value)}
      />

      <input
        type="text"
        placeholder="Pays"
        value={pays}
        onChange={(e) => setPays(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={soldOut}
          onChange={(e) => setSoldOut(e.target.checked)}
        />
        Sold Out
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Ajout..." : "Ajouter"}
      </button>
    </form>
  );
}