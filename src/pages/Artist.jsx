import React from "react";  // Importing React library
import "./Artist.css"; // Importing CSS for the Artist component

export default function Artist() {   // Defining the Artist component
  return (  // Returning the JSX for the Artist component
    <div className="artist-page">
     
      {/* BACKGROUND IMAGE LAYER */}
      <div className="artist-bg" />
       {/* TITLE */}
      <h1 className="artist-title">Lana Del Rey</h1>
      
      {/* OVERLAY */}
      <div className="artist-overlay" />

      {/* CONTENT */}
      <div className="artist-container">

        {/* LEFT IMAGE */}
        <div className="artist-image">
          <img src="/images/lanahead.jpeg" alt="Artist" />
        </div>

          <img
        src="/images/discc.png"
        alt="detail"
        className="artist-bottom-image"
      />

        {/* RIGHT TEXT */}
        <div className="artist-text">

          <h2 className="artist-subtitle">
            Singer • Songwriter • Cinematic Universe
          </h2>

          <p className="artist-description">
            Lana Del Rey is an American singer known for her melancholic aesthetic,
            cinematic sound, and nostalgic universe. Her work blends vintage
            Americana with emotional storytelling and dreamlike production.
          </p>

          <div className="artist-cards">
            <div className="artist-card">Born: New York</div>
            <div className="artist-card">Genre: Alternative Pop</div>
            <div className="artist-card">Style: Cinematic</div>
          </div>
          


        </div>
      </div>
    </div>
  );
}