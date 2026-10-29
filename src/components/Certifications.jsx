import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Eye, Calendar, ShieldCheck } from 'lucide-react';
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
    <section id="certifications" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-[#86868b] mb-3"
        >
          Accreditations &amp; Degrees
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7]"
        >
          Verified credentials.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-[#86868b] leading-relaxed"
        >
          Accredited credentials across full-stack MERN engineering, multimodal AI, and academic degrees with verified previews.
        </motion.p>
      </div>

      {/* iOS Segmented Filter Controls */}
      <div className="mb-10 overflow-x-auto pb-2 scrollbar-none touch-scroll">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-black/[0.04] dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08]">
          {certificateCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-neutral-900 dark:text-white bg-black/[0.08] dark:bg-white/[0.14] shadow-sm font-semibold'
                    : 'text-neutral-600 dark:text-[#86868b] hover:text-neutral-900 dark:hover:text-[#f5f5f7] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Credentials Grid with Certificate Previews on Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="apple-card p-5 sm:p-6 flex flex-col justify-between group hover:border-black/[0.18] dark:hover:border-white/[0.18]"
            >
              <div>
                {/* Certificate Visual Image Photo Frame */}
                <div
                  onClick={() => setActiveModalCert(cert)}
                  className="relative rounded-[20px] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-neutral-900 dark:bg-black aspect-[16/10] mb-5 flex items-center justify-center p-3 cursor-pointer group/preview shadow-md"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover/preview:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="apple-btn-primary text-xs py-1.5 px-3.5 inline-flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Preview</span>
                    </span>
                  </div>
                </div>

                {/* Top Status & Date */}
                <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-[#86868b] mb-2.5">
                  <span className="font-semibold text-[#0071e3] dark:text-[#2997ff] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                  <span>{cert.date}</span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setActiveModalCert(cert)}
                  className="text-base font-bold text-neutral-900 dark:text-[#f5f5f7] tracking-tight hover:text-[#0071e3] dark:hover:text-white cursor-pointer transition-colors"
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="mt-1 text-xs text-neutral-600 dark:text-[#86868b] font-medium">
                  {cert.issuer}
                </p>

                {/* Highlight or Description */}
                <p className="mt-2.5 text-xs text-neutral-700 dark:text-[#86868b] leading-relaxed line-clamp-2">
                  {cert.highlight || cert.description}
                </p>

                {/* Skills tags */}
                {cert.skills && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span key={s} className="apple-tag text-[10px]">
                        {s}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="apple-tag text-[10px] text-neutral-500 dark:text-[#86868b]">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalCert(cert)}
                  className="apple-btn-secondary text-xs py-1.5 px-3.5 inline-flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </button>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-600 dark:text-[#86868b] hover:text-[#0071e3] dark:hover:text-[#2997ff] flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Certificate Lightbox Modal */}
      {activeModalCert && (
        <CertificateModal
          cert={activeModalCert}
          onClose={() => setActiveModalCert(null)}
        />
      )}

    </section>
  );
}
