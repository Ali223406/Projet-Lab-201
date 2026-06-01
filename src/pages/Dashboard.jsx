import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../service/firebase/firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingConcert, setEditingConcert] = useState(null);

  const fetchConcerts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "concerts"));

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setConcerts(list);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConcerts();
  }, []);

  const handleUpdateConcert = async () => {
    if (!editingConcert) return;

    try {
      const ref = doc(db, "concerts", editingConcert.id);

      await updateDoc(ref, {
        ville: editingConcert.ville,
        date: editingConcert.date,
        lieu: editingConcert.lieu,
        pays: editingConcert.pays,
        soldOut: editingConcert.soldOut,
      });

      setEditingConcert(null);
      fetchConcerts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteConcert = async (id) => {
    try {
      await deleteDoc(doc(db, "concerts", id));
      fetchConcerts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard">
      <div className="overlay"></div>

      <div className="content">
        <h1>Lana Del Rey</h1>
        <p>Admin — Tour & Release Management</p>

        <div className="panel">
          <h2>Tour Dates</h2>

          <button onClick={() => navigate("/admin")}>
            Ajouter une date
          </button>

          {loading ? (
            <p>Chargement...</p>
          ) : concerts.length === 0 ? (
            <p>Aucune date enregistrée.</p>
          ) : (
            <div className="concert-list">

              {concerts.map((concert) => (
                <div className="ticket-card" key={concert.id}>

                  {/* LEFT */}
                  <div className="ticket-city">
                    <h3>{concert.ville}</h3>
                    <span>{concert.pays}</span>
                  </div>

                  <div className="ticket-divider"></div>

                  {/* MIDDLE */}
                  <div className="ticket-info">
                    <p>📅 {concert.date}</p>
                    <p>📍 {concert.lieu}</p>
                  </div>

                  <div className="ticket-divider"></div>

                  {/* STATUS */}
                  <div className="ticket-status">
                    <span
                      className={
                        concert.soldOut
                          ? "status-soldout"
                          : "status-open"
                      }
                    >
                      {concert.soldOut ? "Sold Out" : "Available"}
                    </span>
                  </div>

                  {/* ACTIONS ALIGNÉES */}
                  <div className="ticket-actions">

                    <button
                      className="edit-btn"
                      onClick={() => setEditingConcert(concert)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => {
                        if (window.confirm("Supprimer ce ticket ?")) {
                          handleDeleteConcert(concert.id);
                        }
                      }}
                    >
                      Delete
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}
        </div>
      </div>

      {/* MODAL EDIT */}
      {editingConcert && (
        <div className="edit-modal">
          <h3>Edit Ticket</h3>

          <input
            value={editingConcert.ville}
            onChange={(e) =>
              setEditingConcert({
                ...editingConcert,
                ville: e.target.value,
              })
            }
          />

          <input
            type="date"
            value={editingConcert.date}
            onChange={(e) =>
              setEditingConcert({
                ...editingConcert,
                date: e.target.value,
              })
            }
          />

          <input
            value={editingConcert.lieu}
            onChange={(e) =>
              setEditingConcert({
                ...editingConcert,
                lieu: e.target.value,
              })
            }
          />

          <input
            value={editingConcert.pays}
            onChange={(e) =>
              setEditingConcert({
                ...editingConcert,
                pays: e.target.value,
              })
            }
          />

          <label>
            <input
              type="checkbox"
              checked={editingConcert.soldOut}
              onChange={(e) =>
                setEditingConcert({
                  ...editingConcert,
                  soldOut: e.target.checked,
                })
              }
            />
            Sold Out
          </label>

          <button onClick={handleUpdateConcert}>Save</button>
          <button onClick={() => setEditingConcert(null)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}