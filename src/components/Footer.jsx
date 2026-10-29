import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.08] bg-[var(--apple-bg)] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-250">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#hero" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-xs flex items-center justify-center">
              {profileData.initials}
            </div>
            <span className="font-semibold text-sm text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
              {profileData.name}
            </span>
          </a>
          <p className="mt-1.5 text-xs text-[#86868b]">
            MCA Student @ MEA Engineering College • Full Stack &amp; AI Developer
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-2">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black/[0.04] dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors"
            aria-label="GitHub profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black/[0.04] dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profileData.email}`}
            className="p-2 rounded-full bg-black/[0.04] dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="apple-btn-secondary text-xs py-1.5 px-3 inline-flex items-center gap-1.5 ml-2"
            title="Scroll to top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-black/[0.04] dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#86868b]">
        <span>© {new Date().getFullYear()} Athul Krishna R. All rights reserved.</span>
        <span>Designed with Apple-inspired clarity &amp; engineering rigor.</span>
      </div>
    </footer>
  );
}
