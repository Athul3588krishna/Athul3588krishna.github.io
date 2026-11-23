import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  BookOpen,
  Sparkles,
  ArrowRight,
  Layers,
  ArrowUpRight,
  ChevronRight,
  Terminal,
  Activity
} from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF4A17]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF7844] text-xs font-mono font-bold tracking-wider uppercase mb-4"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>PRODUCTION PORTFOLIO</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Engineered with modern MERN architecture, generative AI vision models, real-time WebSockets, and offline-first desktop systems.
        </motion.p>
      </div>

      {/* Large Featured Project Cards (Saihasoft Bento / Editorial Style) */}
      <div className="space-y-16">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          const projectNum = String(index + 1).padStart(2, '0');

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-[32px] border border-white/[0.08] overflow-hidden p-6 sm:p-8 lg:p-10 relative group hover:border-[#FF4A17]/50 hover:shadow-[0_0_40px_rgba(255,74,23,0.18)] transition-all duration-300"
            >
              
              {/* Radial card hover background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FF4A17]/10 via-transparent to-transparent rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}>
                
                {/* Project Media Mockup (7 cols) */}
                <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-6'}`}>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 cursor-pointer shadow-2xl group/media"
                  >
                    <motion.img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover/media:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/media:opacity-30 transition-opacity" />

                    {/* Click for Case study Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-opacity duration-300">
                      <span className="px-5 py-3 rounded-full bg-black/90 text-white font-mono text-xs font-bold border border-[#FF4A17]/60 flex items-center gap-2 backdrop-blur-md shadow-2xl">
                        <BookOpen className="w-4 h-4 text-[#FF7844]" />
                        <span>Case Study &amp; Architecture ↗</span>
                      </span>
                    </div>

                    {/* Quick Category Badge */}
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono font-semibold text-[#FF7844]">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Details (5 cols) */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${
                  isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                }`}>
                  <div>
                    {/* Number and Subtitle Header */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-2xl font-black text-[#FF4A17]">
                        {projectNum}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white group-hover:text-[#FF7844] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    {/* Tagline / elevator pitch */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                      {project.description}
                    </p>

                    {/* Mini Stats Bar */}
                    {project.stats && (
                      <div className="mt-6 grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <span className="text-xs sm:text-sm font-mono font-bold text-white block">
                              {stat.value}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono block">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 7).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900/90 border border-white/[0.08] group-hover:border-[#FF4A17]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 7 && (
                        <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-[#FF7844] bg-[#FF4A17]/10">
                          +{project.technologies.length - 7} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Strip (Saihasoft-style Pill Buttons with ↗) */}
                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF4A17] to-[#FF6B3D] hover:from-[#FF5500] hover:to-[#FFA114] shadow-md shadow-[#FF4A17]/25 transition-all duration-200"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#FF4A17]/40 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF7844] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label="View Project on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}
