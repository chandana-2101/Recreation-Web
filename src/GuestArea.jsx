import React, { useState } from "react";
import "./GuestArea.css";
import HeroSection from "./HeroSection";
import SampleNumbersSection from "./SampleNumbersSection";
import SectionWithFeatures from "./SectionWithFeatures";
import ScrollingBar from "./ScrollingBar";
import AboutRace from "./AboutRace";
import RaceVisual from "./RaceVisual";
import ProjectShowcase from "./ProjectShowcase";
import AZProject from "./AZProject";
import SpeakersSection from "./SpeakersSection";
import FooterSection from "./FooterSection";
import LoginPage from "./LoginPage"; // Import LoginPage

export default function GuestArea() {
  const [authenticated, setAuthenticated] = useState(false);

 
  if (!authenticated) {
    return <LoginPage onLogin={() => setAuthenticated(true)} />;
  }

 
  return (
    <div className="guestarea-main">
      <nav className="navbar"><span className="nav-title">Home</span></nav>
      <HeroSection />
      <SampleNumbersSection />
      <SectionWithFeatures />
      <ScrollingBar />
      <AboutRace />
      <RaceVisual />
      <ProjectShowcase />
      <AZProject />
      <SpeakersSection />
      <FooterSection />
      
      <button className="chat-btn">✨ Chat with AI</button>
    </div>
  );
}
