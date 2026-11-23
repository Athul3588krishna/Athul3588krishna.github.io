import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'journey', 'education', 'skills', 'certificates', 'projects', 'achievements', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Saihasoft-style Glowing Emblem */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Athul Krishna R Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF4A17]/25 via-black to-[#22D3EE]/25 border border-[#FF4A17]/40 flex items-center justify-center font-display font-extrabold text-lg text-white group-hover:border-[#FF4A17] group-hover:shadow-[0_0_20px_rgba(255,74,23,0.4)] transition-all duration-300">
              <span className="tracking-tight text-white group-hover:text-[#FF4A17] transition-colors">
                {profileData.initials}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#FF4A17] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-[#FF4A17] transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                AI/ML &amp; Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-slate-900/70 border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#FF4A17] shadow-[0_0_15px_rgba(255,74,23,0.4)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-white/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs (Saihasoft-style Pill Buttons with Arrow) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF4A17]/60 transition-all duration-200"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4A17] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={profileData.resumePath}
              download="Athul_Krishna_Resume.pdf"
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF4A17] to-[#FF6B3D] hover:from-[#FF5500] hover:to-[#FFA114] shadow-lg shadow-[#FF4A17]/25 hover:shadow-[#FF4A17]/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <FileDown className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              <span>Resume ↗</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-[#FF4A17]/60 focus:outline-none"
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium ${
                    activeSection === link.id
                      ? 'bg-[#FF4A17] text-white font-bold'
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
              <a
                href={profileData.resumePath}
                download="Athul_Krishna_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF4A17] to-[#FF6B3D] shadow-md shadow-[#FF4A17]/30"
              >
                <FileDown className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
