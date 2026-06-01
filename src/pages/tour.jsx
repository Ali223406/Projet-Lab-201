import React, { useEffect, useState } from "react";
import { db } from "../service/firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

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
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/lana1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        textAlign: "center",
        padding: "60px",
        fontFamily: "serif",
        position: "relative",
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.47)",
        }}
      />

      {/* content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ color: "#C8A27A" }}>STOVE - Tour Dates</h1>

        <p>Upcoming shows</p>

        {loading ? (
          <p>Loading...</p>
        ) : concerts.length === 0 ? (
          <p>No concerts available</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
            {concerts.map((concert) => (
              <li
                key={concert.id}
                style={{
                  marginBottom: "12px",
                  padding: "10px",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                }}
              >
                {concert.ville} - {concert.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}