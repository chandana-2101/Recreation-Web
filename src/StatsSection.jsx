import React from "react";
import "./StatsSection.css";

const stats = [
  { number: "1,034", desc: "Sample Data about Sample Things" },
  { number: "2", desc: "Sample Data about Sample Things" },
  { number: "25", desc: "Sample Data about Sample Things" },
  { number: "54", desc: "Sample Data about Sample Things" }
  
];

const backgrounds = [
  "stat-bg-a", "stat-bg-b", "stat-bg-c", "stat-bg-b", "stat-bg-c"
];

export default function StatsSection() {
  return (
    <div className="stats-page-root">
     
      <svg
        className="stats-curve-connection"
        viewBox="0 0 1440 3900"
        width="100vw"
        height="3900px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="
            M 370 200
            Q 500 800 700 1100
            Q 740 1480 670 2050
            Q 560 2450 1040 2800
            Q 1050 3000 700 3400
          "
          stroke="#a1a2ab"
          strokeWidth="2.7"
          strokeDasharray="16 16"
        />
      </svg>
     
      {stats.map((stat, idx) => (
        <section key={idx} className={`stat-long-section ${backgrounds[idx % backgrounds.length]}`}>
          <div className="stat-main">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-desc">{stat.desc}</div>
          </div>
        </section>
      ))}
    </div>
  );
}
