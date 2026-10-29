import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Cpu,
  Sparkles,
  Layers,
  Database,
  Terminal,
  Server,
  Bot,
  Boxes,
  Workflow,
  Eye,
  FileCode2,
  Atom,
  Palette,
  ShieldCheck,
  Zap,
  Coffee,
  GitBranch
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/skills';

// Quick icon mapper for clean visual representation
const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'Coffee': return Coffee;
    case 'Sparkles': return Sparkles;
    case 'Eye': return Eye;
    case 'Cpu': return Cpu;
    case 'FileCode2': return FileCode2;
    case 'Bot': return Bot;
    case 'Workflow': return Workflow;
    case 'Atom': return Atom;
    case 'Palette': return Palette;
    case 'Server': return Server;
    case 'Database': return Database;
    case 'Boxes': return Boxes;
    case 'ShieldCheck': return ShieldCheck;
    case 'GitBranch': return GitBranch;
    case 'Zap': return Zap;
    default: return Code2;
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-[#86868b] mb-3"
        >
          Technical Competencies
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7]"
        >
          Skills &amp; Technologies.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-[#86868b] leading-relaxed"
        >
          Hands-on proficiency across modern AI frameworks, computer vision, full-stack backends, and databases.
        </motion.p>
      </div>

      {/* iOS-Style Segmented Category Picker */}
      <div className="mb-8 overflow-x-auto pb-2 scrollbar-none touch-scroll">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-black/[0.04] dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08]">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-neutral-900 dark:text-white bg-black/[0.08] dark:bg-white/[0.14] shadow-sm font-semibold'
                    : 'text-neutral-600 dark:text-[#86868b] hover:text-neutral-900 dark:hover:text-[#f5f5f7] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Compact Apple Squircle Grid with High-Contrast Text */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const Icon = getSkillIcon(skill.icon);

            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="apple-card p-3.5 rounded-[18px] flex items-center gap-3 group hover:border-black/[0.18] dark:hover:border-white/[0.2] transition-all shadow-sm"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] group-hover:scale-105 transition-transform"
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: skill.color || '#0071e3' }}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-[#f5f5f7] tracking-tight truncate group-hover:text-[#0071e3] dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </div>
                  <div className="text-[10px] font-medium text-neutral-600 dark:text-[#86868b] truncate mt-0.5">
                    {skill.proficiency}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
