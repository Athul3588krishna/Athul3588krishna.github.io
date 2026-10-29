/**
 * Athul Krishna R — Apple-Inspired Portfolio Interactions
 * Pure Vanilla JavaScript (Zero Dependencies, Zero Build Tools)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Dual-Theme Support (Dark / Light) with LocalStorage Persistence
  // --------------------------------------------------------------------------
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');

  function initTheme() {
    const saved = localStorage.getItem('akr_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : (saved === null ? true : prefersDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeIcons(isDark);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('akr_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('akr_theme', 'light');
    }
    updateThemeIcons(nextDark);
  }

  function updateThemeIcons(isDark) {
    themeToggleBtns.forEach((btn) => {
      btn.innerHTML = isDark
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
      btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });
  }

  themeToggleBtns.forEach((btn) => btn.addEventListener('click', toggleTheme));
  initTheme();

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer Toggle
  // --------------------------------------------------------------------------
  const mobileToggleBtn = document.querySelector('.mobile-menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggleBtn.innerHTML = isOpen
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Scroll Spy (Active Section Indicator)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Dynamic Scroll-Driven Timeline Progress Line
  // --------------------------------------------------------------------------
  const timelineSection = document.getElementById('journey');
  const timelineFill = document.querySelector('.timeline-progress-fill');

  if (timelineSection && timelineFill) {
    window.addEventListener('scroll', () => {
      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling when top of section reaches 75% of viewport
      const start = windowHeight * 0.75;
      const totalHeight = rect.height;
      const currentScroll = start - rect.top;

      let progress = (currentScroll / totalHeight) * 100;
      progress = Math.max(0, Math.min(100, progress));

      timelineFill.style.height = `${progress}%`;
    });
  }

  // --------------------------------------------------------------------------
  // 5. Skills Category Filter Tabs
  // --------------------------------------------------------------------------
  const skillFilterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillTiles = document.querySelectorAll('.skill-tile');

  skillFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-skill-filter');

      skillTiles.forEach((tile) => {
        const cat = tile.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          tile.style.display = 'flex';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 6. Certifications Category Filter Tabs
  // --------------------------------------------------------------------------
  const certFilterBtns = document.querySelectorAll('[data-cert-filter]');
  const certCards = document.querySelectorAll('.cert-card');

  certFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      certFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-cert-filter');

      certCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. Interactive Case Study Modal
  // --------------------------------------------------------------------------
  const projectsData = {
    agripulse: {
      title: "AgriPulse (AgriMitra 360)",
      category: "AI & Agentic Systems",
      coverImage: "projects/agripulse.svg",
      problem: "Smallholder farmers in Kerala face severe crop yield losses due to delayed pest/disease diagnosis, language barriers in technical agricultural literature, volatile mandi market prices, and predatory middleman arbitrage.",
      solution: "AgriPulse (AgriMitra 360) solves this through a multimodal AI companion: farmers snap a photo of a sick leaf for instant PyTorch/OpenCV diagnosis, and talk directly in Malayalam to a ReAct agent that checks real-time mandi prices, weather spray safety, and KAU/ICAR advisory databases.",
      architecture: "Farmer interacts via React frontend with Web Speech API. Image payloads route to FastAPI microservice where PyTorch runs CNN inference and OpenCV computes lesion severity percentage. User queries invoke a LangChain/ReAct agent that calls Open-Meteo and Mandi APIs, with RAG vector search over KAU/ICAR manuals. Session and telemetry data persist in MongoDB Atlas.",
      challenges: [
        "Calibrating HSV color-space masks in OpenCV to accurately separate necrotic fungal lesions from healthy chlorophyll tissue across varied ambient lighting.",
        "Engineering deterministic ReAct agent loops that select between live weather APIs, mandi pricing data, and agricultural knowledge bases without hallucinating.",
        "Achieving low-latency speech recognition and phonetic mapping for regional Malayalam agricultural terminology using browser-native Web Speech APIs.",
        "Bridging a dual-backend architecture where React coordinates Node.js/Express application sessions with an asynchronous Python FastAPI computer vision microservice."
      ],
      myContribution: "Designed and engineered the full platform end-to-end: trained and fine-tuned the PyTorch MobileNet crop disease classifier, implemented OpenCV HSV lesion severity calculations, built the FastAPI AI service with ReAct agent tool calling, structured MongoDB Atlas data pipelines, and crafted the responsive UI with Malayalam speech interaction.",
      technologies: ["Python", "FastAPI", "PyTorch", "OpenCV", "MobileNet", "RAG", "ReAct Agent", "Tool Calling", "React.js", "Node.js", "Express", "MongoDB Atlas", "Telegram Bot API", "Web Speech API"],
      liveDemo: "https://agripulse-demo.vercel.app",
      github: "https://github.com/Athul3588krishna/agripulse-agrimitra360"
    },
    eyauto: {
      title: "Ey Auto",
      category: "Full Stack & Realtime",
      coverImage: "projects/ey-auto.svg",
      problem: "Local auto-rickshaw transportation lacked organized digital dispatching, resulting in commuter frustration during peak hours and uncompensated empty cruising for drivers without middleman commissions.",
      solution: "Ey Auto delivers a transparent, full-stack digital hail system providing real-time passenger matching, instant ride alerts to nearby registered auto drivers, and centralized administration.",
      architecture: "React Single Page Application communicates with Express backend. Socket.IO maintains live bidirectional channels between passengers and nearby drivers. Trip records, user profiles, and ratings are stored in MongoDB.",
      challenges: [
        "Handling socket connection reconnections and preserving active ride states across unstable mobile networks.",
        "Implementing clean role-based authorization to prevent unauthorized access between driver, passenger, and admin route scopes.",
        "Designing intuitive mobile-first interfaces tailored for non-tech-savvy auto-rickshaw operators."
      ],
      myContribution: "Served as lead architect for B.Sc. Computer Science Final Year Project: designed the full MongoDB schema, implemented Socket.IO event handlers for trip lifecycle transitions, built secure Express authentication pipelines, and created the responsive interface.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT Auth", "REST APIs"],
      liveDemo: "https://ey-auto-preview.vercel.app",
      github: "https://github.com/Athul3588krishna/ey-auto"
    },
    pos: {
      title: "POS Management System",
      category: "Desktop & Offline-First",
      coverImage: "projects/pos-system.svg",
      problem: "Retail shop owners in areas with intermittent internet connectivity experience billing halts and data loss when relying solely on cloud-based web POS software.",
      solution: "Architected a local standalone desktop POS application with Electron and SQLite that runs entirely offline, ensuring rapid sub-second billing transactions and tamper-free transactional integrity.",
      architecture: "Electron desktop wrapper houses a React UI renderer and Node.js main process. SQL queries execute directly against a local SQLite database file via IPC channels with full transactional atomicity.",
      challenges: [
        "Managing IPC (Inter-Process Communication) between Electron's main process and React renderer process without bottlenecking UI responsiveness.",
        "Configuring SQLite schema migrations and ACID transactional locks during high-volume checkout periods.",
        "Optimizing keyboard-first workflows so cashiers can complete transactions without touching a mouse."
      ],
      myContribution: "Architected the Electron.js desktop container, designed the relational SQLite schema for products, categories, transactions, and inventory logs, and built the high-speed checkout UI in React with Tailwind.",
      technologies: ["Electron.js", "React.js", "Node.js", "SQLite", "Tailwind CSS", "Desktop Architecture"],
      liveDemo: "https://github.com/Athul3588krishna/pos-management-system",
      github: "https://github.com/Athul3588krishna/pos-management-system"
    },
    ecoclean: {
      title: "EcoClean",
      category: "AI & Full Stack",
      coverImage: "projects/ecoclean.svg",
      problem: "Public waste accumulation goes unattended because civic reporting tools are cumbersome, lack accurate classification of hazardous vs recyclable materials, and fail to provide transparent resolution tracking.",
      solution: "EcoClean streamlines reporting into three steps: snap a photo, let Gemini Vision AI tag the waste category and severity, and pin the location onto Leaflet maps for immediate municipal squad dispatch.",
      architecture: "React client uploads photo and GPS coordinates to Express backend. Backend dispatches image to Google Gemini Vision API for classification, stores structured record in MongoDB, and broadcasts update to municipal Leaflet map.",
      challenges: [
        "Constructing structured multimodal prompt parameters so Gemini Vision returns consistent JSON classifications from variable resolution mobile photos.",
        "Rendering high-density geospatial markers on Leaflet without frame-rate degradation on mobile browsers.",
        "Designing a gamified reward structure (Eco-Points) that prevents fraudulent reporting through server-side rate limits."
      ],
      myContribution: "Developed the full MERN application: set up the Express and MongoDB backend for complaint ticketing, integrated Gemini Vision API for automated classification, and built the reactive Leaflet map dashboard.",
      technologies: ["MERN Stack", "Google Gemini Vision API", "React.js", "Node.js", "Express.js", "MongoDB", "Leaflet.js"],
      liveDemo: "https://ecoclean-demo.vercel.app",
      github: "https://github.com/Athul3588krishna/ecoclean"
    }
  };

  const projectModalBackdrop = document.getElementById('project-modal');
  const projectModalTitle = document.getElementById('pm-title');
  const projectModalCategory = document.getElementById('pm-category');
  const projectModalImg = document.getElementById('pm-image');
  const projectModalProblem = document.getElementById('pm-problem');
  const projectModalSolution = document.getElementById('pm-solution');
  const projectModalArch = document.getElementById('pm-arch');
  const projectModalChallenges = document.getElementById('pm-challenges');
  const projectModalContribution = document.getElementById('pm-contribution');
  const projectModalTech = document.getElementById('pm-tech');
  const projectModalLiveBtn = document.getElementById('pm-live-btn');
  const projectModalGithubBtn = document.getElementById('pm-github-btn');
  const projectModalCloseBtns = document.querySelectorAll('.close-project-modal');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    projectModalTitle.textContent = data.title;
    projectModalCategory.textContent = data.category;
    projectModalImg.src = data.coverImage;
    projectModalImg.alt = data.title;
    projectModalProblem.textContent = data.problem;
    projectModalSolution.textContent = data.solution;
    projectModalArch.textContent = data.architecture;
    projectModalContribution.textContent = data.myContribution;

    // Challenges list
    projectModalChallenges.innerHTML = data.challenges
      .map(
        (c) =>
          `<li style="display:flex;align-items:flex-start;gap:0.75rem;font-size:0.875rem;color:var(--apple-gray);margin-bottom:0.75rem;"><span style="width:6px;height:6px;border-radius:9999px;background:var(--apple-accent);margin-top:0.5rem;flex-shrink:0;"></span><span>${c}</span></li>`
      )
      .join('');

    // Tech badges
    projectModalTech.innerHTML = data.technologies
      .map((t) => `<span class="apple-tag">${t}</span>`)
      .join('');

    projectModalLiveBtn.href = data.liveDemo;
    projectModalGithubBtn.href = data.github;

    projectModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock body scroll on touch & mobile
  }

  function closeProjectModal() {
    projectModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-project]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const id = trigger.getAttribute('data-open-project');
      openProjectModal(id);
    });
  });

  projectModalCloseBtns.forEach((btn) => btn.addEventListener('click', closeProjectModal));
  projectModalBackdrop.addEventListener('click', (e) => {
    if (e.target === projectModalBackdrop) closeProjectModal();
  });

  // --------------------------------------------------------------------------
  // 8. Certificate Lightbox Modal
  // --------------------------------------------------------------------------
  const certModalBackdrop = document.getElementById('cert-modal');
  const certModalImg = document.getElementById('cm-image');
  const certModalTitle = document.getElementById('cm-title');
  const certModalIssuer = document.getElementById('cm-issuer');
  const certModalId = document.getElementById('cm-id');
  const certModalHighlight = document.getElementById('cm-highlight');
  const certModalVerifyBtn = document.getElementById('cm-verify-btn');
  const certModalCloseBtns = document.querySelectorAll('.close-cert-modal');

  function openCertModal(certCard) {
    const title = certCard.getAttribute('data-title');
    const issuer = certCard.getAttribute('data-issuer');
    const img = certCard.getAttribute('data-image');
    const credId = certCard.getAttribute('data-id');
    const highlight = certCard.getAttribute('data-highlight');
    const verifyUrl = certCard.getAttribute('data-verify');

    certModalTitle.textContent = title;
    certModalIssuer.textContent = issuer;
    certModalImg.src = img;
    certModalImg.alt = title;
    certModalId.textContent = credId;
    certModalHighlight.textContent = highlight;
    certModalVerifyBtn.href = verifyUrl;

    certModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    certModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-cert]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.cert-card');
      if (card) openCertModal(card);
    });
  });

  certModalCloseBtns.forEach((btn) => btn.addEventListener('click', closeCertModal));
  certModalBackdrop.addEventListener('click', (e) => {
    if (e.target === certModalBackdrop) closeCertModal();
  });

  // Global ESC Key to close active modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCertModal();
    }
  });

  // --------------------------------------------------------------------------
  // 9. Click to Copy Email
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailText = "athul1296krishna@gmail.com";

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText).then(() => {
        const originalContent = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#30d158" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span style="color:#30d158;font-weight:600;">Email Copied to Clipboard</span>
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalContent;
        }, 2500);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. Validated Contact Form
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      const nameErr = document.getElementById('name-error');
      const emailErr = document.getElementById('email-error');
      const msgErr = document.getElementById('message-error');

      let valid = true;

      // Name validation
      if (!name) {
        nameErr.style.display = 'block';
        valid = false;
      } else {
        nameErr.style.display = 'none';
      }

      // Email validation
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailErr.style.display = 'block';
        valid = false;
      } else {
        emailErr.style.display = 'none';
      }

      // Message validation
      if (!message || message.length < 8) {
        msgErr.style.display = 'block';
        valid = false;
      } else {
        msgErr.style.display = 'none';
      }

      if (valid) {
        const mailSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
        const mailBody = encodeURIComponent(`Hi Athul,\n\n${message}\n\nFrom: ${name} (${email})`);
        
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';

        setTimeout(() => {
          window.location.href = `mailto:athul1296krishna@gmail.com?subject=${mailSubject}&body=${mailBody}`;
        }, 600);
      }
    });

    const resetFormBtn = document.getElementById('reset-form-btn');
    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.style.display = 'none';
      });
    }
  }

  // --------------------------------------------------------------------------
  // 11. Back to Top Smooth Scroll
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
