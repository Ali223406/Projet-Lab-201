import React, { useState } from "react";  // Importing React and useState hook
import { db, auth } from "../service/firebase/firebase-config";  // Importing Firebase database and authentication
import { collection, addDoc } from "firebase/firestore";  // Importing Firestore functions for adding documents
import { signOut } from "firebase/auth";  // Importing signOut function for logging out
import "./Admin.css";  // Importing CSS for the Admin component

export default function Admin() {  // Defining the Admin component
  const [ville, setVille] = useState("");  // State for the city input
  const [date, setDate] = useState("");  // State for the date input
  const [lieu, setLieu] = useState("");  // State for the venue input
  const [pays, setPays] = useState("");  // State for the country input
  const [soldOut, setSoldOut] = useState(false);  // State for the sold out checkbox

  const handleAddConcert = async (e) => {  // Function to handle adding a new concert
    e.preventDefault();

    if (!ville || !date || !lieu || !pays) {  // Check if all required fields are filled
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      await addDoc(collection(db, "concerts"), {  // Adding a new document to the "concerts" collection in Firestore
        ville,
        date,
        lieu,
        pays,
        soldOut,
      });

      alert("Concert ajouté !");  // Alerting the user that the concert has been added

      setVille("");  // Resetting the city input
      setDate("");  // Resetting the date input
      setLieu("");
      setPays("");
      setSoldOut(false);  // Resetting the sold out checkbox
    } catch (error) {
      console.error(error);  // Logging any errors that occur during the add operation
    }
  };

  const handleLogout = async () => {   // Function to handle user logout
    await signOut(auth); 
    window.location.href = "/";
  };

  return (  // Returning the JSX for the Admin component
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