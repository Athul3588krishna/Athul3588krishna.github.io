import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Layers,
  Compass,
  FileDown,
  Terminal,
  Code2,
  Cpu,
  Bot
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  const canvasRef = useRef(null);

  // Subtle interactive particle mesh on background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particlesCount = Math.min(Math.floor(width / 30), 45);
    const particles = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        color: i % 3 === 0 ? 'rgba(34, 211, 238, ' : i % 3 === 1 ? 'rgba(99, 102, 241, ' : 'rgba(168, 85, 247, ',
        alpha: Math.random() * 0.4 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with subtle lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and move particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const floatingBadges = [
    { name: "Python • PyTorch", color: "from-amber-500/20 to-orange-500/20", border: "border-orange-500/40", text: "text-orange-300", top: "18%", left: "8%", delay: 0 },
    { name: "FastAPI • RAG", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/40", text: "text-emerald-300", top: "22%", right: "8%", delay: 1.2 },
    { name: "React.js • Tailwind", color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/40", text: "text-cyan-300", bottom: "30%", left: "7%", delay: 0.6 },
    { name: "Agentic AI • ReAct", color: "from-purple-500/20 to-violet-500/20", border: "border-purple-500/40", text: "text-purple-300", bottom: "24%", right: "8%", delay: 1.8 },
    { name: "Node.js • MongoDB", color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/40", text: "text-green-300", top: "66%", right: "5%", delay: 0.9 },
  ];

  return (
    <header
      id="hero"
      aria-label="Athul Krishna R Introduction"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-tech"
    >
      {/* Background Particle Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* Futuristic Radial Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Floating Interactive Tech Badges (Hidden on tiny mobile) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        {floatingBadges.map((badge, idx) => (
          <motion.div
            key={badge.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -14, 0],
            }}
            transition={{
              y: {
                duration: 5 + idx,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: badge.delay,
              },
              opacity: { duration: 0.8, delay: 0.3 * idx },
            }}
            style={{
              top: badge.top,
              bottom: badge.bottom,
              left: badge.left,
              right: badge.right,
            }}
            className={`absolute px-3.5 py-1.5 rounded-xl bg-gradient-to-r ${badge.color} border ${badge.border} backdrop-blur-md shadow-lg shadow-black/40 flex items-center gap-2`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className={`text-xs font-mono font-semibold ${badge.text}`}>
              {badge.name}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Academic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-medium text-slate-300 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-slate-300">
            MCA Student @ MEA Engineering College (2025 – 2027)
          </span>
        </motion.div>

        {/* Hero Portrait Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative mb-6"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 shadow-[0_0_40px_rgba(6,182,212,0.4)] group">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="w-full h-full rounded-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div
            className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-cyan-500 border-2 border-[#08090D] shadow-md flex items-center justify-center"
            title="Athul Krishna R • MCA Student"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>
        </motion.div>

        {/* Intro Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 text-cyan-400 text-sm sm:text-base font-mono font-medium tracking-wide uppercase mb-3"
        >
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>Hi, I'm Athul Krishna</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]"
        >
          AI/ML &amp; Full Stack Developer{' '}
          <span className="text-gradient">
            building intelligent digital platforms.
          </span>
        </motion.h1>

        {/* Supporting Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          MCA student at MEA Engineering College with hands-on experience in Python, FastAPI, PyTorch,
          computer vision, RAG, ReAct agentic systems, and MERN full-stack architectures.
        </motion.p>

        {/* Action Buttons: [View My Journey], [Explore Projects], [Download Resume] */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Projects</span>
          </a>

          <a
            href="#journey"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>View My Journey</span>
          </a>

          <a
            href={profileData.resumePath}
            download="Athul_Krishna_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-violet-400/40 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <FileDown className="w-4 h-4 text-violet-400" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Icons Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profileData.email}`}
            className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-violet-400/50 hover:bg-violet-500/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-200"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Subtle Scroll Down Indicator */}
        <motion.a
          href="#journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 inline-flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group cursor-pointer"
          aria-label="Scroll to Journey section"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-cyan-300 transition-colors">
            Scroll to explore
          </span>
          <div className="w-5 h-9 rounded-full border border-slate-700 group-hover:border-cyan-400/60 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          </div>
        </motion.a>

      </div>
    </header>
  );
}
