import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
    <div className="relative min-h-screen bg-[#08090D] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
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
