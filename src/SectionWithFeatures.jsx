import React from "react";
import "./SectionWithFeatures.css";

const featuresLeft = [
  "Sample Text 1",
  "Sample Text",
  "Sample Text",
];

const featuresRight = [
  "Sample Text",
  "Sample Text",
  "Sample Text",
];

export default function SectionWithFeatures() {
  const backgroundImg = process.env.PUBLIC_URL + "/background.jpg";
  const circuitImg = process.env.PUBLIC_URL + "/Demo1.jpg";
  const iconImg = process.env.PUBLIC_URL + "/icon.jpg";

  return (
    <section
      className="hero-section-custom"
      style={{
        background: `url(${backgroundImg}) center center/cover no-repeat`,
      }}
    >
      
      

      <div className="hero-content">
        <h1 className="hero-title">
          Accomplish<br />Anything in<br />Developing
        </h1>
        <p className="hero-desc">
          This is the space to introduce the Services section. Briefly describe the types of services
          offered and highlight any special benefits or features.
        </p>
      </div>

      <div className="center-features">
        <ul className="features-list left">
          {featuresLeft.map((item, i) => (
            <li key={i}>
              <span className="checkmark">&#10003;</span>
              <span className="feature-text">{item}</span>
            </li>
          ))}
        </ul>
        <div className="icon-circle-wrapper">
          <img src={circuitImg} alt="circuit" className="circuit-pattern" />
          <div className="icon-center">
            <img src={iconImg} alt="icon" />
          </div>
        </div>
        <ul className="features-list right">
          {featuresRight.map((item, i) => (
            <li key={i}>
              <span className="checkmark">&#10003;</span>
              <span className="feature-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="create-now-btn">Create Now!</button>
      
    </section>
  );
}
