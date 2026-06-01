import React, { useState } from "react";
import { db, auth } from "../service/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import "./Admin.css";

export default function Admin() {
  const [ville, setVille] = useState("");
  const [date, setDate] = useState("");
  const [lieu, setLieu] = useState("");
  const [pays, setPays] = useState("");
  const [soldOut, setSoldOut] = useState(false);

  const handleAddConcert = async (e) => {
    e.preventDefault();

    if (!ville || !date || !lieu || !pays) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      await addDoc(collection(db, "concerts"), {
        ville,
        date,
        lieu,
        pays,
        soldOut,
      });

      alert("Concert ajouté !");

      setVille("");
      setDate("");
      setLieu("");
      setPays("");
      setSoldOut(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">
        Ajouter une date de tournée
      </h1>

      <button
        className="logout-button"
        onClick={handleLogout}
      >
        Logout
      </button>

      <form
        className="admin-form"
        onSubmit={handleAddConcert}
      >
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
          placeholder="Lieu / Festival"
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

        <button type="submit">
          Ajouter la date
        </button>
      </form>
    </div>
  );
}