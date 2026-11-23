import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export default function FloatingSidebar() {
  return (
    <>
      {/* Left Floating Social Dock (Desktop) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20" />
        
        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#FF4A17] hover:bg-[#FF4A17]/15 hover:shadow-[0_0_15px_rgba(255,74,23,0.35)] transition-all duration-300"
        >
          <Github className="w-4 h-4" />
        </a>

        <a
          href={profileData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#22D3EE] hover:bg-[#22D3EE]/15 hover:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all duration-300"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <a
          href={`mailto:${profileData.email}`}
          aria-label="Email Me"
          className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/15 hover:shadow-[0_0_15px_rgba(139,92,246,0.35)] transition-all duration-300"
        >
          <Mail className="w-4 h-4" />
        </a>

        <a
          href={`tel:${profileData.phone}`}
          aria-label="Call Me"
          className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/15 hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
        </a>

        <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-white/20" />
      </div>

      {/* Bottom Right Floating Quick Contact Pill (WhatsApp & Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
        <a
          href={`https://wa.me/917034405846?text=Hi%20Athul,%20saw%20your%20developer%20portfolio!`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#121420]/90 border border-emerald-500/40 text-emerald-300 backdrop-blur-md shadow-xl shadow-black/50 hover:border-emerald-400 hover:bg-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono font-semibold hidden sm:inline">WhatsApp</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </>
  );
}
