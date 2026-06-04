import React, { useEffect, useState } from "react";  // Importing React and necessary hooks
import { db } from "../service/firebase/firebase-config";  // Importing Firebase database configuration
import { collection, getDocs } from "firebase/firestore";  // Importing Firestore functions for database operations
import "./tour.css";

export default function Tour() {   // Defining the Tour component
  const [concerts, setConcerts] = useState([]);  // State to store the list of concerts fetched from the database
  const [loading, setLoading] = useState(true);

  const fetchConcerts = async () => {  // Function to fetch concerts from the Firestore database
    try {
      const snapshot = await getDocs(collection(db, "concerts"));  // Getting all documents from the "concerts" collection

      const list = snapshot.docs.map((doc) => ({  // Mapping over the documents to create a list of concerts with their data and ID
        id: doc.id,
        ...doc.data(),
      }));

      setConcerts(list);  // Updating the state with the fetched concerts
    } catch (error) {
      console.error("Error fetching concerts:", error); // Logging any errors that occur during the fetch operation
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {  // Using useEffect to fetch concerts when the component mounts
    fetchConcerts();
  }, []);

  return (  // Returning the JSX for the Tour component
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