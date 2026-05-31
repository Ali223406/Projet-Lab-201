export default function Tour() {
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
      {/* overlay pour lisibilite*/}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.47)",
        }}
      />

      {/* contenu */}
      <div style={{ position: "relative", zIndex: 1 
      
      }}>
       <h1 style={{ color: "#C8A27A" }}>STOVE - Tour Dates</h1>

        <p>Upcoming shows</p>

        <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
          <li>Paris - 22 May 2026</li>
          <li>London - 25 May 2026</li>
          <li>New York - 30 May 2026</li>
        </ul>
      </div>
    </div>
  );
}