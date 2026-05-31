import React, { useEffect, useState } from "react";
import { db, auth } from "../service/firebase/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import "./Admin.css";

export default function Admin() {
  const [concerts, setConcerts] = useState([]);
  const [ville, setVille] = useState("");
  const [date, setDate] = useState("");
  const [lieu, setLieu] = useState("");
  const [pays, setPays] = useState("");
  const [soldOut, setSoldOut] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchConcerts = async () => {
    setLoading(true);

    try {
      const snapshot = await getDocs(collection(db, "concerts"));

      const list = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));

      setConcerts(list);
    } catch (error) {
      console.error("Error fetching concerts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConcerts();
  }, []);

  const handleAddConcert = async (e) => {
    e.preventDefault();

    if (!ville || !date || !lieu || !pays) return;

    try {
      await addDoc(collection(db, "concerts"), {
        ville,
        date,
        lieu,
        pays,
        soldOut,
      });

      setVille("");
      setDate("");
      setLieu("");
      setPays("");
      setSoldOut(false);

      fetchConcerts();
    } catch (error) {
      console.error("Error adding concert:", error);
    }
  };

  const handleDeleteConcert = async (id) => {
    try {
      await deleteDoc(doc(db, "concerts", id));
      fetchConcerts();
    } catch (error) {
      console.error("Error deleting concert:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">
        Admin Dashboard ({concerts.length})
      </h2>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      <form className="admin-form" onSubmit={handleAddConcert}>
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

        <button type="submit">Add Concert</button>
      </form>

      {loading ? (
        <p>Loading concerts...</p>
      ) : concerts.length === 0 ? (
        <p>Aucun concert enregistré.</p>
      ) : (
        <ul>
          {concerts.map((concert) => (
            <li className="concert-card" key={concert.id}>
              <h4>{concert.ville}</h4>

              <p>Date : {concert.date}</p>
              <p>Pays : {concert.pays}</p>
              <p>Lieu : {concert.lieu}</p>

              <p
                className={
                  concert.soldOut
                    ? "status-soldout"
                    : "status-open"
                }
              >
                {concert.soldOut
                  ? "🔴 Sold Out"
                  : "🟢 Disponible"}
              </p>

              <button
                className="logout-button"
                onClick={() => {
                  if (
                    window.confirm("Supprimer ce concert ?")
                  ) {
                    handleDeleteConcert(concert.id);
                  }
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}