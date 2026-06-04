import "./Home.css";  // Importing CSS for the Home component

import Album from "./Album";  // Importing the Album component
import Tour from "./Tour";   // Importing the Tour component
import Blog from "./Blog";   // Importing the Blog component
import Artist from "./Artist";   // Importing the Artist component
import Cle from "./cle";   // Importing the Cle component
import Subscribe from "./Subscribe"; // Importing the Subscribe component
export default function Home() {  // Defining the Home component
  return (
    <div className="home">

      <section className="section hero">
  <div className="overlay" />  

 

  <nav className="hero-nav">
    <a href="#home">Home</a>
    <a href="#album">Music</a>
   
    <a href="#blog">Blog</a>
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
      
        {/* TOUR PAGE */}
      <section id="tour">
        <Tour />
      </section>
      {/* BLOG / NEWS */}
      <section id="blog">
        <Blog />
      </section>
      {/* SUBSCRIBE PAGE */}
      <section id="subscribe">
        <Subscribe />
      </section>

    </div>
  );
}