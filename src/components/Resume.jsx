import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle2, Award, BookOpen, Sparkles, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Resume() {
  const highlights = [
    {
      icon: BookOpen,
      title: "Academic Background",
      detail: "MCA Student @ MEA Engineering College (2025–2027) • B.Sc. Computer Science (2022–2025)"
    },
    {
      icon: Award,
      title: "Industry Credential",
      detail: "Certified Full Stack MERN Developer — Illinois Institute of Technology & Entri Elevate"
    },
    {
      icon: Sparkles,
      title: "Applied AI Expertise",
      detail: "PyTorch & OpenCV Computer Vision, RAG advisory, ReAct Agentic multi-tool architectures"
    },
    {
      icon: CheckCircle2,
      title: "Real-World Projects",
      detail: "AgriPulse (AI Conclave Hackathon), Ey Auto (Socket.IO transit), POS (Offline SQLite)"
    }
  ];

  return (
    <section id="resume" className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] overflow-hidden bg-[#08090D]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FF4A17]/15 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4 text-xs font-mono uppercase tracking-widest text-[#FF7844]">
            <FileText className="w-3.5 h-3.5 text-[#FF4A17]" />
            <span>08 / Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white tracking-tight leading-[1.1]">
            Let&apos;s Build <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">Something</span>{" "}
            <span className="text-[#FF4A17]">Meaningful.</span>
          </h2>

          <p className="mt-5 text-slate-400 text-base sm:text-lg leading-relaxed">
            Interested in collaborating, exploring technical work, or reviewing my complete educational and project history? Download my verified curriculum vitae below.
          </p>
        </div>

        {/* Main Resume Bento Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent p-px">
          <div className="rounded-3xl bg-[#0B0C12]/90 backdrop-blur-xl p-8 sm:p-12 border border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Quick Profile Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/25 text-xs font-mono text-[#FF7844] mb-3">
                    Verified Resume Document
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
                    {profileData.name}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    {profileData.status} • {profileData.location}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF4A17]/30 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#FF4A17]/10 flex items-center justify-center text-[#FF4A17] mb-2.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Latest Update: November 2026 • Format: PDF • Direct Local Download</span>
                </div>
              </div>

              {/* Right Column: High-Impact Download Actions */}
              <div className="lg:col-span-5 flex flex-col justify-center gap-4 lg:border-l lg:border-white/[0.08] lg:pl-10">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF4A17]/20 to-[#FF4A17]/5 border border-[#FF4A17]/30 flex items-center justify-center text-[#FF4A17] mx-auto shadow-lg shadow-[#FF4A17]/10">
                    <FileText className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="text-lg font-bold text-white font-['Space_Grotesk']">
                      Athul_Krishna_R_Resume.pdf
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Complete profile with Full Stack, AI & Academic Experience
                    </div>
                  </div>

                  {/* Primary Download Button */}
                  <a
                    href={profileData.resumePath}
                    download="Athul_Krishna_R_Resume.pdf"
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#FF4A17] text-white font-semibold text-sm shadow-xl shadow-[#FF4A17]/25 hover:bg-[#FF3800] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Resume</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Secondary Preview Button */}
                  <a
                    href={profileData.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open PDF in New Browser Tab</span>
                  </a>
                </div>

                <div className="text-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#FF7844] transition-colors"
                  >
                    <span>Prefer direct message? Jump to Contact Form</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}