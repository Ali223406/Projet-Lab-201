import "./Album.css";
import { useState } from "react";

export default function Album() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="album-page">
      <div className="album-bg" />
      <div className="album-overlay" />

      <div className="album-container">
        <h1 className="album-title">ALBUM : STOVE</h1>

        <div className="album-grid">

          {/* LEFT */}
          <div className="album-left">
            <div className="album-cover">
              <img
                src="/images/lanadis.png"
                alt="Album Cover"
              />
            </div>

            <div className="album-about">
              
              <h2>About the Album</h2>

              <p>
                STOVE is the 10th studio album by Lana Del Rey.
                A cinematic americana story about memory, home,
                nostalgia and love. The project blends intimate
                storytelling with dreamy soundscapes and
                emotional songwriting.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="album-right">

            <div className="album-buttons">
              <button>Stream</button>
              <button>Download</button>
            </div>

            <div className="album-tracklist">
              <h3>Tracklist</h3>

              <ol>
                <li>All about Ethel</li>
                <li>Quiet in the South</li>
                <li>Past Present Future</li>
                <li>Stars Fell on Alabama</li>
                <li>White Feather Hawk Tail Deer Hunter</li>
                <li>Bluebird</li>

                {showMore && (
                  <>
                    <li>Henry, Come On</li>
                    <li>Prettiest Girl in Country Music</li>
                    <li>Hey blue baby</li>
                    <li>57.5</li>
                    <li>I must be stupid for being so happy</li>
                    <li>Take me Home, Country Roads</li>
                    <li>Roses Bloom for You</li> 
                    <li>Stand by your man</li> 
                  </>

                )}
              </ol>

              <p
                className="more-link"
                onClick={() => setShowMore(!showMore)}
              >
                <em>
                  {showMore ? "show less" : "more"}
                </em>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}