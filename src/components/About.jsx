import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  MapPin,
  GraduationCap,
  Sparkles,
  Terminal,
  Code2,
  CheckCircle2,
  Briefcase
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-3"
        >
          Engineering Narrative
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7]"
        >
          Behind the code.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed"
        >
          A software engineer driven by practical problem-solving, modern architecture, and multimodal AI.
        </motion.p>
      </div>

      {/* Split-Screen Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visual Avatar & Status Bento (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Avatar Container */}
          <div className="apple-card p-6 overflow-hidden">
            <div className="relative rounded-[20px] overflow-hidden border border-white/[0.08] bg-black aspect-square mb-5">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-full bg-black/75 backdrop-blur-md border border-white/[0.1] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                  MCA Student (2025–27)
                </span>
                <span className="text-[#86868b]">{profileData.location}</span>
              </div>
            </div>

            {/* Developer Spec Box (Apple macOS Terminal Inspired) */}
            <div className="rounded-2xl bg-black/60 border border-white/[0.08] p-4 text-xs font-mono text-[#86868b]">
              <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-[11px] text-[#86868b]">developer.json</span>
              </div>
              <div className="space-y-1">
                <p><span className="text-[#2997ff]">"developer"</span>: &#123;</p>
                <p className="pl-4">"name": <span className="text-[#f5f5f7]">"{profileData.name}"</span>,</p>
                <p className="pl-4">"focus": <span className="text-[#f5f5f7]">"AI/ML &amp; Full Stack"</span>,</p>
                <p className="pl-4">"college": <span className="text-[#f5f5f7]">"MEA Engineering College"</span>,</p>
                <p className="pl-4">"flagship": <span className="text-[#2997ff]">"AgriMitra 360"</span></p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Narrative & Pillars (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Authentic Bio */}
          <div className="apple-card p-6 sm:p-8 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f7] tracking-tight">
              Bridging Computer Vision, Agentic AI &amp; Full-Stack Systems.
            </h3>

            <p className="text-sm text-[#86868b] leading-relaxed">
              I’m an MCA student at <span className="text-[#f5f5f7] font-medium">MEA Engineering College, Perinthalmanna</span> (KTU) with a B.Sc. in Computer Science from <span className="text-[#f5f5f7] font-medium">KRS Sree Narayana College, Valanchery</span> (University of Calicut). Over the past four years, my focus has grown from core algorithmic foundations into building production-ready AI systems and scalable web platforms.
            </p>

            <p className="text-sm text-[#86868b] leading-relaxed">
              My engineering approach is anchored in solving tangible real-world problems. I built <span className="text-[#2997ff] font-medium">AgriPulse (AgriMitra 360)</span>—a multimodal smart agriculture platform integrating PyTorch leaf disease detection, OpenCV HSV lesion severity calculations, ReAct autonomous agents with tool calling, and bilingual Malayalam/English voice interaction.
            </p>

            <p className="text-sm text-[#86868b] leading-relaxed">
              My hands-on experience covers Python, FastAPI microservices, React.js, Node.js, Express, MongoDB Atlas, and offline-first desktop systems using Electron.js and SQLite. Certified in MERN Full Stack Development by Illinois Institute of Technology and Entri Elevate, I focus on building reliable, responsive software.
            </p>
          </div>

          {/* 4 Pillars Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.about.highlights.map((pillar, idx) => (
              <div
                key={idx}
                className="apple-card p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                  <h4 className="text-sm font-semibold text-[#f5f5f7]">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </motion.div>

      </div>

    </section>
  );
}
