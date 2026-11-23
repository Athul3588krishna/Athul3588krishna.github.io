import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    // Simulate send or launch mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Also construct a clean mailto backup
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] overflow-hidden bg-[#08090D]">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-gradient-to-tl from-[#FF4A17]/15 to-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-[#FF4A17]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4 text-xs font-mono uppercase tracking-widest text-[#FF7844]">
            <MessageSquare className="w-3.5 h-3.5 text-[#FF4A17]" />
            <span>09 / Connect</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white tracking-tight leading-[1.1]">
            Start A <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">Conversation.</span>
          </h2>

          <p className="mt-5 text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to talk about AI, Computer Vision, or MERN development? Drop me a note below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Card */}
            <div className="rounded-3xl bg-[#0B0C12]/90 border border-white/[0.08] p-8 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-[#FF4A17]/10 rounded-full blur-2xl group-hover:bg-[#FF4A17]/20 transition-all duration-700" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FF4A17]/10 border border-[#FF4A17]/25 flex items-center justify-center text-[#FF4A17]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">Athul Krishna R</h3>
                  <p className="text-xs text-slate-400">MCA Student & AI / Full Stack Engineer</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Currently based in Malappuram, Kerala, actively building full-stack platforms and AI vision solutions while completing my MCA at MEA Engineering College.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4">
                
                {/* Email with Copy Action */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF4A17]/40 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#FF4A17]/10 flex items-center justify-center text-[#FF4A17] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Email Address</div>
                      <a href={`mailto:${profileData.email}`} className="text-sm text-slate-200 hover:text-[#FF7844] truncate block transition-colors">
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF4A17]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FF4A17]/10 flex items-center justify-center text-[#FF4A17] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Phone & WhatsApp</div>
                      <a href={`https://wa.me/917034405846`} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-200 hover:text-[#FF7844] transition-colors">
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/917034405846"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-emerald-400 transition-colors shrink-0 ml-2"
                    title="Chat on WhatsApp"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-[#FF4A17]/10 flex items-center justify-center text-[#FF4A17] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Location</div>
                    <div className="text-sm text-slate-200">
                      {profileData.location}, India
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0B0C12]/90 border border-white/[0.08] p-8 sm:p-10 backdrop-blur-xl relative">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                  Send A Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details and click send. I usually reply within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">Message Prepared!</h4>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Your email client was triggered with your message, and I look forward to connecting with you!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-slate-300 border border-white/10 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {errorMessage && (
                    <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Your Name <span className="text-[#FF4A17]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#FF4A17] focus:ring-1 focus:ring-[#FF4A17] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Email Address <span className="text-[#FF4A17]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#FF4A17] focus:ring-1 focus:ring-[#FF4A17] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Collaboration on AgriTech / Web Project"
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#FF4A17] focus:ring-1 focus:ring-[#FF4A17] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Message <span className="text-[#FF4A17]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your idea, project, or what you'd like to discuss..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#FF4A17] focus:ring-1 focus:ring-[#FF4A17] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#FF4A17] text-white font-semibold text-sm shadow-xl shadow-[#FF4A17]/25 hover:bg-[#FF3800] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Preparing Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}