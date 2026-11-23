import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom,
  Palette,
  FileCode2,
  Code,
  FileCode,
  LayoutGrid,
  Server,
  Cpu,
  Workflow,
  ShieldCheck,
  Radio,
  Database,
  Boxes,
  Coffee,
  TerminalSquare,
  Sparkles,
  Bot,
  MapPin,
  Navigation,
  GitBranch,
  Github,
  Send,
  Terminal,
  Zap,
  Framer,
  Layers,
  Check,
  Eye
} from 'lucide-react';
import { skillCategories, skillsData, techPillsCloud } from '../data/skills';

const skillIconMap = {
  Atom,
  Palette,
  FileCode2,
  Code,
  FileCode,
  LayoutGrid,
  Server,
  Cpu,
  Workflow,
  ShieldCheck,
  Radio,
  Database,
  Boxes,
  Coffee,
  TerminalSquare,
  Sparkles,
  Bot,
  MapPin,
  Navigation,
  GitBranch,
  Github,
  Send,
  Terminal,
  Zap,
  Framer,
  Eye,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#FF4A17]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF7844] text-xs font-mono font-bold tracking-wider uppercase mb-4"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>TECHNICAL ARSENAL</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
        >
          Skills &amp; <span className="text-gradient">Capabilities</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Specialized in deep learning computer vision, ReAct agentic workflows, FastAPI microservices, and full-stack MERN platforms.
        </motion.p>
      </div>

      {/* Daily Production Toolkit Pill Cloud (Saihasoft style) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 p-5 sm:p-7 rounded-3xl glass-panel border border-white/[0.08] text-center"
      >
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF7844] mb-4 block">
          ✦ Core Production Toolkit:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {techPillsCloud.map((item) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-200 bg-slate-900/90 border border-white/10 hover:border-[#FF4A17] hover:text-[#FF7844] hover:shadow-[0_0_15px_rgba(255,74,23,0.3)] cursor-default transition-all duration-200"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Category Filter Pills (Saihasoft style) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF4A17] to-[#FF6B3D] text-white shadow-lg shadow-[#FF4A17]/30 border border-[#FF4A17]'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Interactive Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const IconComponent = skillIconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-3xl p-6 border border-white/[0.08] relative group overflow-hidden flex flex-col justify-between hover:border-[#FF4A17]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-inner transition-transform group-hover:scale-110 duration-200"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        borderColor: `${skill.color}40`,
                        color: skill.color,
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                      {skill.proficiency}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-[#FF7844] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>

                {skill.featured && (
                  <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-[#FF7844]">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF4A17]" />
                    <span>Specialized Competency</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
