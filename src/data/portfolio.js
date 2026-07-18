// ============================================================================
// ALL PORTFOLIO CONTENT LIVES HERE.
// To update your site, edit the values below — no need to touch components.
// ============================================================================

export const profile = {
  name: "Sarawin R",
  role: "AI/ML Engineer",
  tagline: "Building end-to-end LLM, computer vision & speech AI systems",
  location: "Thoothukudi, Tamil Nadu, India",
  email: "srksarawin@gmail.com",
  phone: "+91-9342936495",
  github: "https://github.com/Srksarawin",
  linkedin: "https://linkedin.com/in/sarawin-r",
  summary:
    "AI/ML Engineer with hands-on experience building end-to-end LLM, computer vision, and speech AI systems, achieving 90%+ accuracy in real-time detection and deployment. Skilled in Python, PyTorch, and full-stack development (React, Node.js), with a focus on shipping scalable, production-ready AI applications.",
  // Rotating keywords shown in the hero terminal sequence
  focusAreas: ["LLMs & RAG", "Computer Vision", "Speech AI", "Full-Stack Systems"],
};

export const stats = [
  { value: "92%", label: "mAP · real-time detection" },
  { value: "30+", label: "FPS multi-object CV pipeline" },
  { value: "98%", label: "OCR extraction accuracy" },
  { value: "3", label: "Publications & internships" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "Java", "C", "HTML/CSS", "Golang"],
  },
  {
    category: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Vector DB",
      "Embeddings",
      "Transformers",
      "Prompt Engineering",
      "Model Context Protocol (MCP)", "Fine-tuning", "LLaMA", "Large Language Models (LLMs)", "Faster-Whisper", "Speech-to-Text (STT)", "Text-to-Speech (TTS)", 
      "Generative AI", "Prompt Patterns", "Keras"
    ],
  },
  {
    category: "Computer Vision",
    items: ["OpenCV", "YOLOv8", "Mediapipe", "Image Processing", "Object Detection", "Image Classification", "OCR"]
  },
  {
    category: "Full-Stack",
    items: ["React", "Vite", "Node.js", "Express.js", "FastAPI", "Streamlit"],
  },
  {
    category: "Data & Infra",
    items: ["MySQL","MS SQL Server", "REST APIs", "Socket.IO", "Git / GitHub", "Google Colab", "Hugging Face"],
  },
];

export const experience = [
  {
    role: "Full Stack Engineer Trainee",
    org: "Logic Technologies",
    location: "Thoothukudi",
    period: "Jun 2026 — Jul 2026",
    points: [
      "Engineered an OCR-based dispatch weighing system capturing LCD display images and extracting weight readings via Gemini OCR with custom preprocessing, eliminating manual entry and accelerating dispatch.",
      "Developed full-stack Job Card Builder and Bill of Lading apps using React, Node.js, Express, and MS SQL, implementing CRUD, validation, and print/export for traceable production and shipping documentation.",
      "Built a GPS Location Tracking PWA using React, Node.js, Express, and MS SQL to capture live coordinates, battery, and accuracy data, with polling-based real-time tracking and route-replay visualization.",
    ],
    tags: ["React", "Node.js", "Express", "MS SQL", "OCR"],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Digisailor",
    location: "Thoothukudi",
    period: "Dec 2025 — Jan 2026",
    points: [
      "Designed end-to-end CV pipelines using Python, PyTorch, YOLOv8, OpenCV, and Colab for industrial safety, achieving real-time multi-object detection at 30+ FPS with 92% mAP.",
      "Trained domain-specific deep learning models (smoking, spill, phone detection) on 1000+ image datasets, achieving 85–95% accuracy and exporting production-ready .pt/.onnx models for hazard monitoring.",
      "Implemented spatio-temporal analytics including worker heatmaps, occupancy analysis, and prolonged presence detection, improving safety planning with 90%+ temporal anomaly detection accuracy.",
    ],
    tags: ["PyTorch", "YOLOv8", "OpenCV", "Computer Vision"],
  },
  {
    role: "Software Developer Intern",
    org: "Logic Technologies",
    location: "Thoothukudi",
    period: "Jan 2025 — Mar 2025",
    points: [
      "Created AI-powered OCR systems using Google Gemini, Python, and Streamlit, achieving ~98% accuracy in invoice processing and converting unstructured images into structured JSON.",
      "Delivered CV solutions for container number extraction, license plate recognition, and prescription interpretation using generative AI and OCR, improving processing efficiency by ~70%.",
      "Assembled multimedia processing apps including real-time speech-to-text (Python, Flask, JavaScript), resolution-preserving image resizing, and photo merging tools with low latency and high fidelity.",
    ],
    tags: ["Gemini API", "Streamlit", "OCR", "Flask"],
  },
];

export const projects = [
  {
    title: "LLM-Based Offline Conversational AI Assistant",
    period: "Dec 2025 — Jan 2026",
    description:
      "A hybrid, fully offline AI assistant pairing a local LLaMA (GGUF) model for contextual responses with Faster-Whisper for offline transcription — no external APIs, no cloud dependency.",
    highlights: [
      "~95% transcription accuracy in real-time, CPU-only environments",
      "Offline text-to-speech (pyttsx3) with sub-2-second response generation and a cached audio pipeline",
      "Multi-turn chat history retaining 10 prior messages, improving response coherence by ~30%",
    ],
    stack: ["Python", "LLaMA.cpp", "Faster-Whisper", "pyttsx3", "Streamlit"],
    links: { github: "https://github.com/Srksarawin" },
  },
  {
    title: "AI-Based Hand Gesture Control System",
    period: "Aug 2025 — Oct 2025",
    description:
      "A hybrid deep learning + rule-based system for touchless desktop control, mapping real-time hand gestures to precise system-level actions.",
    highlights: [
      "~97% gesture recognition accuracy with under 100ms latency on live webcam input",
      "AI-assisted debugging pipeline reduced false triggers by ~30%",
      "Dual-hand tracking enabling drag, double-click, and system-level adjustments",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "Mediapipe", "PyAutoGUI", "PyCAW"],
    links: { github: "https://github.com/Srksarawin" },
  },
];

export const education = [
  {
    school: "M. Kumarasamy College of Engineering",
    degree: "B.Tech — Artificial Intelligence and Data Science",
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
    venue: "IEEE — Published",
  },
  {
    title: "Conversational Image Recognition Chatbot",
    venue: "ICEST '24",
  },
];
