import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Mic, Users, Star, CheckCircle2 } from 'lucide-react';
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
    <section id="achievements" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-[#86868b] mb-3"
        >
          Milestones &amp; Honors
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7]"
        >
          Recognition.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-[#86868b] leading-relaxed"
        >
          Collegiate hackathons, technical symposiums, and engineering capstone milestones.
        </motion.p>
      </div>

      {/* Grid of Achievement Cards with High Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievementsData.map((item, idx) => {
          const IconComp = categoryIcon[item.category] || Trophy;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="apple-card p-6 flex flex-col justify-between group hover:border-black/[0.18] dark:hover:border-white/[0.18]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-[#86868b] mb-3">
                  <span className="text-[10px] font-semibold text-neutral-800 dark:text-[#f5f5f7] bg-black/[0.04] dark:bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-black/[0.06] dark:border-white/[0.06]">
                    {item.badge}
                  </span>
                  <span className="font-medium">{item.year}</span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-[#f5f5f7] tracking-tight group-hover:text-[#0071e3] dark:group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-[#0071e3] dark:text-[#2997ff] font-semibold">
                  {item.event}
                </p>

                <p className="mt-3 text-xs text-neutral-700 dark:text-[#86868b] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.impact && (
                <div className="mt-5 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-start gap-2 text-xs text-neutral-700 dark:text-[#86868b]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#30d158] shrink-0 mt-0.5" />
                  <span>{item.impact}</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
