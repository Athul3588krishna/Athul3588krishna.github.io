import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, FileText, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl rounded-3xl bg-[#0f111c] border border-white/10 shadow-2xl shadow-cyan-950/50 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/[0.08] bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white line-clamp-1">
                  {certificate.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              aria-label="Close certificate lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Certificate Preview Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-inner group">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto max-h-[480px] object-contain mx-auto"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center gap-1.5 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Credential</span>
              </div>
            </div>

            {/* Description & Highlight */}
            <div className="space-y-3">
              <h4 className="text-sm font-display font-bold text-slate-200">
                Credential Overview &amp; Learning Scope:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {certificate.description}
              </p>

              {certificate.highlight && (
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{certificate.highlight}</span>
                </div>
              )}
            </div>

            {/* Covered Skills */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Demonstrated Skills &amp; Standards:
              </span>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/[0.08]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Credential ID and Verification Footer */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400">
                <span>Credential Reference: </span>
                <span className="text-cyan-400 font-semibold">{certificate.credentialId}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {certificate.pdf && (
                  <a
                    href={certificate.image}
                    download={`${certificate.id}.svg`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>Download File</span>
                  </a>
                )}

                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Online</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
