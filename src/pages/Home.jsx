import "./Home.css";

import Album from "./Album";
import Tour from "./Tour";
import Blog from "./Blog";
import Artist from "./Artist";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="section hero">
        <div className="overlay" />
        <h1>STOVE</h1>


        
      </section>

      {/* ALBUM PAGE */}
      <section id="album">
        <Album />
      </section>
        {/* Artist PAGE */}
      <section id="artist">
        <Artist />
      </section>

      {/* TOUR PAGE */}
      <section id="tour">
        <Tour />
      </section>

      {/* BLOG / NEWS */}
      <section id="blog">
        <Blog />
      </section>

    </div>
  );
}