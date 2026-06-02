import React from "react";

export default function ArtistPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif" }}>

      {/* DISCOVER */}
      <section style={sectionStyle("/images/lanapic.jpeg")}>
        <h1 style={titleStyle}>Discover</h1>
        <p style={textStyle}>
          Lana Del Rey — cinematic universe, melancholic sound, timeless aesthetics.
        </p>
      </section>

      {/* ALBUMS */}
      <section style={darkSection}>
        <h1 style={titleStyle}>Albums</h1>

        <div style={grid}>
          <div style={card}>Born To Die</div>
          <div style={card}>Ultraviolence</div>
          <div style={card}>Norman Fucking Rockwell</div>
        </div>
      </section>

      {/* TOUR DATES */}
      <section style={sectionStyle("/images/lana1.jpeg")}>
        <h1 style={titleStyle}>Tour Dates</h1>

        <ul style={list}>
          <li>Paris — 22 May 2026</li>
          <li>London — 25 May 2026</li>
          <li>New York — 30 May 2026</li>
        </ul>
      </section>

      {/* NEWS */}
      <section style={darkSection}>
        <h1 style={titleStyle}>News</h1>

        <p style={textStyle}>
          New album rumored in 2026 — cinematic direction confirmed.
        </p>
      </section>

    </div>
  );
}

/* 🔥 BACKGROUND SECTION */
const sectionStyle = (img) => ({
  minHeight: "100vh",
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  position: "relative",
  textAlign: "center",
});

/* dark sections */
const darkSection = {
  minHeight: "100vh",
  background: "#0b0b0b",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
  padding: "60px",
};

const titleStyle = {
  fontSize: "60px",
  color: "#C8A27A",
  marginBottom: "20px",
};

const textStyle = {
  maxWidth: "600px",
  lineHeight: "1.8",
  opacity: 0.9,
};

const grid = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const card = {
  background: "rgba(255,255,255,0.08)",
  padding: "20px",
  borderRadius: "12px",
  minWidth: "180px",
  backdropFilter: "blur(10px)",
};

const list = {
  listStyle: "none",
  padding: 0,
  fontSize: "20px",
  lineHeight: "2",
};