import React from "react";
import "./ScrollingBar.css";

const iconUrl = process.env.PUBLIC_URL + "/Demo.jpg"; // Make sure this file is in public folder
const items = Array(10).fill("HURDLES"); // Repeat as needed for a seamless scroll

export default function ScrollingBar() {
  return (
    <div className="scrolling-bar-outer">
      <div className="scrolling-bar-inner">
        {items.map((text, idx) => (
          <React.Fragment key={idx}>
            <span className="scrolling-text">{text}</span>
            <img src={iconUrl} alt="hurdles-icon" className="scrolling-icon" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
