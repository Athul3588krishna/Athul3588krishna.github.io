import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF4A17]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF7844] text-xs font-mono font-bold tracking-wider uppercase mb-4"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC FOUNDATIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
        >
          Academic <span className="text-gradient">Education</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
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
            className="glass-card rounded-[32px] p-7 sm:p-9 border border-white/[0.08] hover:border-[#FF4A17]/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Institution Header & Logo/Emblem */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-black border border-[#FF4A17]/30 flex items-center justify-center font-display font-black text-2xl text-[#FF7844] shadow-md shadow-black/40 group-hover:border-[#FF4A17] transition-colors">
                  {item.logoText}
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#FF7844] bg-[#FF4A17]/10 border border-[#FF4A17]/30">
                  {item.badge}
                </span>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#FF7844] transition-colors">
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
                      className="px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.06] group-hover:border-white/10 transition-colors"
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
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
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
