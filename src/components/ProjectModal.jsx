import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Cpu,
  UserCheck,
  Workflow
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Lock body scroll on mobile and desktop while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Apple Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-2xl"
        />

        {/* Apple Modal Sheet with Dual Theme Support */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl rounded-[28px] bg-white dark:bg-[#161617] border border-black/[0.1] dark:border-white/[0.1] shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-[#161617]/90 backdrop-blur-xl sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-neutral-700 dark:text-[#86868b]">
                  {project.category}
                </span>
                <span className="text-xs text-neutral-500 dark:text-[#86868b]">Architectural Breakdown</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7]">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black/[0.1] dark:hover:bg-white/[0.16] text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-white transition-all focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body Content */}
          <div className="p-5 sm:p-8 space-y-8 overflow-y-auto touch-scroll">
            
            {/* Project Image Preview */}
            <div className="rounded-[20px] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-black">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto max-h-72 object-cover"
              />
            </div>

            {/* Problem & Solution Bento */}
            {project.caseStudy && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="apple-card-elevated p-5">
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-[#86868b] text-xs font-semibold uppercase tracking-wider mb-2">
                    <AlertCircle className="w-4 h-4 text-neutral-600 dark:text-[#86868b]" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-sm text-neutral-800 dark:text-[#f5f5f7] leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="apple-card-elevated p-5">
                  <div className="flex items-center gap-2 text-[#0071e3] dark:text-[#2997ff] text-xs font-semibold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-sm text-neutral-800 dark:text-[#f5f5f7] leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Architecture Details */}
            {project.caseStudy?.architecture && (
              <div className="apple-card-elevated p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-[#86868b] mb-3">
                  <Workflow className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
                  <span>System Architecture &amp; Data Pipeline</span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-[#86868b] leading-relaxed">
                  {project.caseStudy.architecture}
                </p>
              </div>
            )}

            {/* Engineering Challenges & Solutions */}
            {project.caseStudy?.challenges && (
              <div className="apple-card-elevated p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-[#86868b] mb-4">
                  <Cpu className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
                  <span>Key Technical Challenges Solved</span>
                </div>
                <ul className="space-y-3">
                  {project.caseStudy.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-[#86868b]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] dark:bg-[#2997ff] mt-2 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* My Contribution */}
            {project.caseStudy?.myContribution && (
              <div className="apple-card-elevated p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-[#86868b] mb-3">
                  <UserCheck className="w-4 h-4 text-[#30d158]" />
                  <span>My Engineering Contributions</span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-[#86868b] leading-relaxed">
                  {project.caseStudy.myContribution}
                </p>
              </div>
            )}

            {/* Full Technologies Used */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-[#86868b] block mb-3">
                Full Technology Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="apple-tag text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions Strip */}
          <div className="p-5 sm:p-6 border-t border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161617] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-primary text-xs py-2 px-5 inline-flex items-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Live Demo</span>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-secondary text-xs py-2 px-5 inline-flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-neutral-600 dark:text-[#86868b] hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Dismiss
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
