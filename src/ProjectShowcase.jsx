import React from "react";
import "./ProjectShowcase.css";

export default function ProjectShowcase() {
  const imgUrl = process.env.PUBLIC_URL + "/Round.jpg";
  return (
    <section className="project-showcase-section">
      <div className="project-showcase-header">
        <div>
          <h1 className="project-title">Project Name</h1>
          <div className="project-client">Client Name</div>
        </div>
        <div className="project-fab">
          <span>+</span>
        </div>
      </div>
      <img src={imgUrl} className="project-image" alt="Project Visual" />
    </section>
  );
}
