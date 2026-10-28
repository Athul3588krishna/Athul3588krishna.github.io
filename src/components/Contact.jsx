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
  MessageSquare,
  Sparkles,
  AlertCircle,
  Phone
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
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulated reliable submit with mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Construct fallback mailto to allow direct email sending client-side
      const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Hi Athul,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.open(`mailto:${profileData.email}?subject=${subject}&body=${body}`, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>DIRECT CONNECT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          Have an exciting project, full-time role, or collaboration in mind? Drop a message below.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Email Quick Action Card */}
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08] relative group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 hover:bg-cyan-900/60 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
            <span className="text-xs text-slate-400 font-mono block">Direct Inquiries</span>
            <a
              href={`mailto:${profileData.email}`}
              className="text-base sm:text-lg font-mono font-semibold text-white hover:text-cyan-300 transition-colors block mt-1 break-all"
            >
              {profileData.email}
            </a>
          </div>

          {/* Phone & Direct Call Card */}
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08] relative group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 hover:bg-emerald-900/60 transition-colors"
              >
                <span>Call Directly</span>
              </a>
            </div>
            <span className="text-xs text-slate-400 font-mono block">Phone &amp; WhatsApp</span>
            <a
              href={`tel:${profileData.phone}`}
              className="text-base sm:text-lg font-mono font-semibold text-white hover:text-emerald-300 transition-colors block mt-1"
            >
              {profileData.phone}
            </a>
          </div>

          {/* Location & Status Card */}
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Current Base</span>
                <span className="text-base font-display font-bold text-white">
                  {profileData.location}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Open to on-site roles in Bangalore, Kochi, Trivandrum, or high-velocity remote teams.
            </p>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-4 border border-white/[0.08] hover:border-cyan-500/40 flex items-center gap-3 group transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-cyan-400/50">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">GitHub</span>
                <span className="text-xs font-semibold text-white group-hover:text-cyan-300">
                  Follow &amp; Star
                </span>
              </div>
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-4 border border-white/[0.08] hover:border-blue-500/40 flex items-center gap-3 group transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-blue-400/50">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">LinkedIn</span>
                <span className="text-xs font-semibold text-white group-hover:text-blue-300">
                  Connect
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl relative">
            
            {/* Form Success State Banner */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-emerald-300">
                      Message drafted successfully!
                    </span>
                    <span>
                      Your email client has been opened to dispatch this directly to Athul. Thanks for reaching out!
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/10 focus:border-cyan-400/60'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/10 focus:border-cyan-400/60'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Subject */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full Stack Engineering Role / Project Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400/60 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, product idea, or timeline..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-rose-500/60 focus:border-rose-500'
                      : 'border-white/10 focus:border-cyan-400/60'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:opacity-50 transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Preparing Dispatch...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

      </div>

    </section>
  );
}
