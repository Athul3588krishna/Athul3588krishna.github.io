import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import FloatingSidebar from './components/FloatingSidebar';
import JourneyTimeline from './components/JourneyTimeline';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08090D] text-slate-100 selection:bg-[#FF4A17]/25 selection:text-[#FF7844]">
      
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Floating Side Docks (Left Social + Bottom Right WhatsApp) */}
      <FloatingSidebar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        
        {/* Infinite High-Impact Marquee Ticker (Saihasoft Signature) */}
        <MarqueeTicker />

        <JourneyTimeline />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <GitHubSection />
        <About />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
