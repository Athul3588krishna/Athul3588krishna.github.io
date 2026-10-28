import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC FOUNDATIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
        >
          Academic <span className="text-gradient">Education</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          Rigorous computer science curriculum transitioning into postgraduate software engineering.
        </motion.p>
      </div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`glass-card rounded-3xl p-6 sm:p-8 border ${item.borderColor} relative overflow-hidden flex flex-col justify-between group`}
          >
            
            {/* Top Glowing Corner Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.accentColor} rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-110`} />

            <div>
              {/* Institution Header & Logo/Emblem */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center font-display font-extrabold text-xl text-cyan-400 shadow-md shadow-black/40 group-hover:border-cyan-400/50 transition-colors">
                  {item.logoText}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/40">
                  {item.badge}
                </span>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.degree}
              </h3>

              {/* Institution & University */}
              <div className="mt-2 space-y-1">
                <p className="text-sm sm:text-base font-semibold text-slate-200">
                  {item.institution}
                </p>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  {item.university}
                </p>
              </div>

              {/* Meta details: Duration & Location */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {item.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {item.location}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Key Coursework Tags */}
              <div className="mt-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Key Coursework &amp; Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.keyCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.06] group-hover:border-white/10 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Checklist */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] space-y-2">
              {item.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
