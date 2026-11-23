import React, { useEffect, useRef } from 'react';

export default function LiveWallpaper() {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smoothing
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      radius: 160
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // Update interactive CSS spotlight
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(750px circle at ${e.clientX}px ${e.clientY}px, rgba(255, 74, 23, 0.08), rgba(34, 211, 238, 0.03) 40%, transparent 70%)`;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(800px circle at 50% 30%, rgba(255, 74, 23, 0.06), transparent 70%)`;
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Particle Setup
    let particles = [];
    const colors = [
      { r: 255, g: 74, b: 23 },   // Electric Vermillion
      { r: 34, g: 211, b: 238 },  // Cyan
      { r: 139, g: 92, b: 246 },  // Violet
      { r: 255, g: 120, b: 68 }   // Light Vermillion
    ];

    const initParticles = () => {
      const count = Math.min(Math.floor((width * height) / 22000), 65);
      particles = [];

      for (let i = 0; i < count; i++) {
        const color = colors[i % colors.length];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          originX: Math.random() * width,
          originY: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 0.8,
          color: color,
          alpha: Math.random() * 0.45 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseVal: Math.random() * Math.PI
        });
      }
    };

    initParticles();

    // Floating Aurora Ambient Orbs
    const orbs = [
      { x: 0.2, y: 0.25, r: 380, color: 'rgba(255, 74, 23, 0.09)', speed: 0.0006 },
      { x: 0.8, y: 0.35, r: 420, color: 'rgba(34, 211, 238, 0.06)', speed: 0.0008 },
      { x: 0.4, y: 0.8, r: 460, color: 'rgba(139, 92, 246, 0.07)', speed: 0.0005 }
    ];

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Draw slow-moving dynamic cosmic aurora gradients
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        const ox = (orb.x + Math.sin(time * orb.speed + i) * 0.12) * width;
        const oy = (orb.y + Math.cos(time * orb.speed + i * 2) * 0.12) * height;

        const radial = ctx.createRadialGradient(ox, oy, 10, ox, oy, orb.r);
        radial.addColorStop(0, orb.color);
        radial.addColorStop(1, 'transparent');

        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw subtle animated horizontal scan radar beam
      const scanY = (time * 0.4) % (height + 200) - 100;
      const scanGrad = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50);
      scanGrad.addColorStop(0, 'transparent');
      scanGrad.addColorStop(0.5, 'rgba(255, 74, 23, 0.03)');
      scanGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 50, width, 100);

      // 3. Connect particles with subtle glowing cyber mesh
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const edgeAlpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${edgeAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // 4. Interactive connection to cursor
        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            const mAlpha = (1 - mdist / mouse.radius) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 74, 23, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Gently nudge particle with mouse force field
            p1.x += (mdx / mdist) * 0.35;
            p1.y += (mdy / mdist) * 0.35;
          }
        }
      }

      // 5. Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Pulse size & glow
        p.pulseVal += p.pulseSpeed;
        const currentRadius = p.radius + Math.sin(p.pulseVal) * 0.5;
        const currentAlpha = p.alpha + Math.sin(p.pulseVal) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.4, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.max(0.1, currentAlpha)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* 1. Underlying Dark Luxury Canvas */}
      <div className="absolute inset-0 bg-[#08090D]" />

      {/* 2. Cyber Matrix Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" 
      />

      {/* 3. Subtle Perspective Grid Floor for Deep 3D Immersion */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[45vh] opacity-[0.25] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,74,23,0.06) 100%)',
          maskImage: 'linear-gradient(to top, black, transparent)'
        }}
      />

      {/* 4. Real-time HTML5 60fps Particle & Aurora Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* 5. Smooth Mouse Spotlight Illumination Aura */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 transition-opacity duration-500 opacity-90"
        style={{
          background: 'radial-gradient(800px circle at 50% 30%, rgba(255, 74, 23, 0.06), transparent 70%)'
        }}
      />
    </div>
  );
}