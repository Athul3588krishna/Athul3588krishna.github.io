import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
  Trophy,
  CheckCircle2
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
};

export default function JourneyTimeline() {
  const containerRef = useRef(null);

  // Scroll-driven dynamic progress line tracking the center of the screen
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 350,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <section id="journey" ref={containerRef} className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-3"
        >
          Engineering Progression
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]"
        >
          Journey so far.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed"
        >
          Key milestones from undergraduate computer science foundations to postgraduate AI innovation and production engineering.
        </motion.p>
      </div>

      {/* Apple Vertical Timeline with Scroll-Driven Dynamic Blue Progress Line */}
      <div className="relative pl-7 sm:pl-10">
        
        {/* Background Track Hairline */}
        <div className="absolute left-[13px] sm:left-[17px] top-3 bottom-3 w-[2px] bg-black/[0.08] dark:bg-white/[0.08]" />

        {/* Dynamic Scroll-Driven Blue Fill Line (Fills down as you scroll!) */}
        <motion.div
          style={{ scaleY, transformOrigin: 'top' }}
          className="absolute left-[13px] sm:left-[17px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#2997ff] via-[#2997ff] to-[#0071e3] shadow-[0_0_10px_rgba(41,151,255,0.7)] z-10"
        />

        {/* Milestone Items */}
        <div className="space-y-10">
          {journeyData.map((item, index) => {
            const Icon = iconMap[item.icon] || Code2;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Glowing Apple Blue Timeline Node Dot */}
                <div className="absolute -left-[26px] sm:-left-[34px] top-2 w-6 h-6 rounded-full bg-white dark:bg-[#161617] border-2 border-[#2997ff] flex items-center justify-center shadow-[0_0_10px_rgba(41,151,255,0.4)] z-20">
                  <div className="w-2 h-2 rounded-full bg-[#2997ff]" />
                </div>

                {/* Milestone Card with Full Details */}
                <div className="apple-card p-6 sm:p-7 hover:border-black/[0.15] dark:hover:border-white/[0.18] transition-all">
                  
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0071e3] dark:text-[#2997ff] px-2.5 py-0.5 rounded-full bg-[#2997ff]/10 border border-[#2997ff]/20">
                        {item.year}
                      </span>
                      <span className="text-[11px] text-[#86868b] bg-black/[0.04] dark:bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-black/[0.06] dark:border-white/[0.06]">
                        {item.category}
                      </span>
                    </div>

                    <span className="text-[11px] font-medium text-[#30d158] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">
                    {item.title}
                  </h3>

                  {/* Short Subtitle / Context */}
                  <p className="mt-1 text-xs sm:text-sm text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90 font-medium leading-relaxed">
                    {item.shortDesc}
                  </p>

                  {/* Full Detailed Description */}
                  <p className="mt-2 text-xs sm:text-sm text-[#86868b] leading-relaxed">
                    {item.fullDesc}
                  </p>

                  {/* Milestone Key Highlight */}
                  {item.highlight && (
                    <div className="mt-4 pt-3.5 border-t border-black/[0.06] dark:border-white/[0.06] flex items-start gap-2.5 text-xs text-[#86868b]">
                      <CheckCircle2 className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] shrink-0 mt-0.5" />
                      <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">{item.highlight}</span>
                    </div>
                  )}

                  {/* Associated Technologies */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="apple-tag text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
