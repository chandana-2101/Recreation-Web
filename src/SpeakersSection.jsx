import React from "react";
import "./SpeakersSection.css";

const SPEAKERS = [
  {
    name: "Harry Williams",
    title: "Director of Mobile Gaming, Fixer",
    image: process.env.PUBLIC_URL + "/Harry_williams.jpg",
    linkedin: "#"
  },
  {
    name: "Akira Lee",
    title: "Director of Mobile Gaming, Fixer",
    image: process.env.PUBLIC_URL + "/Akira_Lee.jpg",
    linkedin: "#"
  },
  {
    name: "Veronika Zakharova",
    title: "Director of Mobile Gaming, Fixer",
    image: process.env.PUBLIC_URL + "/Veronika_zakarova.jpg",
    linkedin: "#"
  },
  {
    name: "Ann Jacobs",
    title: "Director of Mobile Gaming, Fixer",
    image: process.env.PUBLIC_URL + "/Ann-jaccobs.jpg",
    linkedin: "#"
  },
  {
    name: "Lissa Cross",
    title: "Director of Mobile Gaming, Fixer",
    image: process.env.PUBLIC_URL + "/Lissa_cross.jpg",
    linkedin: "#"
  },
  {
    name: "Murty Yang",
    title: "Director of Mobile Gaming, Fixer",
    image: process.env.PUBLIC_URL + "/Murty_yang.jpg",
    linkedin: "#"
  },
  {
    name: "Sheldon Smith",
    title: "Director of Mobile Gaming, Fixer",
    image: process.env.PUBLIC_URL + "/Sheldon_smith.jpg",
    linkedin: "#"
  },
  {
    name: "Jason Guhl",
    title: "Director of Mobile Gaming, Fixer",
    image: process.env.PUBLIC_URL + "/Jason_gulh.jpg",
    linkedin: "#"
  },
];

export default function SpeakersSection() {
  
  const col1 = [SPEAKERS[0], SPEAKERS[2], SPEAKERS[4], SPEAKERS[6]];
  const col2 = [SPEAKERS[1], SPEAKERS[3], SPEAKERS[5], SPEAKERS[7]];
  return (
    <section className="speakers-section">
      <h2 className="speakers-title">Speakers</h2>
      <div className="speakers-list-outer">
        <div className="speakers-col">
          {col1.map((sp, idx) => (
            <div className="speaker-row" key={sp.name}>
              <img className="speaker-avatar" src={sp.image} alt={sp.name} />
              <div className="speaker-meta">
                <span className="speaker-name">{sp.name}</span>
                <span className="speaker-title">{sp.title}</span>
              </div>
              <a className="speaker-linkedin" href={sp.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          ))}
        </div>
        <div className="speakers-col">
          {col2.map((sp, idx) => (
            <div className="speaker-row" key={sp.name}>
              <img className="speaker-avatar" src={sp.image} alt={sp.name} />
              <div className="speaker-meta">
                <span className="speaker-name">{sp.name}</span>
                <span className="speaker-title">{sp.title}</span>
              </div>
              <a className="speaker-linkedin" href={sp.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
