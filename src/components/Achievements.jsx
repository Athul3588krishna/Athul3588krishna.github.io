import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Mic, Users, Star, CheckCircle, Sparkles, ArrowUpRight } from 'lucide-react';
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
    <section id="achievements" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FF4A17]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF7844] text-xs font-mono font-bold tracking-wider uppercase mb-4"
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>HACKATHONS &amp; HONORS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
        >
          Achievements &amp; <span className="text-gradient">Recognition</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Competitive AI hackathons, international institutional certifications, and collegiate software honors.
        </motion.p>
      </div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, idx) => {
          const IconComp = categoryIcon[item.category] || Trophy;
          const isHackathon = item.id.includes('hackathon');

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-7 border relative overflow-hidden flex flex-col justify-between group ${
                isHackathon
                  ? 'border-[#FF4A17]/50 shadow-[0_0_30px_rgba(255,74,23,0.18)] bg-[#FF4A17]/[0.03]'
                  : 'border-white/[0.08] hover:border-[#FF4A17]/40'
              }`}
            >
              <div>
                {/* Header row: Year & Category */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="w-11 h-11 rounded-2xl bg-[#FF4A17]/15 border border-[#FF4A17]/35 flex items-center justify-center text-[#FF7844] group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF4A17]/20 border border-[#FF4A17]/40 text-[#FF7844]">
                    {item.badge}
                  </span>
                </div>

                <span className="text-[11px] font-mono font-bold text-slate-400 block mb-1 uppercase tracking-wide">
                  {item.event} • {item.year}
                </span>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-[#FF7844] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Impact Statement */}
                <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-orange-200 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF4A17] shrink-0 mt-0.5" />
                  <span>{item.impact}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-900/90 border border-white/[0.06]"
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
