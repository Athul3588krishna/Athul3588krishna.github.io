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
  Check
} from 'lucide-react';
import { skillCategories, skillsData, techPillsCloud } from '../data/skills';

// Map icon names from data file to Lucide icons
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
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>TECH ARSENAL</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          Specialized in modern full-stack MERN engineering, intelligent API integrations, and robust database architectures.
        </motion.p>
      </div>

      {/* Animated Tech Cloud Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 p-4 sm:p-6 rounded-2xl glass-panel border border-white/[0.07] text-center"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 block">
          ⚡ Daily Production Toolkit:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {techPillsCloud.map((item, idx) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-200 bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] cursor-default transition-all duration-200"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30'
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
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
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-5 border border-white/[0.08] relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Hover Glow on Card */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-inner transition-transform group-hover:scale-110 duration-200"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        borderColor: `${skill.color}40`,
                        color: skill.color,
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                      {skill.proficiency}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>

                {skill.featured && (
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Primary Stack Focus</span>
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
