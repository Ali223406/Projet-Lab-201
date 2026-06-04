import { useState } from "react";  // Importing useState hook from React for managing state
import { useNavigate } from "react-router-dom";  // Importing useNavigate hook from react-router-dom for navigation
import { auth } from "../service/firebase/firebase-config";  // Importing Firebase authentication configuration
import { signInWithEmailAndPassword } from "firebase/auth";  // Importing signInWithEmailAndPassword function for user authentication
import "./login.css";

export default function Login() {  // Defining the Login component
  const [email, setEmail] = useState("");  // State for the email input
  const [password, setPassword] = useState("");  // State for the password input
  const [loading, setLoading] = useState(false);  // State to manage the loading state during login

  const navigate = useNavigate();  // Initializing the navigate function for programmatic navigation

  const handleLogin = async (e) => {   // Function to handle the login form submission
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);  // Attempting to sign in the user with the provided email and password using Firebase authentication

     
      navigate("/dashboard");  // Navigating to the dashboard page upon successful login
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please check your credentials."); // Alerting the user if the login attempt fails
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Please enter your details to login
        </p>
      </div>

      <div className="login-card">
        <form onSubmit={handleLogin}>
          
          <input
            className="login-input"
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

     
          <input
            className="login-input"
            type="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}