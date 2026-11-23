import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
  Trophy,
  CheckCircle2,
  Rocket,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Compass
} from 'lucide-react';
import { journeyData } from '../data/journey';

const iconMap = {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
  Trophy,
  CheckCircle2,
  Rocket,
};

export default function JourneyTimeline() {
  const [expandedItems, setExpandedItems] = useState({
    "journey-hackathon": true,
    "journey-7": true
  });

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="journey" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#FF4A17]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#22D3EE]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF7844] text-xs font-mono font-bold tracking-wider uppercase mb-4"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>EVOLUTION ROADMAP</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
        >
          My <span className="text-gradient">Journey</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          From computer science fundamentals to building intelligent AI systems and scalable web platforms.
        </motion.p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative">
        
        {/* Central Glowing Laser Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#FF4A17] via-[#22D3EE] to-[#8B5CF6] opacity-50 shadow-[0_0_15px_rgba(255,74,23,0.5)]" />

        <div className="space-y-12">
          {journeyData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code2;
            const isEven = index % 2 === 0;
            const isExpanded = !!expandedItems[item.id];
            const stepNumber = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } group`}
              >
                
                {/* Timeline Node Icon (Centered on Desktop, Left on Mobile) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="relative w-11 h-11 rounded-full bg-[#0a0c14] border-2 border-[#FF4A17] group-hover:border-[#FF7844] shadow-[0_0_20px_rgba(255,74,23,0.5)] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-4 h-4 text-[#FF7844] group-hover:text-white transition-colors" />
                    <span className="absolute -inset-1 rounded-full bg-[#FF4A17]/20 blur-sm pointer-events-none" />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div
                    className={`glass-card rounded-3xl p-6 sm:p-7 border border-white/[0.08] relative overflow-hidden transition-all duration-300 ${
                      item.status === 'Flagship Project' || item.status === 'Hackathon'
                        ? 'border-[#FF4A17]/40 shadow-[0_0_25px_rgba(255,74,23,0.15)]'
                        : ''
                    }`}
                  >
                    
                    {/* Header Row: Numbered Index & Year */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-slate-500 group-hover:text-[#FF4A17] transition-colors">
                          {stepNumber}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF4A17]/15 border border-[#FF4A17]/30 text-[#FF7844]">
                          {item.year}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300">
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#FF7844] transition-colors">
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.shortDesc}
                    </p>

                    {/* Key Highlight Banner */}
                    {item.highlight && (
                      <div className="mt-3.5 px-3.5 py-2 rounded-xl bg-black/40 border border-[#FF4A17]/20 text-xs text-orange-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A17]" />
                        <span>{item.highlight}</span>
                      </div>
                    )}

                    {/* Expandable Deep Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-white/[0.06] space-y-3"
                        >
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            {item.fullDesc}
                          </p>

                          {/* Technology Badges */}
                          {item.technologies && item.technologies.length > 0 && (
                            <div>
                              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">
                                Technologies &amp; Tooling:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-cyan-200 bg-slate-900/90 border border-cyan-800/40"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand / Collapse Button */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7844] hover:text-[#FFA114] transition-colors focus:outline-none"
                    >
                      <span>{isExpanded ? 'Less details' : 'View milestone details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
