import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "AI/ML DEVELOPER",
    "FULL STACK MERN SPECIALIST",
    "PYTORCH & COMPUTER VISION",
    "FASTAPI MICROSERVICES",
    "RAG & AGENTIC AI (ReAct)",
    "MCA STUDENT @ MEA ENGG COLLEGE",
    "OFFLINE-FIRST ELECTRON & SQLITE",
    "SOCKET.IO REAL-TIME TRANSIT",
    "MALAYALAM VOICE INTERACTION",
    "AGRIPULSE (AGRIMITRA 360)",
  ];

  // Duplicate for seamless loop
  const displayItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-gradient-to-r from-[#FF4A17] via-[#FF5500] to-[#E63900] shadow-[0_0_30px_rgba(255,74,23,0.3)] border-y border-white/20 z-20">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {displayItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-black font-display font-extrabold text-sm sm:text-base tracking-widest uppercase">
            <span>{text}</span>
            <span className="text-white text-base animate-spin" style={{ animationDuration: '6s' }}>
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
