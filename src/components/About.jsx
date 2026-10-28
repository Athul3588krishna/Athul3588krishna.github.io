import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  MapPin,
  GraduationCap,
  Sparkles,
  Terminal,
  Code2,
  CheckCircle2,
  Heart,
  Briefcase
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-5 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4"
        >
          <User className="w-3.5 h-3.5" />
          <span>BACKGROUND &amp; IDENTITY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          A software builder driven by curiosity, code craftsmanship, and modern web architectures.
        </motion.p>
      </div>

      {/* Split-Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Visual Developer Avatar & Terminal Cockpit (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          {/* Developer Visual Card */}
          <div className="relative w-full max-w-md rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-violet-500/30 shadow-2xl">
            <div className="rounded-[22px] bg-[#0c0e18] p-6 border border-white/10 overflow-hidden relative">
              
              {/* Profile Illustration / Avatar */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 mb-5 aspect-square">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating status tag */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-2 text-cyan-300 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    MCA Student (2025–27)
                  </span>
                  <span className="text-slate-400">{profileData.location}</span>
                </div>
              </div>

              {/* Developer Terminal Code Card */}
              <div className="rounded-xl bg-[#07090f] border border-white/[0.08] p-4 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-white/[0.06] text-slate-500 text-[11px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 font-medium">athul.config.ts</span>
                </div>
                <div className="space-y-1 text-slate-400">
                  <p><span className="text-cyan-400">const</span> engineer = &#123;</p>
                  <p className="pl-4">name: <span className="text-amber-300">"{profileData.name}"</span>,</p>
                  <p className="pl-4">roles: [<span className="text-cyan-300">"AI/ML"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-purple-300">"Full Stack"</span>],</p>
                  <p className="pl-4">education: <span className="text-amber-300">"MCA @ MEA (2025-27)"</span>,</p>
                  <p className="pl-4">aiVision: [<span className="text-cyan-300">"PyTorch"</span>, <span className="text-emerald-300">"OpenCV"</span>, <span className="text-yellow-300">"MobileNet"</span>],</p>
                  <p className="pl-4">agenticRAG: [<span className="text-cyan-300">"ReAct"</span>, <span className="text-purple-300">"ToolCalling"</span>, <span className="text-emerald-300">"FastAPI"</span>],</p>
                  <p className="pl-4">fullStack: [<span className="text-cyan-300">"React"</span>, <span className="text-emerald-300">"Node"</span>, <span className="text-purple-300">"MongoDB"</span>, <span className="text-blue-300">"SQLite"</span>],</p>
                  <p className="pl-4">flagship: <span className="text-amber-300">"AgriMitra 360"</span></p>
                  <p>&#125;;</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Narrative & Core Highlights (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Natural Authentic Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Bridging Computer Vision, Agentic AI &amp; Full-Stack Solutions.
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              I’m an MCA student at <span className="text-white font-semibold">MEA Engineering College, Perinthalmanna</span> (KTU) with a Bachelor of Science in Computer Science from <span className="text-white font-semibold">KRS Sree Narayana College, Valanchery</span> (University of Calicut). Over the past four years, my focus has grown from foundational algorithmic problem-solving into engineering production-ready AI systems and full-stack applications.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              My engineering philosophy is anchored in solving real-world challenges through practical software solutions. I built <span className="text-cyan-400 font-semibold">AgriPulse (AgriMitra 360)</span>—a multimodal smart agriculture platform integrating PyTorch/MobileNet leaf disease detection, OpenCV HSV lesion severity calculations, ReAct autonomous agents with tool calling, and bilingual Malayalam/English voice interaction via the Web Speech API.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              My hands-on experience spans Python, FastAPI microservices, React.js, Node.js, Express, MongoDB Atlas, and offline-first desktop systems using Electron.js and SQLite. Certified in MERN Full Stack Development by Illinois Institute of Technology and Entri Elevate, I thrive on building responsive, resilient software that makes an immediate impact.
            </p>
          </div>

          {/* Core Engineering Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {profileData.about.highlights.map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-card border border-white/[0.07] hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h4 className="text-sm font-display font-bold text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-6">
            {profileData.metrics.map((m, i) => (
              <div key={i}>
                <span className="text-lg sm:text-xl font-mono font-bold text-white block">
                  {m.value}
                </span>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

      </div>

    </section>
  );
}
