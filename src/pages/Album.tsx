export default function Album() {
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
        padding: "60px 20px",
        fontFamily: "serif",
        position: "relative",
      }}
    >
      {/* overlay pour lisibilité */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* contenu au-dessus de l’image */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "60px",
            letterSpacing: "4px",
            color: "#C8A27A",
          }}
        >
          STOVE
        </h1>

        {/* IMAGE ALBUM */}
        <img
          src="/images/lanadis.jpeg"
          alt="STOVE Album Cover"
          style={{
            width: "600px",
            marginTop: "30px",
            borderRadius: "12px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        />

        {/* DESCRIPTION */}
        <p
          style={{
            maxWidth: "600px",
            margin: "30px auto",
            fontSize: "18px",
            lineHeight: "1.6",
            opacity: 0.85,
          }}
        >
          STOVE is the 10th studio album by Lana Del Rey.  
          A cinematic americana story about memory, home and love.
        </p>

        {/* TRACKLIST */}
        <div style={{ marginTop: "40px" }}>
          <h2>Tracklist</h2>

          <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
            <li>01. Henry, Come On</li>
            <li>02. Bluebird</li>
            <li>03. White Feather Hawk Tail Deer Hunter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}