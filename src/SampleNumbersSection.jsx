import React from "react";
import "./SampleNumbersSection.css";

export default function SampleNumbersSection() {
  return (
    <section className="sample-numbers-gradient">
      <div className="numbers-header">
        <div className="section-small">Sample Numbers</div>
        <div className="section-title">Row No. 1</div>
      </div>
      <div className="numbers-row-scroll">
        <div className="number-card">
          <span className="number-main">51</span>
          <span className="number-unit">Unit</span>
        </div>
        <div className="number-card">
          <span className="number-main">73</span>
          <span className="number-unit">Unit</span>
        </div>
        <div className="number-card">
          <span className="number-main">89</span>
          <span className="number-unit">Unit</span>
        </div>
        <div className="number-card">
          <span className="number-main">102</span>
          <span className="number-unit">Unit</span>
        </div>
        <div className="number-card">
          <span className="number-main">+102</span>
          <span className="number-unit">Unit</span>
        </div>
      </div>

      <div className="numbers-header">
        <div className="section-small">Sample Numbers</div>
        <div className="section-title">Row No. 2</div>
      </div>
      <div className="numbers-row-scroll">
        <div className="number-card">
          <span className="number-main">49</span>
          <span className="number-unit">Unit</span>
        </div>
        <div className="number-card">
          <span className="number-main">59</span>
          <span className="number-unit">Unit</span>
        </div>
        <div className="number-card">
          <span className="number-main">71</span>
          <span className="number-unit">Unit</span>
        </div>
        <div className="number-card">
          <span className="number-main">81</span>
          <span className="number-unit">Unit</span>
        </div>
        <div className="number-card">
          <span className="number-main">+81</span>
          <span className="number-unit">Unit</span>
        </div>
      </div>
    </section>
  );
}
