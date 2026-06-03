import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../service/firebase/firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth } from "../service/firebase/firebase-config";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

  const emptyForm = {
    ville: "",
    date: "",
    lieu: "",
    pays: "",
    soldOut: false,
  };

  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleDeleteConcert = async (id) => {
    try {
      await deleteDoc(doc(db, "concerts", id));
      fetchConcerts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    try {
      if (editingId) {
        const ref = doc(db, "concerts", editingId);
        await updateDoc(ref, formData);
      } else {
        await addDoc(collection(db, "concerts"), formData);
      }

      setFormData(emptyForm);
      setEditingId(null);
      setIsModalOpen(false);
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
        <button className="logout-btn" onClick={handleLogout}>
        Déconnexion
      </button>

        <div className="panel">
          <h2>Tour Dates</h2>

          <button
            onClick={() => {
              setEditingId(null);
              setFormData(emptyForm);
              setIsModalOpen(true);
            }}
          >
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
                  <div className="ticket-city">
                    <h3>{concert.ville}</h3>
                    <span>{concert.pays}</span>
                  </div>

                  <div className="ticket-divider"></div>

                  <div className="ticket-info">
                    <p>📅 {concert.date}</p>
                    <p>📍 {concert.lieu}</p>
                  </div>

                  <div className="ticket-divider"></div>

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

                  <div className="ticket-actions">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setEditingId(concert.id);
                        setFormData({
                          ville: concert.ville,
                          date: concert.date,
                          lieu: concert.lieu,
                          pays: concert.pays,
                          soldOut: concert.soldOut,
                        });
                        setIsModalOpen(true);
                      }}
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

      {/* MODAL CREATE + EDIT */}
     {isModalOpen && (
  <div className="album-modal-overlay">
    <div className="album-modal">
      <h1 className="album-title">
        {editingId ? "Edit Concert" : "Add Concert"}
      </h1>

      <div className="album-form">
        <input
          type="text"
          placeholder="Ville"
          value={formData.ville}
          onChange={(e) =>
            setFormData({ ...formData, ville: e.target.value })
          }
        />

        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Lieu "
          value={formData.lieu}
          onChange={(e) =>
            setFormData({ ...formData, lieu: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Pays"
          value={formData.pays}
          onChange={(e) =>
            setFormData({ ...formData, pays: e.target.value })
          }
        />

        <label className="album-checkbox">
          <input
            type="checkbox"
            checked={formData.soldOut}
            onChange={(e) =>
              setFormData({
                ...formData,
                soldOut: e.target.checked,
              })
            }
          />
          Sold Out
        </label>

        <div className="album-buttons">
          <button onClick={handleSave}>
            {editingId ? "Update" : "Create"}
          </button>

          <button
            onClick={() => {
              setFormData(emptyForm);
              setEditingId(null);
              setIsModalOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}