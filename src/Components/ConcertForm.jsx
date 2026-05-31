import { useState } from "react";
import { db } from "../service/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function ConcertForm({ onAdd }) {
  const [ville, setVille] = useState("");
  const [date, setDate] = useState("");
  const [lieu, setLieu] = useState("");
  const [pays, setPays] = useState("");
  const [soldOut, setSoldOut] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ville || !date || !lieu || !pays) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "concerts"), {
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

  return (
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