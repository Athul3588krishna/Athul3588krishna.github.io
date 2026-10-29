import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-[#86868b] mb-3"
        >
          Academic Credentials
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7]"
        >
          Formative education.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-[#86868b] leading-relaxed"
        >
          Theoretical foundations in computational algorithms transitioning into postgraduate software engineering.
        </motion.p>
      </div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="apple-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Header Strip */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-medium text-neutral-800 dark:text-[#86868b] bg-black/[0.04] dark:bg-white/[0.06] px-3 py-1 rounded-full border border-black/[0.06] dark:border-white/[0.06]">
                  {item.badge}
                </span>
                <span className="text-xs text-neutral-600 dark:text-[#86868b] flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.duration}</span>
                </span>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7]">
                {item.degree}
              </h3>

              {/* Institution & University */}
              <div className="mt-2 text-sm text-neutral-600 dark:text-[#86868b]">
                <span className="text-neutral-900 dark:text-[#f5f5f7] font-semibold">{item.institution}</span>
                <span className="mx-1.5">•</span>
                <span>{item.university}</span>
              </div>

              <div className="mt-1 flex items-center gap-1 text-xs text-neutral-600 dark:text-[#86868b]">
                <MapPin className="w-3 h-3 text-neutral-500 dark:text-[#86868b]" />
                <span>{item.location}</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-neutral-700 dark:text-[#86868b] leading-relaxed">
                {item.description}
              </p>

              {/* Key Highlights */}
              {item.highlights && (
                <div className="mt-5 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-[#86868b]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Coursework Tags */}
            <div className="mt-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.06]">
              <span className="text-[11px] font-semibold text-neutral-600 dark:text-[#86868b] uppercase tracking-wider block mb-2.5">
                Key Coursework:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.keyCoursework.map((course) => (
                  <span
                    key={course}
                    className="apple-tag text-[11px]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
