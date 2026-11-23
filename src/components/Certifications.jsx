import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Eye, Calendar, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { certificateCategories, certificationsData } from '../data/certifications';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalCert, setActiveModalCert] = useState(null);

  const filteredCerts =
    selectedCategory === 'all'
      ? certificationsData
      : certificationsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="certificates" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FF4A17]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF7844] text-xs font-mono font-bold tracking-wider uppercase mb-4"
        >
          <Award className="w-3.5 h-3.5" />
          <span>VERIFIED CREDENTIALS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
        >
          Certifications &amp; <span className="text-gradient">Diplomas</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Accredited specializations across Full Stack MERN, Multimodal AI, and Systems Engineering.
        </motion.p>
      </div>

      {/* Category Filter Pills (Saihasoft style) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {certificateCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF4A17] to-[#FF6B3D] text-white shadow-lg shadow-[#FF4A17]/30 border border-[#FF4A17]'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Certificate Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        <AnimatePresence>
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-[30px] overflow-hidden border border-white/[0.08] flex flex-col justify-between group hover:border-[#FF4A17]/40"
            >
              {/* Preview Thumbnail Container */}
              <div
                onClick={() => setActiveModalCert(cert)}
                className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer group"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-5 py-2.5 rounded-full bg-black/90 text-white font-mono text-xs font-bold border border-[#FF4A17]/50 flex items-center gap-2 backdrop-blur-md shadow-xl">
                    <Eye className="w-4 h-4 text-[#FF7844]" />
                    View Certificate ↗
                  </span>
                </div>

                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono font-semibold text-[#FF7844]">
                  {cert.date}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7844] font-bold block mb-1.5">
                    {cert.issuer}
                  </span>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#FF7844] transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#FF7844] bg-[#FF4A17]/10">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7844] hover:text-[#FFA114] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Lightbox</span>
                  </button>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                    title="External Verification"
                    aria-label="Verify credential online"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF7844]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Modal */}
      {activeModalCert && (
        <CertificateModal
          certificate={activeModalCert}
          onClose={() => setActiveModalCert(null)}
        />
      )}

    </section>
  );
}
