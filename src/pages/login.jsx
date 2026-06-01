import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../service/firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

     
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please check your credentials.");
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