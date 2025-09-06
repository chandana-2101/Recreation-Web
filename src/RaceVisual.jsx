import React from "react";
import "./RaceVisual.css";

export default function HurdlesStack() {
  const hurdleImg = process.env.PUBLIC_URL + "/Race.jpg";
  return (
    <div className="hurdles-stack-section">
      <div className="hurdles-gradient-bg" />
      <div className="hurdle-outer">
        <img src={hurdleImg} alt="hurdle outer" className="hurdle-img" />

        <div className="hurdle-inter">
          <img src={hurdleImg} alt="hurdle inter" className="hurdle-img" />

          <div className="hurdle-middle">
            <img src={hurdleImg} alt="hurdle middle" className="hurdle-img" />

            <div className="hurdle-inner">
              <img src={hurdleImg} alt="hurdle inner" className="hurdle-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
