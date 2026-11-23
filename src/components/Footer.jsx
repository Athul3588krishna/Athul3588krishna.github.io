import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Journey", href: "#journey" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] text-slate-400 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#FF4A17]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF4A17] to-[#FF7844] flex items-center justify-center font-bold text-white font-['Space_Grotesk'] text-base tracking-wider shadow-lg shadow-[#FF4A17]/25">
                {profileData.initials}
              </span>
              <div>
                <span className="text-xl font-bold text-white font-['Space_Grotesk'] tracking-tight block">
                  {profileData.name}
                </span>
                <span className="text-xs text-[#FF7844] font-mono">
                  MCA Student & AI / Full Stack Engineer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Bridging modern full-stack development with multimodal AI, computer vision, and autonomous agent workflows to solve real-world problems.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-300 hover:text-[#FF7844] flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/80 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-slate-400 hover:text-[#FF7844] transition-colors py-1 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Status & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-6">
            <div className="text-left md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>MCA Student (2025–2027)</span>
              </div>
              <div className="text-xs text-slate-500">
                MEA Engineering College, Kerala
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-[#FF4A17]">✦</span>
            <span>React • Tailwind CSS • Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}