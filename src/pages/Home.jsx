import "./Home.css";

import Album from "./Album";
import Tour from "./Tour";
import Blog from "./Blog";
import Artist from "./Artist";
import Cle from "./cle";
import Subscribe from "./Subscribe";
export default function Home() {
  return (
    <div className="home">

      <section className="section hero">
  <div className="overlay" />

 

  <nav className="hero-nav">
    <a href="#home">Home</a>
    <a href="#album">Music</a>
   
    <a href="#blog">Shop</a>
  </nav>
</section>

      {/* ALBUM PAGE */}
      <section id="album">
        <Album />
      </section>
        {/* Artist PAGE */}
      <section id="artist">
        <Artist />
      </section>

        {/* CLE PAGE */}
      <section id="cle">
        <Cle />
      </section>
      {/* SUBSCRIBE PAGE */}
      <section id="subscribe">
        <Subscribe />
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