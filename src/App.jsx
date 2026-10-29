import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import JourneyTimeline from './components/JourneyTimeline';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--apple-bg)] text-[var(--apple-text)] selection:bg-[#0071e3]/30 selection:text-white font-sans antialiased transition-colors duration-250">
      
      {/* Apple Frosted Glass Sticky Navigation with Dark/Light Switch */}
      <Navbar />

      {/* Main Showcase Flow */}
      <main className="relative z-10">
        {/* 1. Hero & Authentic Developer Identity (Unified) */}
        <Hero />

        {/* 2. Featured Flagship Projects */}
        <Projects />

        {/* 3. Academic Education (MCA @ MEA & B.Sc CS) */}
        <Education />

        {/* 4. Technical Competencies & Skills */}
        <Skills />

        {/* 5. Engineering Journey Milestones with Dynamic Scroll Fill Line */}
        <JourneyTimeline />

        {/* 6. Verified Credentials & Certifications with Visual Previews */}
        <Certifications />

        {/* 7. Recognition & Achievements */}
        <Achievements />

        {/* 8. Open Source GitHub Repositories */}
        <GitHubSection />

        {/* 9. Direct Contact Channels & Resume Download ("Let's connect.") */}
        <Contact />
      </main>

      {/* Apple Minimalist Footer */}
      <Footer />

    </div>
  );
}
