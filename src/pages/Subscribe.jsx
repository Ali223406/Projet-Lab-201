import "./Subscribe.css";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Subscribe() {
  return (
    <div className="subscribe-page">

      <div className="subscribe-overlay" />

      {/* TOP IMAGES */}
      <div className="subscribe-gallery">
       <button className="arrow left">‹</button>
  <div className="polaroid">
        <img src="/images/lanaa1.jpeg" alt="Lanaa 1" />
        <span>2012</span>
      </div>
      <div className="polaroid">
        <img src="/images/lanaa2.jpeg" alt="Lanaa 2" />
        <span>2015</span>
      </div>
      <div className="polaroid">
        <img src="/images/lanaa3.jpeg" alt="Lanaa 3" />
        <span>2017</span>
      </div>
      
      <button className="arrow right">›</button>
      </div>



      {/* CONTENT */}
  <div className="subscribe-dots">
  <span className="dot active"></span>
  <span className="dot"></span>
  <span className="dot"></span>
</div>
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