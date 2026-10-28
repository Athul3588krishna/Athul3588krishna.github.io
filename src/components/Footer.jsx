import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080c] py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center font-display font-bold text-sm text-cyan-400">
              {profileData.initials}
            </div>
            <span className="font-display font-bold text-base text-white tracking-wide">
              {profileData.name}
            </span>
          </a>
          <p className="mt-2 text-xs text-slate-400 max-w-sm">
            "Building ideas into digital experiences."
          </p>
        </div>

        {/* Social Icons Strip */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-colors"
            aria-label="GitHub profile link"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors"
            aria-label="LinkedIn profile link"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profileData.email}`}
            className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-400/50 hover:bg-violet-500/10 transition-colors"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors ml-2"
            title="Scroll to top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
        <span>© 2026 Athul Krishna R. All rights reserved.</span>
        <span className="flex items-center gap-1.5">
          <span>Crafted with React, Tailwind &amp; Framer Motion</span>
        </span>
      </div>

    </footer>
  );
}
