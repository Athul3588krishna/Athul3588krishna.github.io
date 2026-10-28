export const certificateCategories = [
  { id: "all", label: "All Credentials" },
  { id: "fullstack", label: "Full Stack (MERN)" },
  { id: "ai", label: "AI & Multimodal" },
  { id: "education", label: "Academic Degrees" }
];

export const certificationsData = [
  {
    id: "cert-illinois-entri",
    title: "Full Stack Development (MERN Stack) – Certified User",
    issuer: "Illinois Institute of Technology & Entri Elevate",
    date: "2025",
    category: "fullstack",
    credentialId: "IIT-ENTRI-MERN-2025-AKR",
    verifyUrl: "https://elevate.entri.app/verification",
    image: "/certificates/cert-illinois.svg",
    pdf: "/certificates/cert-illinois.pdf",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs", "Modern Web Standards"],
    description: "International institutional accreditation certifying comprehensive mastery in full-stack MERN engineering, scalable cloud databases, authentication workflows, and software craftsmanship.",
    highlight: "Jointly certified by Illinois Institute of Technology and Entri Elevate."
  },
  {
    id: "cert-entri-capstone",
    title: "Full Stack Web Development (MERN) with Capstone Project",
    issuer: "Entri Elevate",
    date: "2025",
    category: "fullstack",
    credentialId: "ENTRI-CAPSTONE-MERN-88219",
    verifyUrl: "https://elevate.entri.app/verification",
    image: "/certificates/cert-mern.svg",
    pdf: "/certificates/cert-mern.pdf",
    skills: ["MERN Architecture", "Production Deployment", "Full Stack Lifecycle", "API Security", "Mongoose"],
    description: "Awarded upon successful defense and delivery of end-to-end full stack capstone platforms encompassing complex backend logic, reactive client interfaces, and real-time features.",
    highlight: "Graduated with capstone project distinction."
  },
  {
    id: "cert-intensive-program",
    title: "8-Month Intensive Full Stack Development Program",
    issuer: "Entri Elevate Engineering Academy",
    date: "2025",
    category: "fullstack",
    credentialId: "ENTRI-8M-FS-INTENSIVE",
    verifyUrl: "https://elevate.entri.app",
    image: "/certificates/cert-intensive.svg",
    pdf: "/certificates/cert-intensive.pdf",
    skills: ["Modern Web Standards", "Cloud Database Integrations", "Desktop Environments", "Git & CI/CD", "Agile"],
    description: "Rigorous 8-month full-time technical immersion covering contemporary software engineering, desktop environments, cloud integrations, and production architecture.",
    highlight: "Built and deployed multiple end-to-end applications spanning web, cloud databases, and desktop environments."
  },
  {
    id: "cert-ai-multimodal",
    title: "PyTorch, Computer Vision & Multimodal Agentic Systems",
    issuer: "Applied AI / Deep Learning Specialization",
    date: "2026",
    category: "ai",
    credentialId: "AI-PYTORCH-RAG-2026",
    verifyUrl: "https://github.com/Athul3588krishna/agripulse-agrimitra360",
    image: "/certificates/cert-ai.svg",
    pdf: "/certificates/cert-ai.pdf",
    skills: ["PyTorch", "MobileNet", "OpenCV", "RAG Pipelines", "ReAct Agents", "FastAPI"],
    description: "Practical engineering in training and fine-tuning convolutional networks, HSV lesion analysis in OpenCV, tool calling with ReAct agents, and RAG knowledge indexing.",
    highlight: "Applied directly to build the AgriPulse (AgriMitra 360) platform."
  },
  {
    id: "cert-bsc-cs",
    title: "Bachelor of Science in Computer Science Degree",
    issuer: "University of Calicut (KRS Sree Narayana College)",
    date: "2025",
    category: "education",
    credentialId: "UOC-BSC-CS-2025-AKR",
    verifyUrl: "https://uoc.ac.in",
    image: "/certificates/cert-bsc.svg",
    pdf: "/certificates/cert-bsc.pdf",
    skills: ["Computer Systems", "Relational Databases", "Python", "Data Structures", "Algorithms", "Socket.IO"],
    description: "Three-year undergraduate degree conferring rigorous foundations in computational algorithms, systems programming, and database design.",
    highlight: "Graduated with distinction from KRS Sree Narayana College, Valanchery."
  }
];
