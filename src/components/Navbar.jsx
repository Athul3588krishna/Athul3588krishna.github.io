import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(true);

  // Initialize and persist theme
  useEffect(() => {
    const saved = localStorage.getItem('akr_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved ? saved === 'dark' : (saved === null ? true : prefersDark);
    
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('akr_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('akr_theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'education', 'skills', 'journey', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 180;

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
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Credentials', href: '#certifications', id: 'certifications' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'apple-nav py-3'
          : 'bg-transparent py-4 border-b border-black/[0.04] dark:border-white/[0.04]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Athul Krishna R Portfolio Home"
          >
            <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-xs flex items-center justify-center tracking-tight transition-transform duration-200 group-hover:scale-105 shadow-sm">
              {profileData.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] text-[#86868b] hidden sm:block">
                MCA @ MEA • Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-black/[0.04] dark:bg-[#161617]/90 border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 ${
                    isActive
                      ? 'text-[#1d1d1f] dark:text-white bg-black/[0.08] dark:bg-white/[0.1]'
                      : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Apple Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] border border-black/[0.06] dark:border-white/[0.08] transition-all"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle visual theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <a
              href="#contact"
              className="px-3.5 py-2 rounded-full text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors"
            >
              Contact
            </a>

            <a
              href={profileData.resumePath}
              download="Athul_Krishna_Resume.pdf"
              className="apple-btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-black/[0.04] dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] text-[#86868b]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-black/[0.04] dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] text-[#86868b] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden apple-nav px-4 pt-3 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-2xl text-xs font-medium ${
                    activeSection === link.id
                      ? 'bg-black/[0.08] dark:bg-white/[0.1] text-[#1d1d1f] dark:text-white'
                      : 'text-[#86868b] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col gap-2">
              <a
                href={profileData.resumePath}
                download="Athul_Krishna_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="apple-btn-primary w-full py-2.5 text-xs text-center justify-center flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="apple-btn-secondary w-full py-2.5 text-xs text-center justify-center"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
