import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Sparkles,
  Server,
  Layers,
  Laptop
} from 'lucide-react';
import { profileData } from '../data/profile';

const pillarIcons = [
  Sparkles,
  Server,
  Layers,
  Laptop
];

export default function Hero() {
  return (
    <section id="about" className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Social Floating Quick Dock (Desktop Upper-Left, Just Below Header) */}
      <div className="hidden xl:flex fixed left-6 top-28 flex-col items-center gap-3 z-40 p-2 rounded-full bg-white/90 dark:bg-[#161617]/90 backdrop-blur-xl border border-black/[0.14] dark:border-white/[0.10] shadow-md transition-all">
        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <Github className="w-4 h-4" />
        </a>

        <a
          href={profileData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <a
          href={`mailto:${profileData.email}`}
          className="p-2.5 rounded-full text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all"
          title="Send Direct Email"
          aria-label="Send Direct Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>

      {/* Hero Keynote Headline */}
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7] leading-[1.08]"
        >
          {profileData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#0071e3] dark:text-[#2997ff]"
        >
          Full Stack &amp; AI/ML Developer.
        </motion.p>

        {/* Mobile / Tablet Quick Social Pills */}
        <div className="flex xl:hidden items-center gap-2 mt-4">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white dark:bg-[#161617] border border-black/[0.14] dark:border-white/[0.08] text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-white transition-all shadow-sm"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white dark:bg-[#161617] border border-black/[0.14] dark:border-white/[0.08] text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-white transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="p-2 rounded-full bg-white dark:bg-[#161617] border border-black/[0.14] dark:border-white/[0.08] text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-white transition-all shadow-sm"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Authentic Profile & Narrative (Top Bento Row) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Authentic Photo & Credentials Summary (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col justify-between apple-card p-5 sm:p-6"
        >
          <div className="relative rounded-[22px] overflow-hidden border border-black/[0.12] dark:border-white/[0.08] bg-neutral-200 dark:bg-black aspect-square mb-4 shadow-sm">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-full bg-white/95 dark:bg-black/85 backdrop-blur-md border border-black/[0.12] dark:border-white/[0.1] flex items-center justify-between text-xs shadow-md">
              <span className="flex items-center gap-1.5 text-neutral-900 dark:text-white font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                MCA Student (2025–27)
              </span>
              <span className="text-neutral-600 dark:text-[#86868b] font-medium">{profileData.location}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06] text-xs text-neutral-700 dark:text-[#86868b] leading-relaxed">
            <span className="text-neutral-950 dark:text-[#f5f5f7] font-semibold">Master of Computer Applications</span> candidate at MEA Engineering College (KTU) with distinction in B.Sc. Computer Science from KRS Sree Narayana College (Calicut University).
          </div>
        </motion.div>

        {/* Right Column: Engineering Narrative (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 apple-card p-6 sm:p-8 flex flex-col justify-between space-y-4"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-[#86868b] block mb-2">
              Engineering Narrative
            </span>

            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-[#f5f5f7] tracking-tight mb-4">
              Bridging Computer Vision, Agentic AI &amp; Full-Stack Systems.
            </h2>

            <p className="text-sm text-neutral-700 dark:text-[#86868b] leading-relaxed">
              I’m an MCA student at <span className="text-neutral-950 dark:text-[#f5f5f7] font-semibold">MEA Engineering College, Perinthalmanna</span> (KTU) with a Bachelor of Science in Computer Science from <span className="text-neutral-950 dark:text-[#f5f5f7] font-semibold">KRS Sree Narayana College, Valanchery</span> (University of Calicut). Over the past four years, my focus has grown from foundational algorithmic theory into building production-ready AI systems and scalable web platforms.
            </p>

            <p className="text-sm text-neutral-700 dark:text-[#86868b] leading-relaxed mt-3">
              My engineering approach is anchored in solving tangible real-world problems. I built <span className="text-[#0071e3] dark:text-[#2997ff] font-semibold">AgriPulse (AgriMitra 360)</span>—a multimodal smart agriculture platform integrating PyTorch leaf disease detection, OpenCV HSV lesion severity calculations, ReAct autonomous agents with tool calling, and bilingual Malayalam/English voice interaction.
            </p>

            <p className="text-sm text-neutral-700 dark:text-[#86868b] leading-relaxed mt-3">
              My hands-on experience covers Python, FastAPI microservices, React.js, Node.js, Express, MongoDB Atlas, and offline-first desktop systems using Electron.js and SQLite. Certified in MERN Full Stack Development by Illinois Institute of Technology and Entri Elevate, I focus on building reliable, responsive software.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Balanced Full-Width 4 Core Pillars Bento Grid (Below Photo & Narrative) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {profileData.about.highlights.map((pillar, idx) => {
          const IconComp = pillarIcons[idx] || Sparkles;

          return (
            <div
              key={idx}
              className="apple-card p-5 flex flex-col justify-between group hover:border-black/[0.22] dark:hover:border-white/[0.22] transition-all"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-[#0071e3] dark:text-[#2997ff] mb-3 group-hover:scale-105 transition-transform">
                  <IconComp className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-[#f5f5f7] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-700 dark:text-[#86868b] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>

    </section>
  );
}
