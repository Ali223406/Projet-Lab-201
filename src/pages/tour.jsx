import React, { useEffect, useState } from "react";
import { db } from "../service/firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./tour.css";

export default function Tour() {
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
      console.error("Error fetching concerts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConcerts();
  }, []);

  return (
  <div className="tour-page">

    <div className="tour-bg" />
    <div className="tour-overlay" />

    <div className="tour-container">

      <h1 className="tour-title">concerts</h1>

     

      {loading ? (
        <p>Loading...</p>
      ) : concerts.length === 0 ? (
        <p>No concerts available</p>
      ) : (
        <div className="tour-list">
          {concerts.map((concert) => (
            <div key={concert.id} className="tour-card">
                {/* LEFT */}
              <div>
                <div className="tour-city">{concert.ville}</div>
                <div className="tour-country">{concert.pays}</div>
              </div>
        {/* RIGHT GROUP */}
          <div className="tour-right">
                    <div className="tour-date">{concert.date}</div>

                      
            <button className="tour-button">
              BUY TICKET
            </button>
            </div>
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
);
}