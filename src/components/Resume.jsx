import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Resume() {
  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Apple Callout Bento Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="apple-card p-8 sm:p-12 text-center relative overflow-hidden"
      >
        <div className="max-w-2xl mx-auto">
          
          <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] block mb-3">
            Opportunities &amp; Collaboration
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#f5f5f7] tracking-tight">
            Ready to build together.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed">
            Interested in exploring full-stack engineering roles, multimodal AI applications, or technical collaborations? Download my resume or send an inquiry.
          </p>

          {/* Qualifications Chips */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-[#f5f5f7] block">MCA Student (2025–27)</span>
                <span className="text-[11px] text-[#86868b]">MEA Engineering College</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-[#f5f5f7] block">AI &amp; Agentic Systems</span>
                <span className="text-[11px] text-[#86868b]">PyTorch, OpenCV, RAG</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-[#f5f5f7] block">Full Stack &amp; APIs</span>
                <span className="text-[11px] text-[#86868b]">MERN + Python FastAPI</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profileData.resumePath}
              download="Athul_Krishna_Resume.pdf"
              className="apple-btn-primary inline-flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href="#contact"
              className="apple-btn-secondary inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#86868b]" />
              <span>Send Message</span>
            </a>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
