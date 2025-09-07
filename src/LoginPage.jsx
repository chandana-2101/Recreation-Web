import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "Demo@123"; 
    if (password === correctPassword) {
      setError("");
      onLogin();
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Guest Area</h2>
        <p>Please enter the password below.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-btn">Go</button>
        </form>
      </div>
    </div>
  );
}
