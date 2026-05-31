import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="overlay"></div>

      <div className="content">
        <h1>Lana Del Rey</h1>
        <p>Admin — Tour & Release Management</p>

        <div className="panel">
          <h2>Tour Dates</h2>
          <p>Gérez les dates de la tournée et leur statut.</p>

          <button onClick={() => navigate("/admin")}>
            Accéder à l’administration
          </button>
        </div>
      </div>
    </div>
  );
}