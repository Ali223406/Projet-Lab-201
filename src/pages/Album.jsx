export default function Album() {
  return (
    <div className="album-page">

      {/* BACKGROUND */}
      <div className="album-bg" />
      <div className="album-overlay" />

      {/* CONTENT */}
      <div className="album-container">

        {/* TITLE */}
        <h1 className="album-title">STOVE</h1>

        <div className="album-grid">

          {/* LEFT IMAGE */}
          <div className="album-cover">
            <img src="/images/lanadis.jpeg" alt="Album Cover" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="album-info">

            <h2>About the Album</h2>

            <p>
              STOVE is the 10th studio album by Lana Del Rey.
              A cinematic americana story about memory, home,
              nostalgia and love. The project blends intimate
              storytelling with dreamy soundscapes and emotional songwriting.
            </p>

            <h3>Tracklist</h3>

            <ul>
              <li>01. Henry, Come On</li>
              <li>02. Bluebird</li>
              <li>03. White Feather Hawk Tail Deer Hunter</li>
            </ul>

            <div className="album-mini">
              <img src="/images/levre.jpeg" alt="detail" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}