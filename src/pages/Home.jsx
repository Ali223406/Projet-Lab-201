import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO */}
      <div className="hero">
        <div className="overlay" />

        <div className="hero-content">
         
                    <h2 className="album">STOVE</h2>

          <p className="subtitle">
            “A story of home, love and memory.”
          </p>

          <div className="cta">
            <button onClick={() => navigate("/album")}>
              Discover Album
            </button>

            <button onClick={() => navigate("/tour")}>
              Tour Dates
            </button>

            <button onClick={() => navigate("/blog")}>
              News
            </button>
          </div>
        </div>
      </div>

      {/* MINI SECTION */}
      <div className="info-section">
        <h3>New Album - 2026</h3>
        <p>
          Stove is a cinematic americana project inspired by
          countryside, memory and intimate storytelling.
        </p>
      </div>

    </div>
  );
}