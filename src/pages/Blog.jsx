export default function Blog() {
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
      {/* overlay optionnel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      />

      {/* content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ color: "#C8A27A" }}>STOVE - News</h1>

        <p style={{ opacity: 0.8 }}>
          Latest updates about Lana Del Rey
        </p>

        <article
          style={{
            marginTop: "40px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid rgba(200,162,122,0.3)",
          }}
        >
          <h3 style={{ color: "#C8A27A" }}>
            New single released
          </h3>

          <p>
            Henry, Come On - a new chapter of STOVE universe.
          </p>
        </article>
      </div>
    </div>
  );
}