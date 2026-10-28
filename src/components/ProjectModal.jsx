import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  Cpu,
  UserCheck,
  Workflow
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl rounded-3xl bg-[#0d0f1a] border border-white/10 shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 my-8 flex flex-col max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/[0.08] bg-slate-900/70 backdrop-blur-md sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">Case Study &amp; Architecture</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-display font-bold text-white">
                {project.title} — {project.subtitle}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Cover Screenshot / Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto max-h-[460px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Quick links banner over cover */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-cyan-200 bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-white/10 backdrop-blur-md transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400 shadow-md shadow-cyan-500/25 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20">
                <div className="flex items-center gap-2 text-rose-400 text-sm font-display font-bold mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.caseStudy?.problem || project.description}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-display font-bold mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Engineering Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.caseStudy?.solution || project.tagline}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-3">
              <h4 className="text-base font-display font-bold text-white flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span>Core Capabilities &amp; Architecture Modules</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Architecture & Data Flow */}
            {project.caseStudy?.architecture && (
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] space-y-2">
                <h4 className="text-sm font-display font-bold text-cyan-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>System Architecture &amp; Data Pipeline</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                  {project.caseStudy.architecture}
                </p>
              </div>
            )}

            {/* Challenges & My Contribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Engineering Challenges */}
              {project.caseStudy?.challenges && (
                <div className="space-y-3">
                  <h4 className="text-sm font-display font-bold text-amber-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Technical Challenges Overcome</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {project.caseStudy.challenges.map((c, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-amber-500/40"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* My Personal Contribution */}
              {project.caseStudy?.myContribution && (
                <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-2.5">
                  <h4 className="text-sm font-display font-bold text-cyan-300 flex items-center gap-2">
                    <UserCheck className="w-4 h-4" />
                    <span>My Individual Contribution</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {project.caseStudy.myContribution}
                  </p>
                </div>
              )}

            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="p-5 sm:p-6 border-t border-white/[0.08] bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-mono">
              Designed &amp; Engineered by Athul Krishna R
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Preview</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
