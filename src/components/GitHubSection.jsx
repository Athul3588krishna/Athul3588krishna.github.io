import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  BookMarked
} from 'lucide-react';
import { profileData } from '../data/profile';

const curatedRepos = [
  {
    name: "agripulse-agrimitra360",
    description: "Multimodal Smart Agriculture Platform: PyTorch, OpenCV, ReAct Agent & Malayalam Voice.",
    language: "Python / React",
    languageColor: "#3572A5",
    url: "https://github.com/Athul3588krishna/agripulse-agrimitra360"
  },
  {
    name: "ey-auto",
    description: "Real-time auto-rickshaw transit & dispatch platform using MERN and Socket.IO.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/Athul3588krishna/ey-auto"
  },
  {
    name: "pos-management-system",
    description: "Offline-first standalone desktop retail point-of-sale solution with Electron & SQLite.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/Athul3588krishna/pos-management-system"
  },
  {
    name: "ecoclean",
    description: "AI-Powered Civic Waste Portal with Gemini Vision classification & Leaflet GIS.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/Athul3588krishna/ecoclean"
  }
];

export default function GitHubSection() {
  const [profile, setProfile] = useState({
    login: profileData.githubUsername,
    public_repos: 14,
    followers: 18,
    following: 24,
    bio: "Full Stack Developer | MCA Student @ MEA Engineering College | MERN & AI Enthusiast"
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${profileData.githubUsername}`);
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
        // Fallback silently
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Apple Section Header */}
      <div className="max-w-3xl mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-[#86868b] mb-3"
        >
          Open Source
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-[#f5f5f7]"
        >
          GitHub repositories.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-[#86868b] leading-relaxed"
        >
          Open-source repositories, architectural prototypes, and full codebase implementations.
        </motion.p>
      </div>

      {/* GitHub Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="apple-card p-6 sm:p-8 mb-8"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg flex items-center justify-center shadow-sm">
              AKR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-[#f5f5f7] tracking-tight">
                  {profileData.name}
                </h3>
                <span className="text-xs text-neutral-600 dark:text-[#86868b] font-medium">
                  @{profileData.githubUsername}
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-[#86868b] mt-0.5">
                {profile.bio}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="text-center">
              <span className="text-base font-bold text-neutral-900 dark:text-[#f5f5f7] block">
                {profile.public_repos}
              </span>
              <span className="text-[11px] text-neutral-600 dark:text-[#86868b]">Repositories</span>
            </div>
            <div className="w-px h-8 bg-black/[0.08] dark:bg-white/[0.08]" />
            <div className="text-center">
              <span className="text-base font-bold text-neutral-900 dark:text-[#f5f5f7] block">
                {profile.followers}
              </span>
              <span className="text-[11px] text-neutral-600 dark:text-[#86868b]">Followers</span>
            </div>
            <div className="w-px h-8 bg-black/[0.08] dark:bg-white/[0.08]" />
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Real Repositories Grid with High Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {curatedRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-card p-5 group hover:border-black/[0.18] dark:hover:border-white/[0.16] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-[#86868b] mb-2">
                <span className="flex items-center gap-1.5 text-neutral-900 dark:text-[#f5f5f7] font-semibold">
                  <BookMarked className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff]" />
                  <span>{repo.name}</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-xs text-neutral-700 dark:text-[#86868b] leading-relaxed">
                {repo.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-neutral-600 dark:text-[#86868b]">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: repo.languageColor }}
                />
                <span className="font-medium">{repo.language}</span>
              </div>

              <span className="text-[11px] text-[#0071e3] dark:text-[#2997ff] font-medium group-hover:underline inline-flex items-center gap-1">
                <span>Browse Code</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
