import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div
      className="hero-bg"
      style={{
        background: `url(${process.env.PUBLIC_URL + "/header.jpg"}) center center/cover no-repeat`,
      }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">I am a Sample Website</h1>
        <p className="hero-desc">
          I'm a Sample Website, Create me as same as I am,
          <br />
          Don't Do any Mistakes.
        </p>
        <button className="getstarted-btn">Get Started</button>
      </div>
    </div>
  );
}
