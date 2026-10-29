import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  BookOpen
} from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-[#86868b] mb-3"
        >
          Selected Works
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7]"
        >
          Crafted with intent.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-[#86868b] leading-relaxed"
        >
          Flagship platforms spanning computer vision, agentic AI, real-time distributed backends, and offline-first desktop systems.
        </motion.p>
      </div>

      {/* Apple Bento Showcase Grid */}
      <div className="space-y-10">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="apple-card p-6 sm:p-8 lg:p-10 group"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}>
                
                {/* Media Preview Container */}
                <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-6'}`}>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative rounded-[20px] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-black cursor-pointer group/media shadow-md"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover/media:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="apple-btn-primary text-xs py-2 px-4 shadow-xl">
                        Explore Case Study
                      </span>
                    </div>

                    {/* Category Pill Tag */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/[0.1] text-[11px] font-medium text-white">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Narrative & Details */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${
                  isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                }`}>
                  <div>
                    {/* Eyebrow Subtitle */}
                    <span className="text-xs font-semibold text-[#0071e3] dark:text-[#2997ff] uppercase tracking-wider block mb-1.5">
                      {project.subtitle}
                    </span>

                    {/* Project Title */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-[#f5f5f7] tracking-tight hover:text-[#0071e3] dark:hover:text-white cursor-pointer transition-colors"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-neutral-700 dark:text-[#86868b] leading-relaxed">
                      {project.description}
                    </p>

                    {/* High-Contrast Micro-Stats Grid */}
                    {project.stats && (
                      <div className="mt-6 grid grid-cols-3 gap-2 p-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06]">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-[#f5f5f7] block tracking-tight">
                              {stat.value}
                            </span>
                            <span className="text-[10px] text-neutral-600 dark:text-[#86868b] block mt-0.5">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="apple-tag text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="apple-tag text-[11px] text-neutral-500 dark:text-[#86868b]">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="apple-btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/[0.08] dark:border-white/[0.08] text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-[#f5f5f7] transition-all ml-auto"
                      title="GitHub Repository"
                      aria-label="View on GitHub"
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
