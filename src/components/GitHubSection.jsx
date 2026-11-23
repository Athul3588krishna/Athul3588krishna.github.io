import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  GitFork,
  Star,
  BookMarked,
  Code2,
  ExternalLink,
  GitCommit,
  GitPullRequest,
  ArrowUpRight
} from 'lucide-react';
import { profileData } from '../data/profile';

const fallbackRepos = [
  {
    name: "agripulse-agrimitra360",
    description: "Multimodal Smart Agriculture Platform combining PyTorch/MobileNet, OpenCV, RAG, ReAct Agent, and Malayalam voice interaction.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 14,
    forks: 5,
    url: "https://github.com/Athul3588krishna/agripulse-agrimitra360",
    updated: "2026"
  },
  {
    name: "ey-auto",
    description: "Real-time auto-rickshaw transit & dispatch automation using MERN and Socket.IO.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 8,
    forks: 3,
    url: "https://github.com/Athul3588krishna/ey-auto",
    updated: "2026"
  },
  {
    name: "pos-management-system",
    description: "Offline-first standalone desktop retail POS system built with Electron.js, React, Node.js, and local SQLite database.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 10,
    forks: 4,
    url: "https://github.com/Athul3588krishna/pos-management-system",
    updated: "2026"
  },
  {
    name: "ecoclean",
    description: "AI-Powered Smart Waste Management Portal with Google Gemini Vision AI and Leaflet GIS mapping.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 9,
    forks: 2,
    url: "https://github.com/Athul3588krishna/ecoclean",
    updated: "2026"
  }
];

export default function GitHubSection() {
  const [profile, setProfile] = useState({
    login: profileData.githubUsername,
    public_repos: 14,
    followers: 18,
    following: 24,
    avatar_url: profileData.avatar,
    bio: "AI/ML Developer | MCA Student @ MEA Engineering College | Python & MERN Specialist"
  });
  const [repos] = useState(fallbackRepos);

  const contributionWeeks = Array.from({ length: 18 }, (_, weekIdx) => {
    return Array.from({ length: 7 }, (_, dayIdx) => {
      const pseudoVal = (weekIdx * 7 + dayIdx * 3 + (weekIdx % 3) * 5) % 10;
      let level = 0;
      if (pseudoVal > 7) level = 3;
      else if (pseudoVal > 4) level = 2;
      else if (pseudoVal > 2) level = 1;
      return level;
    });
  });

  const levelColor = {
    0: 'bg-white/[0.04]',
    1: 'bg-[#FF4A17]/30 border border-[#FF4A17]/40',
    2: 'bg-[#FF4A17]/70',
    3: 'bg-[#FF4A17]',
  };

  return (
    <section id="github" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#FF4A17]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4A17]/10 border border-[#FF4A17]/30 text-[#FF7844] text-xs font-mono font-bold tracking-wider uppercase mb-4"
        >
          <Github className="w-3.5 h-3.5" />
          <span>OPEN SOURCE FOOTPRINT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
        >
          GitHub <span className="text-gradient">Activity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Continuous repository commits, feature branches, and collaborative source development.
        </motion.p>
      </div>

      {/* Profile Card & Activity Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-[32px] p-7 sm:p-9 border border-white/[0.08] mb-12 hover:border-[#FF4A17]/30"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-black border border-[#FF4A17]/40 flex items-center justify-center font-display font-black text-2xl text-[#FF7844] shadow-lg shadow-black/50">
              AKR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-display font-bold text-white">
                  {profileData.name}
                </h3>
                <span className="text-xs font-mono text-[#FF7844]">
                  @{profileData.githubUsername}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                AI/ML &amp; Full Stack Developer • MCA Student @ MEA Engineering College
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="text-center">
              <span className="text-xl font-mono font-bold text-white block">
                {profile.public_repos}+
              </span>
              <span className="text-[11px] font-mono text-slate-400">Repositories</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-mono font-bold text-white block">500+</span>
              <span className="text-[11px] font-mono text-slate-400">Commits (2025-26)</span>
            </div>
            <div className="text-center">
              <span className="text-xl font-mono font-bold text-[#FF7844] block">Active</span>
              <span className="text-[11px] font-mono text-slate-400">Cadence</span>
            </div>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-white/[0.06] hover:bg-[#FF4A17] hover:border-[#FF4A17] border border-white/10 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile ↗</span>
            </a>
          </div>

        </div>

        {/* Contribution Activity Grid Simulation */}
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <GitCommit className="w-3.5 h-3.5 text-[#FF7844]" />
              <span>Commit Cadence &amp; Activity Matrix</span>
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.04]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF4A17]/30 border border-[#FF4A17]/40" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF4A17]/70" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF4A17]" />
              <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[550px]">
              {contributionWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((lvl, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3 h-3 rounded-sm ${levelColor[lvl]} transition-colors hover:scale-125 duration-150`}
                      title={`Activity level: ${lvl}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Repositories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {repos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-[26px] p-6 border border-white/[0.08] hover:border-[#FF4A17]/40 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2 text-[#FF7844] font-mono font-bold text-sm group-hover:text-[#FFA114]">
                  <BookMarked className="w-4 h-4 text-slate-400 group-hover:text-[#FF7844] transition-colors" />
                  <span>{repo.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#FF7844] transition-colors" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {repo.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: repo.languageColor }}
                />
                <span>{repo.language}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3 text-slate-400" />
                  {repo.forks}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

    </section>
  );
}
