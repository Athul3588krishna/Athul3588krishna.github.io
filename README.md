# Athul Krishna R — Developer Portfolio

> **Full Stack Developer • MERN Stack Specialist • MCA Student @ MEA Engineering College**
> A modern, futuristic, recruiter-grade developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The website will run locally at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Production assets are bundled and optimized inside the `dist/` folder.

---

## 📁 Project Architecture

```
akr-portfolio/
├── public/
│   ├── certificates/      # Vector credential previews (cert-mern.svg, cert-ai.svg, etc.)
│   ├── projects/          # High-resolution project mockups (ecoclean.svg, ey-auto.svg, etc.)
│   ├── favicon.svg        # Custom glowing AKR browser favicon
│   ├── profile.svg        # Developer visual avatar
│   ├── resume.pdf         # Downloadable ATS resume
│   └── og-preview.svg     # Open Graph social share banner
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky glassmorphic nav + mobile drawer + Recruiter switch
│   │   ├── Hero.jsx              # Full-screen cinematic hero with canvas particle mesh
│   │   ├── RecruiterBanner.jsx   # Dynamic fast-track HUD for hiring managers
│   │   ├── JourneyTimeline.jsx   # Interactive vertical timeline with expandable nodes
│   │   ├── Education.jsx         # MCA (MEA) & B.Sc. CS (KRS) credentials
│   │   ├── Skills.jsx            # Filterable cards, tool categories & animated tech cloud
│   │   ├── Certifications.jsx    # Credential showcase with modal lightbox
│   │   ├── CertificateModal.jsx  # High-res certificate preview with verification links
│   │   ├── Projects.jsx          # Large cards with hover animations & case studies
│   │   ├── ProjectModal.jsx      # In-depth architectural breakdown & challenges
│   │   ├── Achievements.jsx      # Hackathons, seminars & academic honors
│   │   ├── GitHubSection.jsx     # Profile activity, commit matrix & repository cards
│   │   ├── About.jsx             # Developer visual + authentic engineering narrative
│   │   ├── Resume.jsx            # High-conversion "Let's build" CTA with download triggers
│   │   ├── Contact.jsx           # Validated inquiry form & one-click clipboard copy
│   │   └── Footer.jsx            # Minimalist footer with quote & back-to-top button
│   ├── data/
│   │   ├── profile.js            # Personal details, roles, metrics, and contacts
│   │   ├── journey.js            # Milestones from 2022 to MCA graduation and beyond
│   │   ├── education.js          # Coursework, universities, and institution highlights
│   │   ├── skills.js             # Categorized technical skills & proficiencies
│   │   ├── projects.js           # EcoClean, VARAS / Ey Auto, ProofNext, DevPulse
│   │   ├── certifications.js     # Credentials, verification links & metadata
│   │   └── achievements.js       # Hackathons and technical symposiums
│   ├── App.jsx                   # Main layout container with dynamic Recruiter Mode
│   ├── index.css                 # Custom glassmorphism, scrollbar & animations
│   └── main.jsx                  # React 18 DOM mount
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ How to Update Your Portfolio Content

All content is cleanly decoupled from UI code into the `src/data/` folder so you never have to touch JSX to update information:

1. **Add or Edit Projects**: Edit `src/data/projects.js`
2. **Add New Certificates**: Edit `src/data/certifications.js` and drop preview files in `public/certificates/`
3. **Update Resume**: Replace `public/resume.pdf` with your updated resume PDF
4. **Update Profile Photo**: Replace `public/profile.svg` or `public/profile.jpg`
5. **Update Skills or Journey Milestones**: Edit `src/data/skills.js` and `src/data/journey.js`

---

## ⚡ Special Feature: Recruiter Mode

Click the **"Recruiter Mode"** toggle in the Navbar to instantly rearrange the entire site into a high-density, executive-first sequence:
1. Executive Bio & Summary
2. Core Technical Competencies
3. Featured Flagship Projects
4. Master's & Bachelor's Degrees
5. Verified Credentials
6. Resume Download & Direct Contact
