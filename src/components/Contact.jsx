import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Phone,
  FileDown,
  CheckCircle2
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a brief message.';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message should be at least 8 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Hi Athul,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-3"
        >
          Get In Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]"
        >
          Let's connect.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-[#86868b] leading-relaxed"
        >
          Whether you have an engineering role to fill, a project idea, or just want to discuss AI systems, my inbox is open.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Communication Bento (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Email Quick Copy Box */}
          <div className="apple-card p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
              Direct Email
            </span>
            <div className="text-base sm:text-lg font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight break-all mb-4">
              {profileData.email}
            </div>
            <button
              onClick={copyEmailToClipboard}
              className="apple-btn-secondary w-full py-2.5 text-xs inline-flex items-center justify-center gap-2"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-[#30d158]" />
                  <span>Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#86868b]" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Resume Download Card */}
          <div className="apple-card p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] block mb-2">
              Curriculum Vitae
            </span>
            <div className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-4">
              Download complete ATS-formatted software engineering resume
            </div>
            <a
              href={profileData.resumePath}
              download="Athul_Krishna_Resume.pdf"
              className="apple-btn-primary w-full py-2.5 text-xs inline-flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          {/* Quick Specs Bento */}
          <div className="apple-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-[#86868b]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#86868b] block">Phone / WhatsApp</span>
                <span className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{profileData.phone}</span>
              </div>
            </div>

            <div className="w-px h-px bg-black/[0.06] dark:bg-white/[0.06] w-full" />

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-[#86868b]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-[#86868b] block">Location</span>
                <span className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{profileData.location}</span>
              </div>
            </div>

            <div className="w-px h-px bg-black/[0.06] dark:bg-white/[0.06] w-full" />

            <div>
              <span className="text-[11px] text-[#86868b] block mb-2">Social Channels</span>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: iOS-Style Clean Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="apple-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-6">
              Send a Direct Message
            </h3>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#30d158]/10 text-[#30d158] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">Message Prepared</h4>
                <p className="text-xs text-[#86868b] max-w-sm mx-auto">
                  Thank you! Your email client has been prepared. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="apple-btn-secondary text-xs mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#86868b] block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-black/50 border border-black/[0.08] dark:border-white/[0.08] text-sm text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-[#ff453a] mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs text-[#86868b] block mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-black/50 border border-black/[0.08] dark:border-white/[0.08] text-sm text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-[#ff453a] mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#86868b] block mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Developer Role / Collaboration"
                    className="w-full px-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-black/50 border border-black/[0.08] dark:border-white/[0.08] text-sm text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#86868b] block mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-black/50 border border-black/[0.08] dark:border-white/[0.08] text-sm text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-[#ff453a] mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="apple-btn-primary w-full py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Preparing...' : 'Send Inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>

    </section>
  );
}
