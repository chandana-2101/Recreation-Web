import React from "react";
import "./GuestArea.css";
import HeroSection from "./HeroSection";
import SampleNumbersSection from "./SampleNumbersSection";
import StatsSections from "./StatsSection";
import FlowLine from "./FlowLine"; // Import FlowLine
import SectionWithFeatures from "./SectionWithFeatures";
import ScrollingBar from "./ScrollingBar";
import AboutRace from "./AboutRace";
import RaceVisual from "./RaceVisual";
import ProjectShowcase from "./ProjectShowcase";
import AZProject from "./AZProject";
import SpeakersSection from "./SpeakersSection";
import FooterSection from "./FooterSection";



export default function GuestArea() {
  return (
    <div className="guestarea-main">
      <nav className="navbar"><span className="nav-title">Home</span></nav>
      <HeroSection />
      <SampleNumbersSection />
      
      <section className="stat-section stat-bg-flow">
        <FlowLine />
      </section>
       <SectionWithFeatures />
       <ScrollingBar />
       <AboutRace />
       <RaceVisual />
       <ProjectShowcase />
       <AZProject />
       <SpeakersSection />
       <FooterSection />




      {/* Persistent Chat Button */}
      <button className="chat-btn">✨ Chat with AI</button>
    </div>
  );
}
