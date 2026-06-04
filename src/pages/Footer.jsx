export default function Footer() {  // Defining the Footer component
  return (   // Returning the JSX for the Footer component
    <div className="footer-page">

      <p>
        If you are using a screen reader please call assistance
      </p>

      <div className="footer-links">
        <a href="/help">Help</a>
        <a href="/support">Support</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/cookies">Cookie choices</a>
        <a href="/do-not-sell">Do not sell my personal information</a>
      </div>

    </div>
  );
}