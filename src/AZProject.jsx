import React, { useState } from "react";
import "./AZProject.css";


const LETTERS = [
  {
    char: "A",
    frame: process.env.PUBLIC_URL + "/a-frame.jpg",
    letter: process.env.PUBLIC_URL + "/a-letter.jpg",
    code: "001 A",
    date: "13FEB2035",
    city: "NYC",
  },
  {
    char: "B",
    frame: process.env.PUBLIC_URL + "/b-frame.jpg",
    letter: process.env.PUBLIC_URL + "/b-letter.jpg",
    code: "002 B",
    date: "13FEB2035",
    city: "NYC",
  },
  {
    char: "C",
    frame: process.env.PUBLIC_URL + "/c-frame.jpg",
    letter: process.env.PUBLIC_URL + "/c-letter.jpg",
    code: "003 C",
    date: "13FEB2035",
    city: "NYC",
  },
  {
    char: "D",
    frame: process.env.PUBLIC_URL + "/d-frame.jpg",
    letter: process.env.PUBLIC_URL + "/d-letter.jpg",
    code: "004 D",
    date: "13FEB2035",
    city: "NYC",
  },
  {
    char: "E",
    frame: process.env.PUBLIC_URL + "/e-frame.jpg",
    letter: process.env.PUBLIC_URL + "/e-letter.jpg",
    code: "005 E",
    date: "13FEB2035",
    city: "NYC",
  },
  {
    char: "F",
    frame: process.env.PUBLIC_URL + "/f-frame.jpg",
    letter: process.env.PUBLIC_URL + "/f-letter.jpg",
    code: "006 F",
    date: "13FEB2035",
    city: "NYC",
  },
];



export default function AZProject() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (i) => setActiveIndex(i);

  return (
    <section className="azproject-root">
      
      <div className="az-left-poster">
        <div className="az-poster-frame">
          <img src={LETTERS[activeIndex].frame} alt="frame" className="az-poster-bg"/>
          <img src={LETTERS[activeIndex].letter} alt={LETTERS[activeIndex].char} className="az-poster-letter"/>
         
          <div className="az-poster-meta code">{LETTERS[activeIndex].code}</div>
          <div className="az-poster-meta date">{LETTERS[activeIndex].date}</div>
          <div className="az-poster-meta city">{LETTERS[activeIndex].city}</div>
          <div className="az-poster-meta texts">
            
          </div>
        </div>
      </div>

      
      <div className="az-right">
        <div className="az-letters-grid">
          {LETTERS.map((item, i) => (
            <div
              className={`az-letter-cell${i === activeIndex ? " active" : ""}`}
              key={item.char}
              onMouseEnter={() => handleHover(i)}
              tabIndex={0}
            >
              {item.char}
            </div>
          ))}
        </div>
        <div className="az-project-desc">
          <div className="az-project-title">A-Z PROJECT</div>
          <div className="az-project-text">
            It’s over to you. Download our library of transparent video letters and add them to your next project.
          </div>
        </div>
      </div>
    </section>
  );
}
