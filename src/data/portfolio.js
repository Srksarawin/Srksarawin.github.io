// ============================================================================
// ALL PORTFOLIO CONTENT LIVES HERE.
// To update your site, edit the values below — no need to touch components.
// ============================================================================

export const profile = {
  name: "Sarawin R",
  role: "Software Engineer",
  tagline: "Building cross-platform ERP & CRM apps and production AI systems",
  location: "Chennai, Tamil Nadu, India",
  email: "srksarawin@gmail.com",
  phone: "+91-9342936495",
  github: "https://github.com/Srksarawin",
  linkedin: "https://linkedin.com/in/sarawin-r",
  summary:
    "Software Engineer building cross-platform ERP and CRM apps with TypeScript, Node.js, React Native, and PostgreSQL. Delivered CV and OCR systems with 92% mAP detection and 98% document accuracy. IEEE-published AI researcher.",
  // Rotating keywords shown in the hero terminal sequence
  focusAreas: ["ERP & CRM Apps", "React Native", "Computer Vision & OCR", "LLMs & RAG"],
};

export const stats = [
  { value: "8+", label: "ERP modules engineered" },
  { value: "50+", label: "Defects resolved" },
  { value: "92%", label: "mAP · real-time detection" },
  { value: "98%", label: "OCR extraction accuracy" },
];

export const skills = [
  {
    category: "Languages",
    items: ["C", "Java", "Python", "SQL"],
  },
  {
    category: "Web & App Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Vite", "Node.js", "Express.js"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "PyTorch", "TensorFlow", "OpenCV", "MediaPipe", "YOLOv8", "Streamlit"],
  },
  {
    category: "Databases / APIs",
    items: ["PostgreSQL", "MS SQL Server", "MySQL", "REST APIs", "Socket.IO"],
  },
  {
    category: "AI / ML",
    items: [
      "LangChain",
      "MCP",
      "RAG",
      "Vector Databases",
      "Embeddings",
      "Prompt Engineering",
      "LLMs",
      "Transformers",
      "Fine-tuning",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Google Colab", "Hugging Face", "Claude (Opus)"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "NxtOrbis Technologies",
    location: "Chennai",
    period: "Sep 2026 — Present",
    points: [
      "Contribute to Brixora360, a cross-platform construction ERP for web, Android, and iOS, streamlining business workflows, minimizing manual data entry, and improving coordination across project management, procurement, finance, and site operations.",
      "Engineer 8+ application modules, including purchase orders, budgeting, and site reporting, using TypeScript, Node.js, Express.js, PostgreSQL, and React Native, with Claude Opus for AI-assisted development, reducing feature delivery time by 30%.",
      "Resolve 50+ defects through system design reviews, debugging, functional testing, and end-to-end validation, reducing production issues by 25% while contributing to the development and integration of a construction-focused CRM application.",
    ],
    tags: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "React Native"],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Logic Technologies",
    location: "Thoothukudi",
    period: "Jun 2026 — Jul 2026",
    points: [
      "Engineered an OCR dispatch weighing system extracting LCD weight readings via Gemini OCR with custom preprocessing, achieving 95% accuracy and cutting dispatch time by 40%.",
      "Developed Job Card Builder and Bill of Lading apps (React, Node.js, Express.js, MS SQL) with CRUD, validation, and print/export, digitizing 100+ documents weekly and halving errors.",
      "Built a GPS tracking PWA (React, Node.js, Express.js, MS SQL) capturing live location, battery, and accuracy data from 20+ devices via 10-second polling, with route replay.",
    ],
    tags: ["React", "Node.js", "Express.js", "MS SQL", "OCR"],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Digisailor",
    location: "Thoothukudi",
    period: "Dec 2025 — Jan 2026",
    points: [
      "Designed industrial-safety CV pipelines with Python, PyTorch, YOLOv8, and OpenCV, reaching real-time multi-object detection at 30+ FPS and 92% mAP.",
      "Trained smoking, spill, and phone detection models on 1,000+ images with 85–95% accuracy, exporting .pt/.onnx models for deployment.",
      "Implemented worker heatmaps, occupancy analytics, and prolonged-presence detection, flagging temporal anomalies with 90%+ accuracy.",
    ],
    tags: ["PyTorch", "YOLOv8", "OpenCV", "Computer Vision"],
  },
  {
    role: "Software Developer Intern",
    org: "Logic Technologies",
    location: "Thoothukudi",
    period: "Jan 2025 — Mar 2025",
    points: [
      "Created Gemini OCR systems in Python and Streamlit, converting unstructured invoice images into structured JSON with 98% accuracy.",
      "Delivered generative AI and OCR solutions for container number, license plate, and prescription extraction, improving processing efficiency by 70%.",
      "Assembled real-time speech-to-text (Python, Flask, JavaScript), resolution-preserving image resizing, and photo merging tools with low latency.",
    ],
    tags: ["Gemini API", "Streamlit", "OCR", "Flask"],
  },
];

export const projects = [
  {
    title: "LLM-Based Offline Conversational AI Assistant",
    period: "Dec 2025 — Jan 2026",
    description:
      "A hybrid AI assistant using LLaMA (GGUF) for contextual responses and Faster Whisper for offline transcription — fully offline, CPU-only, no cloud dependency.",
    highlights: [
      "95% transcription accuracy in real-time CPU-only environments",
      "Offline pyttsx3 text-to-speech with a cached audio pipeline, responding in under 2 seconds per query",
      "Multi-turn chat history storing 10 previous messages, improving response coherence by 30%",
    ],
    stack: ["Python", "Faster Whisper", "LLaMA.cpp", "pyttsx3", "Streamlit"],
    links: { github: "https://github.com/Srksarawin" },
  },
  {
    title: "AI-Based Hand Gesture Control System",
    period: "Aug 2025 — Oct 2025",
    description:
      "A hybrid deep learning and rule-based hand gesture recognition system using MediaPipe and TensorFlow for hands-free desktop navigation.",
    highlights: [
      "97% accuracy and under 100 ms latency in live webcam tests",
      "Dual-hand tracking and AI-assisted debugging reduced false gesture triggers by 30%",
      "10+ gesture-to-action controls (drag, double-click, volume, brightness) at 30 FPS",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "PyAutoGUI"],
    links: { github: "https://github.com/Srksarawin" },
  },
];

export const education = [
  {
    school: "M. Kumarasamy College of Engineering",
    degree: "B.Tech — Artificial Intelligence and Data Science | CGPA: 7.77",
    location: "Karur",
    period: "Sep 2022 — Mar 2026",
  },
  {
    school: "Star Matriculation Higher Secondary School",
    degree: "Higher Secondary — Computer Science",
    location: "Thoothukudi",
    period: "Jun 2020 — May 2022",
  },
];

export const certifications = [
  "NPTEL — Data Analytics with Python",
  "Machine Learning Workshop — IIT Madras Research Park",
  "JLPT N5 — Japanese Language Proficiency",
];

export const publications = [
  {
    title: "Touchless Computer Control Through Hand Gesture Recognition and Speech Modeling",
    venue: "Published, IEEE",
  },
  {
    title: "Conversational Image Recognition Chatbot",
    venue: "ICEST '24",
  },
];
