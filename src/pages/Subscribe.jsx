import "./Subscribe.css";  // Importing CSS for the Subscribe component
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";  // Importing social media icons from react-icons library
import { useState } from "react";  // Importing useState hook from React for managing state

export default function Subscribe() {  // Defining the Subscribe component
   const [current, setCurrent] = useState(0);  // State to track the current slide in the image gallery

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % 3);  // Function to move to the next slide, wrapping around to the first slide after the last one
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + 3) % 3);  // Function to move to the previous slide, wrapping around to the last slide if currently on the first one
  };
  return (  // Returning the JSX for the Subscribe component
    <div className="subscribe-page">

      <div className="subscribe-overlay" />

      {/* TOP IMAGES */}
      <div className="subscribe-gallery">
       <button className="arrow left" onClick={prevSlide}>
          ‹
        </button>
  <div className={`polaroid ${current === 0 ? "active" : ""}`}>
        <img src="/images/lanaa1.jpeg" alt="Lanaa 1" />
        <span>2012</span>
      </div>
      <div className={`polaroid ${current === 1 ? "active" : ""}`}>
        <img src="/images/lanaa2.jpeg" alt="Lanaa 2" />
        <span>2015</span>
      </div>
      <div className={`polaroid ${current === 2 ? "active" : ""}`}>
        <img src="/images/lanaa3.jpeg" alt="Lanaa 3" />
        <span>2017</span>
      </div>
      
      <button className="arrow right" onClick={nextSlide}>
        ›
      </button>
      </div>



      {/* CONTENT */}
 
<div className="subscribe-main">

  <div className="subscribe-content">

   
    <p>
      Subscribe to be the first to know about
      exclusive updates, tour announcements
      and new music.
    </p>

    <form className="subscribe-form">
      <input
        type="email"
        placeholder="Enter your email"
      />

      <button type="submit">
        SUBSCRIBE
      </button>
    </form>

    <div className="subscribe-socials">
      <a href="https://www.instagram.com/lanadlelreyy?igsh=dmVseDVhaXRhOGF1" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>

      <a href="https://www.tiktok.com/@lanadelrey?_r=1&_t=ZN-96syf0Y6bQ6" target="_blank" rel="noreferrer">
        <FaTiktok />
      </a>

      <a href="https://www.facebook.com/lanadelrey" target="_blank" rel="noreferrer">
        <FaFacebook/>
      </a>
    </div>

  </div>

</div>
<img
  src="/images/care.png"
  alt="car"
  className="subscribe-corner"
/>
    </div>
  );
}