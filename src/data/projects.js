export const projectsData = [
  {
    id: "agripulse",
    title: "AgriPulse (AgriMitra 360)",
    subtitle: "Multimodal Smart Agriculture Platform",
    tagline: "Combining Computer Vision, RAG, ReAct Agentic AI, and Malayalam Voice Interaction to empower farmers.",
    description: "An AI-powered agricultural platform combining computer vision for leaf disease diagnostics, RAG-based agronomic advisory, a custom ReAct agent with multi-tool calling, and bilingual Malayalam/English voice interaction.",
    coverImage: "/projects/agripulse.svg",
    technologies: [
      "Python",
      "FastAPI",
      "PyTorch",
      "OpenCV",
      "MobileNet",
      "RAG",
      "ReAct Agent",
      "Tool Calling",
      "React",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Telegram Bot API",
      "Web Speech API",
      "Open-Meteo API"
    ],
    featured: true,
    category: "AI & Agentic Systems",
    stats: [
      { label: "Vision Classifier", value: "PyTorch CNN" },
      { label: "Agent Pattern", value: "ReAct Multi-Tool" },
      { label: "Voice Support", value: "Malayalam + EN" }
    ],
    features: [
      "PyTorch & MobileNet deep learning disease scanner for crop leaf images",
      "OpenCV HSV color-space based lesion segmentation and severity analysis",
      "Custom ReAct autonomous agent with multi-tool calling for live mandi market prices",
      "Integrated Telegram chatbot eliminating middleman expenses and empowering direct market access (AI Conclave Hackathon, Amal Jyothi College of Engineering)",
      "Real-time weather spray safety calculation via Open-Meteo meteorological API",
      "RAG pipeline indexed with Kerala Agricultural University (KAU) & ICAR research advisory",
      "Bilingual Malayalam & English speech recognition and synthesis via Web Speech API",
      "Distributed microservice: React UI connected to Node.js backend and Python FastAPI AI microservice"
    ],
    caseStudy: {
      problem: "Smallholder farmers in Kerala face severe crop yield losses due to delayed pest/disease diagnosis, language barriers in technical agricultural literature, volatile mandi market prices, and predatory middleman arbitrage.",
      solution: "AgriPulse (AgriMitra 360) solves this through a multimodal AI companion: farmers snap a photo of a sick leaf for instant PyTorch/OpenCV diagnosis, and talk directly in Malayalam to a ReAct agent that checks real-time mandi prices, weather spray safety, and KAU/ICAR advisory databases.",
      challenges: [
        "Calibrating HSV color-space masks in OpenCV to accurately separate necrotic fungal lesions from healthy chlorophyll tissue across varied ambient lighting.",
        "Engineering deterministic ReAct agent loops that select between live weather APIs, mandi pricing data, and agricultural knowledge bases without hallucinating.",
        "Achieving low-latency speech recognition and phonetic mapping for regional Malayalam agricultural terminology using browser-native Web Speech APIs.",
        "Bridging a dual-backend architecture where React coordinates Node.js/Express application sessions with an asynchronous Python FastAPI computer vision microservice."
      ],
      myContribution: "Designed and engineered the full platform end-to-end: trained and fine-tuned the PyTorch MobileNet crop disease classifier, implemented OpenCV HSV lesion severity calculations, built the FastAPI AI service with ReAct agent tool calling, structured MongoDB Atlas data pipelines, and crafted the responsive React UI with Malayalam speech interaction.",
      architecture: "Farmer interacts via React frontend with Web Speech API. Image payloads route to FastAPI microservice where PyTorch runs CNN inference and OpenCV computes lesion severity percentage. User queries invoke a LangChain/ReAct agent that calls Open-Meteo and Mandi APIs, with RAG vector search over KAU/ICAR manuals. Session and telemetry data persist in MongoDB Atlas."
    },
    github: "https://github.com/Athul3588krishna/agripulse-agrimitra360",
    liveDemo: "https://agripulse-demo.vercel.app",
    demoNote: "Flagship Multimodal AI Platform"
  },
  {
    id: "ey-auto",
    title: "Ey Auto",
    subtitle: "Auto-Rickshaw Booking Platform | B.Sc Final Year Project",
    tagline: "Full-stack ride hailing with dedicated Passenger, Driver, and Admin modules and real-time Socket.IO tracking.",
    description: "A comprehensive ride-booking and fleet coordination platform engineered for regional auto-rickshaw transit. Features dedicated portals for Passengers, Drivers, and Municipal Admins with role-based access control and live geolocation tracking.",
    coverImage: "/projects/ey-auto.svg",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT Auth", "REST APIs"],
    featured: true,
    category: "Full Stack & Realtime",
    stats: [
      { label: "Architecture", value: "3 Dedicated Modules" },
      { label: "Realtime Sync", value: "Socket.IO" },
      { label: "Security", value: "Role-Based RBAC" }
    ],
    features: [
      "Three dedicated modules: Passenger app, Driver console, and Central Admin management",
      "Real-time ride hailing, pickup dispatch, and live trip status updates via Socket.IO",
      "Secure stateless authentication with role-based access control (RBAC) and JWT",
      "Interactive map picking and pickup-destination coordinate calculation",
      "Driver trip acceptance workflows, digital ride receipts, and fair fare estimation",
      "Admin telemetry dashboard for fleet monitoring and dispute resolution"
    ],
    caseStudy: {
      problem: "Local auto-rickshaw transportation lacked organized digital dispatching, resulting in commuter frustration during peak hours and uncompensated empty cruising for drivers without middleman commissions.",
      solution: "Ey Auto delivers a transparent, full-stack digital hail system providing real-time passenger matching, instant ride alerts to nearby registered auto drivers, and centralized administration.",
      challenges: [
        "Handling socket connection reconnections and preserving active ride states across unstable mobile networks.",
        "Implementing clean role-based authorization to prevent unauthorized access between driver, passenger, and admin route scopes.",
        "Designing intuitive mobile-first interfaces tailored for non-tech-savvy auto-rickshaw operators."
      ],
      myContribution: "Served as lead architect for B.Sc. Computer Science Final Year Project: designed the full MongoDB schema, implemented Socket.IO event handlers for trip lifecycle transitions, built secure Express authentication pipelines, and created the responsive React interface.",
      architecture: "React Single Page Application communicates with Express backend. Socket.IO maintains live bidirectional channels between passengers and nearby drivers. Trip records, user profiles, and ratings are stored in MongoDB."
    },
    github: "https://github.com/Athul3588krishna/ey-auto",
    liveDemo: "https://ey-auto-preview.vercel.app",
    demoNote: "B.Sc. Final Year Project"
  },
  {
    id: "pos-management-system",
    title: "POS Management System",
    subtitle: "Desktop Application with Offline-First Architecture",
    tagline: "Standalone retail point-of-sale solution with instant billing, inventory management, and local SQLite data integrity.",
    description: "A standalone cross-platform desktop POS application engineered for retail store management. Combines dynamic barcode billing, inventory replenishment tracking, and sales analytics with local SQLite storage for uninterrupted offline reliability.",
    coverImage: "/projects/pos-system.svg",
    technologies: ["Electron.js", "React.js", "Node.js", "SQLite", "Tailwind CSS", "Desktop Architecture"],
    featured: true,
    category: "Desktop & Offline-First",
    stats: [
      { label: "Runtime", value: "Electron + Node" },
      { label: "Storage", value: "Local SQLite ACID" },
      { label: "Offline Mode", value: "100% Reliable" }
    ],
    features: [
      "Offline-first architecture with reliable local SQLite relational database handling",
      "High-speed retail billing workflow with barcode scanner input support",
      "Real-time inventory decrement, low-stock threshold alerts, and batch management",
      "Dynamic reporting: daily sales summaries, profit margins, and tax invoices",
      "Thermal printer receipt generation and printable PDF reports",
      "Native desktop window integration, keyboard shortcut navigation, and zero-cloud dependency"
    ],
    caseStudy: {
      problem: "Retail shop owners in areas with intermittent internet connectivity experience billing halts and data loss when relying solely on cloud-based web POS software.",
      solution: "Architected a local standalone desktop POS application with Electron and SQLite that runs entirely offline, ensuring rapid sub-second billing transactions and tamper-free transactional integrity.",
      challenges: [
        "Managing IPC (Inter-Process Communication) between Electron's main process and React renderer process without bottlenecking UI responsiveness.",
        "Configuring SQLite schema migrations and ACID transactional locks during high-volume checkout periods.",
        "Optimizing keyboard-first workflows so cashiers can complete transactions without touching a mouse."
      ],
      myContribution: "Architected the Electron.js desktop container, designed the relational SQLite schema for products, categories, transactions, and inventory logs, and built the high-speed checkout UI in React with Tailwind.",
      architecture: "Electron desktop wrapper houses a React UI renderer and Node.js main process. SQL queries execute directly against a local SQLite database file via IPC channels with full transactional atomicity."
    },
    github: "https://github.com/Athul3588krishna/pos-management-system",
    liveDemo: "https://github.com/Athul3588krishna/pos-management-system",
    demoNote: "Desktop Application Repository"
  },
  {
    id: "ecoclean",
    title: "EcoClean",
    subtitle: "AI-Powered Smart Waste Management Portal",
    tagline: "Geotagged civic waste reporting with Google Gemini Vision AI classification and municipal dispatch.",
    description: "An AI-powered smart waste reporting portal enabling citizens to report waste dumps using photo capture and location-based mapping, with automated Gemini Vision classification and municipal resolution tracking.",
    coverImage: "/projects/ecoclean.svg",
    technologies: ["MERN Stack", "Google Gemini Vision API", "React.js", "Node.js", "Express.js", "MongoDB", "Leaflet.js"],
    featured: true,
    category: "AI & Full Stack",
    stats: [
      { label: "AI Classifier", value: "Gemini Vision" },
      { label: "GIS Mapping", value: "Leaflet.js" },
      { label: "Engagement", value: "Eco-Points System" }
    ],
    features: [
      "Citizen waste reporting with photo upload and automatic device geolocation tagging",
      "Integrated Google Gemini Vision API to classify waste into categories (organic, plastic, e-waste, hazardous)",
      "Interactive Leaflet.js mapping for complaint visualization, radius filtering, and municipal dispatch",
      "End-to-end complaint lifecycle management: Submitted, Inspected, Cleanup Dispatched, Resolved",
      "Gamified citizen incentives: Eco-Points accrual, civic achievement badges, and ward leaderboards",
      "Municipal authority portal for squad assignment and resolution photo verification"
    ],
    caseStudy: {
      problem: "Public waste accumulation goes unattended because civic reporting tools are cumbersome, lack accurate classification of hazardous vs recyclable materials, and fail to provide transparent resolution tracking.",
      solution: "EcoClean streamlines reporting into three steps: snap a photo, let Gemini Vision AI tag the waste category and severity, and pin the location onto Leaflet maps for immediate municipal squad dispatch.",
      challenges: [
        "Constructing structured multimodal prompt parameters so Gemini Vision returns consistent JSON classifications from variable resolution mobile photos.",
        "Rendering high-density geospatial markers on Leaflet without frame-rate degradation on mobile browsers.",
        "Designing a gamified reward structure (Eco-Points) that prevents fraudulent reporting through server-side rate limits."
      ],
      myContribution: "Developed the full MERN application: set up the Express and MongoDB backend for complaint ticketing, integrated Gemini Vision API for automated classification, and built the reactive Leaflet map dashboard.",
      architecture: "React client uploads photo and GPS coordinates to Express backend. Backend dispatches image to Google Gemini Vision API for classification, stores structured record in MongoDB, and broadcasts update to municipal Leaflet map."
    },
    github: "https://github.com/Athul3588krishna/ecoclean",
    liveDemo: "https://ecoclean-demo.vercel.app",
    demoNote: "Live AI Civic Portal"
  }
];
