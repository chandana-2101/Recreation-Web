import React from "react";
import "./FooterSection.css";

export default function FooterSection() {
  const logo = process.env.PUBLIC_URL + "/download.jpg";
  const signature = process.env.PUBLIC_URL + "/download-2.jpg";
  return (
    <footer className="footer-section">
      <div className="footer-newsletter">
        <h1 className="footer-title">Be the First to Receive the<br/>Latest News</h1>
        <button className="footer-signup-btn">
          Sign Up <span className="arrow">→</span>
        </button>
      </div>
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-brand">
            <img src={logo} alt="Brington logo" className="footer-logo" />
            <span className="footer-brand-name">Brington</span>
          </div>
        </div>
        <div className="footer-nav">
          
          <div>
            <div className="footer-nav-head">Navigation</div>
            <div className="footer-nav-text">Home</div>
            <div className="footer-nav-text">About</div>
            <div className="footer-nav-text">Contact</div>
          </div>
          <div>
            <div className="footer-nav-head">Social</div>
    <div className="footer-nav-text">Facebook</div>
    <div className="footer-nav-text">Instagram</div>
    <div className="footer-nav-text">Youtube</div>
          </div>
          <div>
            <div className="footer-nav-head">Contact</div>
    <div className="footer-nav-text">info@mysite.com</div>
    <div className="footer-nav-text">Tel. 123-456-7890</div>
    <div className="footer-nav-text">India</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <span>© 2035 by Brington Inc</span>
        <span className="footer-signature">
          Built with love and caffeine by <img src={signature} alt="signature" />
        </span>
      </div>
    </footer>
  );
}
