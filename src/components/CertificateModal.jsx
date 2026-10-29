import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ cert, certificate, onClose }) {
  const item = cert || certificate;

  useEffect(() => {
    // Lock body scroll on touch and desktop while modal is open
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

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Apple Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-[28px] bg-white dark:bg-[#161617] border border-black/[0.1] dark:border-white/[0.1] shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-[#161617]/90 backdrop-blur-xl sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black/[0.04] dark:bg-white/[0.08] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-neutral-900 dark:text-[#f5f5f7]">
                <Award className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-[#f5f5f7] tracking-tight line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-[#86868b]">
                  {item.issuer} • {item.date}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black/[0.1] dark:hover:bg-white/[0.16] text-neutral-700 dark:text-[#86868b] hover:text-black dark:hover:text-white transition-all focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Preview */}
          <div className="p-5 sm:p-8 space-y-6 overflow-y-auto touch-scroll">
            
            {/* Visual Preview */}
            <div className="rounded-[20px] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-neutral-900 dark:bg-black p-2 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto max-h-96 object-contain rounded-xl"
              />
            </div>

            {/* Credential Details Bento */}
            <div className="apple-card-elevated p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-neutral-600 dark:text-[#86868b]">Credential Identifier</span>
                <span className="text-xs font-mono font-semibold text-neutral-900 dark:text-[#f5f5f7] bg-black/[0.04] dark:bg-white/[0.06] px-2.5 py-1 rounded-full border border-black/[0.06] dark:border-white/[0.08]">
                  {item.credentialId}
                </span>
              </div>

              {item.highlight && (
                <div className="pt-2 text-xs text-neutral-700 dark:text-[#86868b] leading-relaxed">
                  <span className="text-neutral-900 dark:text-[#f5f5f7] font-semibold">Highlight: </span>
                  {item.highlight}
                </div>
              )}

              {item.skills && (
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-neutral-600 dark:text-[#86868b] uppercase tracking-wider block mb-2">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span key={skill} className="apple-tag text-[10px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Footer Actions Strip */}
          <div className="p-5 sm:p-6 border-t border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161617] flex items-center justify-between">
            <a
              href={item.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary text-xs py-2 px-5 inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verify Official Credential</span>
              <ExternalLink className="w-3 h-3" />
            </a>

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
