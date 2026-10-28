import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, ArrowUpRight, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-violet-600/10 rounded-3xl blur-[100px] pointer-events-none -z-10" />

      {/* Main CTA Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/30 relative overflow-hidden text-center shadow-2xl shadow-cyan-950/40"
      >
        {/* Subtle grid pattern inside */}
        <div className="absolute inset-0 bg-grid-tech opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER &amp; COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Let's build something <span className="text-gradient">meaningful.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Interested in discussing innovative software projects, collaborations, or technical opportunities? Check out my full resume or get in touch.
          </p>

          {/* Key Qualifications Snapshot */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white block">MCA Student (2025–2027)</span>
                <span className="text-[11px] text-slate-400">MEA Engineering College, KTU</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white block">AI/ML &amp; Agentic Systems</span>
                <span className="text-[11px] text-slate-400">PyTorch, OpenCV, RAG, ReAct</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white block">Full Stack &amp; Microservices</span>
                <span className="text-[11px] text-slate-400">MERN + FastAPI (Illinois Tech Cert)</span>
              </div>
            </div>
          </div>

          {/* Action CTAs: [Download Resume], [Contact Me] */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profileData.resumePath}
              download="Athul_Krishna_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </div>

          <p className="mt-4 text-xs font-mono text-slate-500">
            Resume formatted for ATS &amp; enterprise recruiter screening • Path: /public/resume.pdf
          </p>

        </div>
      </motion.div>

    </section>
  );
}
