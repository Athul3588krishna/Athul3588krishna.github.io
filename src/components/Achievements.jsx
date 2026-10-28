import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Mic, Users, Star, CheckCircle, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/achievements';

const categoryIcon = {
  Hackathon: Trophy,
  Seminar: Mic,
  Workshop: Users,
  Academic: Award,
  Community: Star,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-4"
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>RECOGNITION &amp; ACTIVITIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
        >
          Achievements &amp; <span className="text-gradient-amber">Milestones</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          Collegiate hackathons, technical speaker sessions, and competitive project evaluations.
        </motion.p>
      </div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, idx) => {
          const IconComp = categoryIcon[item.category] || Trophy;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between group hover:border-amber-500/40"
            >
              <div>
                {/* Header row: Year & Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-4 h-4" />
                  </span>

                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                    {item.badge}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  {item.event} • {item.year}
                </span>

                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Impact Statement */}
                <div className="mt-4 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item.impact}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-5 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-400 bg-black/40 border border-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
