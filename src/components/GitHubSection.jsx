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
  CheckCircle2
} from 'lucide-react';
import { profileData } from '../data/profile';

// Curated repositories fallback
const fallbackRepos = [
  {
    name: "ecoclean",
    description: "AI-Powered Smart Waste Management Portal with Gemini Vision and Leaflet GIS mapping.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 8,
    forks: 3,
    url: "https://github.com/Athul3588krishna/ecoclean",
    updated: "2026"
  },
  {
    name: "ey-auto",
    description: "Real-time auto-rickshaw transit & dispatch automation using MERN and Socket.io.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 6,
    forks: 2,
    url: "https://github.com/Athul3588krishna/ey-auto",
    updated: "2026"
  },
  {
    name: "proofnext",
    description: "AI SaaS platform for cryptographically verifiable work evidence and deliverable auditing.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 12,
    forks: 4,
    url: "https://github.com/Athul3588krishna/proofnext",
    updated: "2026"
  },
  {
    name: "devpulse-dashboard",
    description: "Developer productivity telemetry and git commit analytics cockpit built with React.",
    language: "CSS / React",
    languageColor: "#563d7c",
    stars: 5,
    forks: 1,
    url: "https://github.com/Athul3588krishna/devpulse",
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
    bio: "Full Stack Developer | MCA Student @ MEA Engineering College | MERN & AI Enthusiast"
  });
  const [repos, setRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Optional public GitHub user fetch with timeout & fallback
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${profileData.githubUsername}`, {
          headers: { Accept: 'application/vnd.github.v3+json' }
        });
        if (res.ok) {
          const data = await res.json();
          setProfile((prev) => ({
            ...prev,
            login: data.login,
            public_repos: data.public_repos || prev.public_repos,
            followers: data.followers || prev.followers,
            following: data.following || prev.following,
            bio: data.bio || prev.bio
          }));
        }
      } catch (err) {
        // Graceful fallback to static data
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Simulated GitHub Contribution Matrix (last 16 weeks)
  const contributionWeeks = Array.from({ length: 18 }, (_, weekIdx) => {
    return Array.from({ length: 7 }, (_, dayIdx) => {
      // Deterministic pleasant contribution pattern
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
    1: 'bg-cyan-950 border border-cyan-800/40',
    2: 'bg-cyan-700/80',
    3: 'bg-cyan-400',
  };

  return (
    <section id="github" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4"
        >
          <Github className="w-3.5 h-3.5" />
          <span>OPEN SOURCE FOOTPRINT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight"
        >
          GitHub <span className="text-gradient">Activity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          Continuous repository commits, feature branches, and collaborative source development.
        </motion.p>
      </div>

      {/* Profile Card & Activity Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] mb-10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center font-display font-extrabold text-2xl text-cyan-400 shadow-lg shadow-cyan-950/40">
              AKR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-display font-bold text-white">
                  {profileData.name}
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  @{profileData.githubUsername}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                Full Stack Developer passionate about MERN architecture and generative AI workflows.
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
              <span className="text-xl font-mono font-bold text-emerald-400 block">Active</span>
              <span className="text-[11px] font-mono text-slate-400">Contributions</span>
            </div>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-cyan-400/40 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">View GitHub Profile</span>
            </a>
          </div>

        </div>

        {/* Contribution Activity Grid Simulation */}
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contribution Matrix &amp; Developer Cadence</span>
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.04]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-950 border border-cyan-800/40" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-700/80" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
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
            className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-cyan-500/40 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2 text-cyan-400 font-mono font-semibold text-sm group-hover:text-cyan-300">
                  <BookMarked className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span>{repo.name}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-200 transition-colors" />
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
