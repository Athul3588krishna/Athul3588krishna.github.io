import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  BookOpen,
  Sparkles,
  ArrowRight,
  Layers,
  ChevronRight,
  Terminal,
  Activity
} from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>PRODUCTION PORTFOLIO</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Engineered with modern MERN architecture, generative AI vision models, real-time WebSockets, and geospatial routing algorithms.
        </motion.p>
      </div>

      {/* Large Featured Project Cards */}
      <div className="space-y-12">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl border border-white/[0.08] overflow-hidden p-6 sm:p-8 lg:p-10 relative group hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)] transition-all duration-300"
            >
              
              {/* Radial card hover background */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}>
                
                {/* Project Media Mockup Showcase (7 cols) */}
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
                      <span className="px-5 py-2.5 rounded-xl bg-slate-900/90 text-white font-mono text-xs font-semibold border border-cyan-400/50 flex items-center gap-2 backdrop-blur-md shadow-2xl">
                        <BookOpen className="w-4 h-4 text-cyan-400" />
                        Explore Case Study &amp; Architecture
                      </span>
                    </div>

                    {/* Quick Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-300">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Details (5 cols) */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${
                  isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                }`}>
                  <div>
                    {/* Top Tagline */}
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 block mb-1">
                      {project.subtitle}
                    </span>

                    {/* Project Title */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    {/* Tagline / elevator pitch */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                      {project.description}
                    </p>

                    {/* Mini Stats Bar */}
                    {project.stats && (
                      <div className="mt-5 grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
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
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900/90 border border-white/[0.08] group-hover:border-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Strip */}
                  <div className="mt-8 pt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all duration-200"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/30 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors"
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
