export const skillCategories = [
  { id: "all", label: "All Technologies" },
  { id: "programming-ai", label: "Programming & AI" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "backend-apis", label: "Backend & APIs" },
  { id: "frontend", label: "Frontend" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" },
];

export const skillsData = [
  // Programming & AI
  {
    name: "Python",
    category: "programming-ai",
    proficiency: "Core Language",
    icon: "Coffee",
    color: "#3776AB",
    description: "Primary language for AI/ML model inference, PyTorch pipelines, FastAPI microservices, and scientific computing.",
    featured: true
  },
  {
    name: "PyTorch & Torchvision",
    category: "programming-ai",
    proficiency: "Applied AI/ML",
    icon: "Sparkles",
    color: "#EE4C2C",
    description: "Deep learning model development, transfer learning, MobileNet fine-tuning for crop leaf disease detection.",
    featured: true
  },
  {
    name: "OpenCV",
    category: "programming-ai",
    proficiency: "Computer Vision",
    icon: "Eye",
    color: "#5C3EE8",
    description: "Image processing, HSV-based color space segmentation, lesion severity quantification, and visual analytics.",
    featured: true
  },
  {
    name: "MobileNet",
    category: "programming-ai",
    proficiency: "Edge AI / CNN",
    icon: "Cpu",
    color: "#00C49F",
    description: "Lightweight convolutional neural network architectures optimized for fast inference on crop diagnostic images.",
    featured: true
  },
  {
    name: "JavaScript (ES6+)",
    category: "programming-ai",
    proficiency: "Core Language",
    icon: "FileCode2",
    color: "#F7DF1E",
    description: "Asynchronous JavaScript, promises, DOM manipulation, full-stack Node.js & React engineering.",
    featured: true
  },

  // AI & Automation
  {
    name: "RAG (Retrieval-Augmented Generation)",
    category: "ai-automation",
    proficiency: "Applied Architecture",
    icon: "Database",
    color: "#A855F7",
    description: "Connecting LLMs to domain knowledge bases (KAU / ICAR agricultural advisory) for grounded, hallucination-free guidance.",
    featured: true
  },
  {
    name: "Agentic AI & ReAct",
    category: "ai-automation",
    proficiency: "Specialized Engineering",
    icon: "Bot",
    color: "#8B5CF6",
    description: "Custom reasoning + acting (ReAct) agents utilizing autonomous loops to solve multi-step agricultural workflows.",
    featured: true
  },
  {
    name: "Tool Calling",
    category: "ai-automation",
    proficiency: "Applied",
    icon: "Workflow",
    color: "#38BDF8",
    description: "Function/tool calling pipelines for real-time mandi prices, weather spray safety advisory, and middleman arbitrage.",
    featured: true
  },
  {
    name: "LLM Concepts & Prompt Design",
    category: "ai-automation",
    proficiency: "Applied",
    icon: "Sparkles",
    color: "#EC4899",
    description: "Few-shot prompting, structured JSON output extraction, context window optimizations, and multimodal reasoning.",
    featured: true
  },
  {
    name: "AI-Assisted Development",
    category: "ai-automation",
    proficiency: "Daily Workflow",
    icon: "Zap",
    color: "#F59E0B",
    description: "Rapid prototyping, test harness generation, and high-velocity code development leveraging AI tooling."
  },

  // Backend & APIs
  {
    name: "FastAPI",
    category: "backend-apis",
    proficiency: "Production Microservices",
    icon: "Server",
    color: "#059669",
    description: "High-performance asynchronous Python API endpoints powering PyTorch AI model inference and RAG pipelines.",
    featured: true
  },
  {
    name: "Node.js",
    category: "backend-apis",
    proficiency: "Core Specialization",
    icon: "Server",
    color: "#339933",
    description: "Asynchronous event-driven backend services, middleware pipelines, and scalable application architectures.",
    featured: true
  },
  {
    name: "Express.js",
    category: "backend-apis",
    proficiency: "Core Specialization",
    icon: "Cpu",
    color: "#68A063",
    description: "RESTful API routes, authentication middleware, rate limiting, and business logic routing.",
    featured: true
  },
  {
    name: "Socket.IO",
    category: "backend-apis",
    proficiency: "Realtime Protocols",
    icon: "Radio",
    color: "#010101",
    description: "Bidirectional WebSocket communication for live ride dispatching, passenger-driver tracking, and instant alerts.",
    featured: true
  },
  {
    name: "REST APIs & Integration",
    category: "backend-apis",
    proficiency: "Advanced",
    icon: "Workflow",
    color: "#06B6D4",
    description: "HTTP status compliance, JSON serialization, third-party API orchestration (Open-Meteo, Gemini Vision).",
    featured: true
  },

  // Frontend
  {
    name: "React.js",
    category: "frontend",
    proficiency: "Core Specialization",
    icon: "Atom",
    color: "#61DAFB",
    description: "Modern component architecture, hooks, state management, and multimodal audio/visual frontend rendering.",
    featured: true
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "Advanced",
    icon: "Palette",
    color: "#38BDF8",
    description: "Utility-first modern interfaces, dark mode design tokens, responsive breakpoints, and glassmorphism.",
    featured: true
  },
  {
    name: "Vite",
    category: "frontend",
    proficiency: "Proficient",
    icon: "Zap",
    color: "#646CFF",
    description: "Lightning-fast build tooling, Hot Module Replacement (HMR), and optimized production bundling."
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    proficiency: "Proficient",
    icon: "Code",
    color: "#E34F26",
    description: "Semantic accessible layout structures, modern CSS Grid/Flexbox, and responsive web styling."
  },
  {
    name: "Bootstrap",
    category: "frontend",
    proficiency: "Familiar",
    icon: "LayoutGrid",
    color: "#7952B3",
    description: "Rapid layout prototyping and responsive grid frameworks."
  },
  {
    name: "Web Speech API",
    category: "frontend",
    proficiency: "Applied",
    icon: "Radio",
    color: "#FB7185",
    description: "Browser-native bilingual Malayalam & English voice synthesis and speech recognition.",
    featured: true
  },

  // Databases
  {
    name: "MongoDB Atlas & Mongoose",
    category: "databases",
    proficiency: "Core Specialization",
    icon: "Database",
    color: "#47A248",
    description: "Cloud NoSQL database hosting, schema modeling with Mongoose, indexing, and aggregation pipelines.",
    featured: true
  },
  {
    name: "SQLite",
    category: "databases",
    proficiency: "Embedded / Offline-First",
    icon: "Boxes",
    color: "#003B57",
    description: "Embedded ACID relational database engine for offline-first desktop applications (Electron POS).",
    featured: true
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    proficiency: "Daily Driver",
    icon: "GitBranch",
    color: "#F05032",
    description: "Distributed version control, branch workflows, pull request reviews, and repository collaboration."
  },
  {
    name: "Postman",
    category: "tools",
    proficiency: "Advanced",
    icon: "Send",
    color: "#FF6C37",
    description: "API testing, automated endpoint verification, and environment variable configuration."
  },
  {
    name: "VS Code",
    category: "tools",
    proficiency: "Daily Driver",
    icon: "Terminal",
    color: "#007ACC",
    description: "Customized development environment with Python, React, and linting extension ecosystems."
  },
  {
    name: "Electron.js",
    category: "tools",
    proficiency: "Desktop Engineering",
    icon: "Boxes",
    color: "#47848F",
    description: "Cross-platform desktop application development integrating Node.js runtime and local SQLite databases.",
    featured: true
  }
];

export const techPillsCloud = [
  "Python", "FastAPI", "PyTorch", "OpenCV", "RAG", "Agentic AI", "ReAct",
  "React.js", "Node.js", "Express.js", "MongoDB Atlas", "SQLite",
  "Socket.IO", "Electron.js", "Tailwind CSS", "Web Speech API", "Git"
];
