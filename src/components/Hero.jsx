import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Compass,
  FileDown,
  Terminal,
  ArrowUpRight,
  Sparkles,
  MapPin,
  GraduationCap,
  Brain,
  Code2,
  Box
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  const cardRef = useRef(null);
  const sphereCanvasRef = useRef(null);

  // 3D Tilt & Holographic Lighting States
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Sphere Interactive Canvas Animation
  useEffect(() => {
    const canvas = sphereCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const size = 520;
    canvas.width = size;
    canvas.height = size;
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = 175;

    // Generate 65 Fibonacci Points on a 3D Sphere
    const numPoints = 65;
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        baseX: x * radius,
        baseY: y * radius,
        baseZ: z * radius
      });
    }

    let rotX = 0.2;
    let rotY = 0.3;
    let targetRotSpeedX = 0.003;
    let targetRotSpeedY = 0.005;

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      rotX += targetRotSpeedX;
      rotY += targetRotSpeedY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Rotate and Project 3D Points
      const projected = points.map((p) => {
        // Rotate around Y axis
        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate around X axis
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        // 3D perspective projection
        const fov = 380;
        const scale = fov / (fov + z2);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;
        const alpha = Math.max(0.08, Math.min(1, (z2 + radius) / (2 * radius)));

        return {
          x: projX,
          y: projY,
          z: z2,
          scale,
          alpha
        };
      });

      // Draw connecting 3D cyber constellation lines
      const maxDist = 75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist && p1.z > -radius * 0.4 && p2.z > -radius * 0.4) {
            const lineAlpha = (1 - dist / maxDist) * 0.22 * ((p1.alpha + p2.alpha) / 2);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 74, 23, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw Glowing 3D Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (p.z > -radius * 0.7) {
          ctx.beginPath();
          const nodeRadius = (i % 4 === 0 ? 2.8 : 1.8) * p.scale;
          ctx.arc(p.x, p.y, Math.max(0.6, nodeRadius), 0, Math.PI * 2);

          const isCyan = i % 3 === 0;
          if (isCyan) {
            ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha * 0.85})`;
          } else {
            ctx.fillStyle = `rgba(255, 74, 23, ${p.alpha * 0.9})`;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle 3D Card Hover & Mouse Motion
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate 3D tilt angles (smooth range between -16deg and +16deg)
    const tiltX = ((y - centerY) / centerY) * -16;
    const tiltY = ((x - centerX) / centerX) * 16;

    setTilt({ x: tiltX, y: tiltY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const stats = [
    { label: "MCA Student", value: "MEA Engg College" },
    { label: "Core Expertise", value: "AI/ML • MERN • Vision" },
    { label: "Flagship Project", value: "AgriPulse 360" },
  ];

  return (
    <header
      id="hero"
      aria-label="Athul Krishna R Introduction"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-24 overflow-hidden"
    >
      {/* Subtle Ambient Depth Lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#FF4A17]/15 via-purple-600/10 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#22D3EE]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Split-Screen Grid: Left Content + Right 3D Holographic Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Heading, Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-[#FF4A17]/40 text-xs font-mono text-slate-200 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,74,23,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4A17] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4A17]" />
              </span>
              <span className="tracking-wide">
                MCA Student @ MEA Engineering College (2025 – 2027)
              </span>
            </motion.div>

            {/* Intro Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-[#FF7844] text-sm sm:text-base font-mono font-bold tracking-widest uppercase mb-3"
            >
              <Terminal className="w-4 h-4 text-[#FF4A17]" />
              <span>Hi, I&apos;m Athul Krishna R</span>
            </motion.div>

            {/* Mega Heading with Gradient Impact */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-4xl sm:text-5xl md:text-6xl font-['Space_Grotesk'] font-extrabold tracking-tight text-white leading-[1.08]"
            >
              AI/ML &amp; Full Stack Developer{' '}
              <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent block sm:inline">
                building intelligent
              </span>{' '}
              <span className="text-[#FF4A17]">
                digital platforms.
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Bridging modern full-stack development with multimodal AI, computer vision, and autonomous agent workflows. Experienced in Python, FastAPI, PyTorch, OpenCV, RAG, ReAct agent architectures, and MERN stack.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-7 grid grid-cols-3 gap-3 w-full max-w-xl p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-left"
            >
              {stats.map((s, idx) => (
                <div key={idx} className="px-2 border-r border-white/5 last:border-0">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{s.label}</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-['Space_Grotesk'] truncate">{s.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons: [Explore Work ↗], [View Journey ↗], [Download Resume ↗] */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF4A17] hover:bg-[#FF3800] shadow-xl shadow-[#FF4A17]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Featured Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#journey"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF4A17]/50 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Compass className="w-4 h-4 text-[#FF7844]" />
                <span>View Journey</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={profileData.resumePath}
                download="Athul_Krishna_R_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#22D3EE]/50 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-[#22D3EE]" />
                <span>Download Resume</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: High-End 3D Holographic Card + 3D Cyber Sphere */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Interactive 3D Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-3 text-[11px] font-mono text-slate-400"
            >
              <Box className="w-3.5 h-3.5 text-[#FF4A17] animate-pulse" />
              <span>Interactive 3D Hologram • Move Cursor to Tilt</span>
            </motion.div>

            {/* 3D Sphere Background Canvas */}
            <div className="absolute -top-12 -left-12 sm:-left-16 w-[520px] h-[520px] pointer-events-none -z-10 opacity-70">
              <canvas ref={sphereCanvasRef} className="w-full h-full" />
            </div>

            {/* 3D Parallax Tilt Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[370px] sm:max-w-[420px] cursor-pointer"
              style={{
                perspective: '1200px'
              }}
            >
              <motion.div
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  scale: isHovered ? 1.03 : 1
                }}
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 24,
                  mass: 0.5
                }}
                className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl transition-shadow duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: isHovered
                    ? '0 30px 60px -15px rgba(255, 74, 23, 0.35), 0 0 40px rgba(34, 211, 238, 0.2)'
                    : '0 20px 45px -10px rgba(0, 0, 0, 0.7)'
                }}
              >
                {/* 3D Outer Electric Vermillion Aura Frame */}
                <div
                  className="absolute -inset-1.5 bg-gradient-to-tr from-[#FF4A17] via-[#FF7844]/60 to-[#22D3EE]/40 rounded-3xl blur-xl opacity-40 transition duration-700 pointer-events-none"
                  style={{
                    transform: 'translateZ(-15px)'
                  }}
                />

                {/* Inner Card Frame */}
                <div
                  className="relative rounded-[22px] overflow-hidden bg-[#0C0D16] border border-white/10"
                  style={{
                    transform: 'translateZ(15px)'
                  }}
                >
                  {/* Full Size Image */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Athul Krishna R • Full Stack & AI Developer"
                      className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-all duration-700"
                      style={{
                        transform: 'translateZ(25px)'
                      }}
                    />

                    {/* Gradient Vignette for Depth & Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/20 to-transparent opacity-90 pointer-events-none" />

                    {/* Dynamic Holographic Specular Glare Layer */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 74, 23, 0.12) 35%, transparent 70%)`,
                        opacity: glare.opacity,
                        transform: 'translateZ(45px)'
                      }}
                    />

                    {/* Top Right Floating Badge: Multimodal & Vision (3D Elevation: 70px) */}
                    <div
                      className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono text-slate-100 shadow-xl"
                      style={{
                        transform: 'translateZ(70px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FF4A17]" />
                      <span>Multimodal AI</span>
                    </div>

                    {/* Bottom Floating Info Plate inside Card (3D Elevation: 60px) */}
                    <div
                      className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 space-y-2"
                      style={{
                        transform: 'translateZ(60px)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono font-bold text-white">Athul Krishna R</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#FF7844] bg-[#FF4A17]/15 px-2 py-0.5 rounded-full border border-[#FF4A17]/30">
                          MCA &apos;27
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-200">
                        <GraduationCap className="w-3.5 h-3.5 text-[#FF4A17] shrink-0" />
                        <span className="truncate">MEA Engineering College, KTU</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Malappuram, Kerala, India</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating Orbiting 3D Tech Badges outside the card (3D Elevation: 90px) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="hidden sm:flex absolute -left-6 top-16 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0B0C12]/95 border border-[#FF4A17]/50 backdrop-blur-md shadow-2xl text-xs font-mono text-slate-100 z-30"
                  style={{
                    transform: 'translateZ(90px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.6), 0 0 20px rgba(255,74,23,0.3)'
                  }}
                >
                  <Brain className="w-4 h-4 text-[#FF4A17]" />
                  <span>PyTorch &amp; OpenCV</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                  className="hidden sm:flex absolute -right-6 top-1/2 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0B0C12]/95 border border-cyan-500/50 backdrop-blur-md shadow-2xl text-xs font-mono text-slate-100 z-30"
                  style={{
                    transform: 'translateZ(95px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.6), 0 0 20px rgba(34,211,238,0.3)'
                  }}
                >
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>MERN + FastAPI</span>
                </motion.div>

              </motion.div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 text-center">
          <a
            href="#journey"
            className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-[#FF7844] transition-colors group cursor-pointer"
            aria-label="Scroll to Journey section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-[#FF7844] transition-colors">
              Scroll To Explore Journey
            </span>
            <div className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-[#FF4A17]/60 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#FF4A17]"
              />
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}