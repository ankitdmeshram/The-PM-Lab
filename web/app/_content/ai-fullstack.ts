// All copy for the AI Full Stack Development Programme page (/ai-full-stack-developer).
// Anything marked PLACEHOLDER must be replaced with real data before launch.

export const aiCourse = {
  name: "AI Full Stack Development Programme",
  slug: "/ai-full-stack-developer",
  // Cashfree payment link. If emptied, the page shows "Enquire on WhatsApp" instead.
  enrollUrl: "https://payments.cashfree.com/forms/ai-full-stack-developer",
  // Course fee in rupees. The page shows the discount % automatically. Set to null to hide the price.
  price: { original: 9999, offer: 4999 } as { original: number; offer: number } | null,
  nextBatch: "", // PLACEHOLDER, e.g. "January 2027". Hidden while empty.
  tagline: "Learn Full Stack Development. Build AI-Powered Applications. Gain Industry Experience.",
  positioning:
    "This is not just another React or Node.js course. You'll build complete software applications, integrate modern AI capabilities, work on industry-oriented projects and gain full-time team internship experience from Day 1.",
  closing: "From learning JavaScript to building AI-powered software products, one practical step at a time.",
  trustLine: "Taught by a working tech lead who builds and ships real software products.",
  whatsappMessage: "Hi! I'd like to know more about the AI Full Stack Development Programme at The PM Lab.",
};

export const aiNav = [
  { label: "Who it's for", href: "#audience" },
  { label: "Programme", href: "#programme" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Internship", href: "#internship" },
  { label: "FAQ", href: "#faq" },
  { label: "PM Course", href: "/ai-project-management" },
];

export const aiStats = [
  { value: "6 months", label: "Complete programme" },
  { value: "96 hours", label: "Live training" },
  { value: "Day 1", label: "Full-time internship" },
];

export const aiAudience = [
  {
    icon: "cap",
    title: "College students",
    body: "Pursuing IT, Computer Science or a related degree and want to build real applications, not just pass exams.",
  },
  {
    icon: "compass",
    title: "Fresh graduates",
    body: "Ready to enter software development with a portfolio of full stack and AI projects to show employers.",
  },
  {
    icon: "switch",
    title: "Beginners with the basics",
    body: "You know some HTML, CSS and JavaScript and want a structured path to full stack and AI development.",
  },
] as const;

export const aiPrerequisites = {
  required: ["HTML", "CSS", "JavaScript fundamentals", "Basic computer and internet usage"],
  notRequired: "No prior React, Node.js, database or AI experience needed.",
};

export const aiProgramme = {
  facts: [
    { value: "6", label: "Months, including internship" },
    { value: "Day 1", label: "Full-time internship starts" },
    { value: "3 × 2 hrs", label: "Live training every week" },
    { value: "40–50", label: "Students per batch" },
  ],
  included: [
    "96 hours of live online training in Hinglish",
    "1-year access to all training recordings",
    "9 hands-on projects + final capstone",
    "Full-time team internship from Day 1",
    "Group mentorship and doubt-solving sessions",
    "WhatsApp and Discord learning community",
    "Resume, GitHub and interview preparation",
    "Two certificates: course + internship",
  ],
  split: [
    { label: "Full Stack Development", weight: 60 },
    { label: "AI Development", weight: 40 },
  ],
};

// Tech stack, shown as the layers of an app: frontend -> backend -> database, plus AI and tools.
export const aiStack = {
  layers: [
    {
      key: "frontend",
      group: "Frontend",
      role: "What users see and click",
      weeks: "Weeks 1–4",
      items: ["JavaScript ES6+", "TypeScript", "React.js", "React Hooks", "Context API", "React Router", "Material UI", "Axios / Fetch"],
    },
    {
      key: "backend",
      group: "Backend",
      role: "APIs, auth and business logic",
      weeks: "Weeks 5–7, 9",
      items: ["Node.js", "Express.js", "TypeScript", "REST APIs", "Middleware", "JWT Auth", "Multer", "Cloudinary"],
    },
    {
      key: "database",
      group: "Database",
      role: "Where your app's data lives",
      weeks: "Week 8",
      items: ["MySQL", "SQL", "Database design", "Prisma ORM"],
    },
  ],
  ai: {
    group: "AI layer",
    role: "Smart features that plug into your backend",
    weeks: "Weeks 11–15",
    items: ["LLM fundamentals", "OpenAI API", "Prompt engineering", "Structured outputs", "Streaming", "Embeddings", "ChromaDB", "RAG", "Function calling", "AI agents"],
  },
  tools: {
    group: "Your daily toolkit",
    items: ["VS Code", "Git & GitHub", "Postman", "ChatGPT", "GitHub Copilot", "Cursor", "Docker", "Docker Compose"],
  },
};

export const aiModules = [
  {
    module: 1,
    weeks: "Week 1",
    title: "JavaScript & TypeScript Foundations",
    track: "fullstack",
    topics: [
      "ES6+: functions, arrays, objects, destructuring, spread, modules",
      "Array methods: map, filter, reduce, find",
      "Promises, async/await, Fetch API, error handling and JSON",
      "TypeScript: types, interfaces, unions, function types and generics",
    ],
    project: "Task management app in JavaScript, partly converted to TypeScript",
  },
  {
    module: 2,
    weeks: "Weeks 2–4",
    title: "React.js Development",
    track: "fullstack",
    topics: [
      "React with Vite, JSX, components, props, state and events",
      "Hooks: useState, useEffect, useRef, useMemo, useCallback, custom hooks",
      "Context API for global state (no Redux)",
      "React Router: dynamic, nested, layout and protected routes",
      "TypeScript with React: typed props, state, events and API responses",
      "Material UI: themes, forms, dialogs, tables, dashboards, responsive layouts",
    ],
    project: "Student Management Dashboard with search, filters and CRUD",
  },
  {
    module: 3,
    weeks: "Weeks 5–7",
    title: "Backend with Node.js & Express",
    track: "fullstack",
    topics: [
      "Node.js runtime, event loop, npm, environment variables and files",
      "Express: routing, middleware, params, request bodies and error handling",
      "TypeScript with Node.js: typed controllers, services and project structure",
      "REST APIs: CRUD, validation, pagination, search, filtering and sorting",
    ],
    project: "Student Management Backend with REST APIs",
  },
  {
    module: 4,
    weeks: "Week 8",
    title: "Database & Authentication",
    track: "fullstack",
    topics: [
      "MySQL: tables, keys, CRUD, joins, relationships and normalisation",
      "Prisma ORM: schema, models, migrations, relations and nested queries",
      "Authentication: bcrypt, JWT, protected routes and basic roles",
      "API testing with Postman",
    ],
    project: "Authentication and User Management System",
  },
  {
    module: 5,
    weeks: "Week 9",
    title: "Full Stack Integration",
    track: "fullstack",
    topics: [
      "Connecting React to Express APIs with loading and error states",
      "Auth integration, protected frontend routes and user sessions",
      "File uploads with Multer and Cloudinary",
      "Security basics: API keys, input validation, CORS and passwords",
    ],
    project: "Complete full stack application: React + Node.js + MySQL",
  },
  {
    module: 6,
    weeks: "Week 10",
    title: "Docker & Development Workflow",
    track: "fullstack",
    topics: [
      "Images, containers and Docker commands",
      "Writing a Dockerfile for a Node.js app",
      "Running MySQL in Docker",
      "Docker Compose for frontend, backend and database",
    ],
    project: "Containerised local setup for your full stack app",
  },
  {
    module: 7,
    weeks: "Weeks 11–12",
    title: "Generative AI & OpenAI API",
    track: "ai",
    topics: [
      "How LLMs work: tokens, context windows and models",
      "Calling the OpenAI API from Node.js and showing results in React",
      "Prompt engineering: system prompts, few-shot and structured prompts",
      "Structured outputs, JSON, streaming and multi-turn conversations",
      "Managing errors, limits, token usage and costs",
    ],
    project: "AI Chat App, Content Generator, Resume Assistant and Email Generator",
  },
  {
    module: 8,
    weeks: "Week 13",
    title: "Embeddings & RAG",
    track: "ai",
    topics: [
      "Why RAG: limits of plain LLM answers",
      "Embeddings, semantic search and vector databases",
      "Text extraction, chunking and embedding generation",
      "Storing and searching vectors in ChromaDB",
    ],
    project: "AI Document Assistant: upload PDFs and ask questions",
  },
  {
    module: 9,
    weeks: "Week 14",
    title: "Agentic AI & Function Calling",
    track: "ai",
    topics: [
      "AI agents vs chatbots, and agent architecture",
      "Function and tool calling with the OpenAI API",
      "Executing tools from Node.js and handling results",
      "Multi-step tasks and error handling, without a framework",
    ],
    project: "CRM, Project Management and HR assistant agents",
  },
  {
    module: 10,
    weeks: "Week 15",
    title: "AI-Assisted Software Development",
    track: "ai",
    topics: [
      "ChatGPT, GitHub Copilot and Cursor workflows",
      "Generating components and API endpoints",
      "Debugging, refactoring and reviewing AI-generated code",
      "Understanding unfamiliar codebases with AI",
    ],
    project: "Build a full stack feature with AI assistants, and explain every decision",
  },
  {
    module: 11,
    weeks: "Week 16",
    title: "Final Project & Portfolio",
    track: "ai",
    topics: [
      "Build a full stack app with AI features from approved project ideas",
      "GitHub profile, README files and project documentation",
      "Screenshots, demos and resume project descriptions",
      "Explaining your architecture in interviews",
    ],
    project: "Capstone: AI-powered CRM, HRM, e-commerce, support platform and more",
  },
];

export const aiProjects = [
  { name: "Task Management App", skills: "JavaScript, React" },
  { name: "Student Dashboard", skills: "React, MUI, Context API" },
  { name: "Authentication System", skills: "Node.js, JWT, MySQL" },
  { name: "Student Management System", skills: "Full stack, Prisma" },
  { name: "File Upload App", skills: "Multer, Cloudinary" },
  { name: "AI Chat Application", skills: "OpenAI API" },
  { name: "AI Content Generator", skills: "Prompt engineering" },
  { name: "AI Document Assistant", skills: "RAG, ChromaDB" },
  { name: "AI Agent Assistant", skills: "Function calling" },
];

export const aiCapstoneIdeas = [
  "AI-powered CRM",
  "AI-powered HRM",
  "AI Project Management System",
  "AI E-commerce Application",
  "AI Document Assistant",
  "AI Customer Support Platform",
  "AI Student Management System",
  "AI Sales Assistant",
];

export const aiInternship = {
  // How the team project grows alongside the training.
  phases: [
    // start/end are week numbers (6 months ≈ 26 weeks), used to draw the timeline.
    { start: 1, end: 4, weeks: "Weeks 1–4", title: "Frontend", body: "Build screens and components for your team's product as you learn React." },
    { start: 5, end: 10, weeks: "Weeks 5–10", title: "Backend & database", body: "Add APIs, login, MySQL and Docker to the same product." },
    { start: 11, end: 16, weeks: "Weeks 11–16", title: "AI features", body: "Plug AI chat, document Q&A and agents into your team's product." },
    { start: 17, end: 26, weeks: "Months 5–6", title: "Ship & demo", body: "Full-time delivery on real products and client work, ending with a team demo." },
  ],
  structure: [
    "Work in teams of 4–5 students",
    "Each team gets a project with defined requirements",
    "Frontend, backend, database and integration tasks",
    "Group guidance from mentors",
    "Project reviews and demos",
    "Your own GitHub portfolio",
  ],
  sources: [
    {
      title: "The PM Lab products",
      body: "CRM, HRM, project management and AI-powered applications.",
    },
    {
      title: "Simulated industry projects",
      body: "Realistic business requirements, defined scope and feature delivery.",
    },
    {
      title: "Selected real client projects",
      body: "Supervised client work with mentor guidance and code reviews, depending on availability.",
    },
  ],
  responsibilities: [
    "Understanding requirements",
    "Breaking work into tasks",
    "Frontend and backend development",
    "Database management",
    "API and AI feature integration",
    "Git and GitHub collaboration",
    "Code reviews",
    "Project demos",
  ],
};

export const aiSupport = [
  {
    title: "Mentorship",
    points: ["Live group doubt-solving", "Project guidance", "Regular progress reviews", "Assignment feedback"],
  },
  {
    title: "Community",
    points: [
      "WhatsApp: announcements and training reminders",
      "Discord: technical discussions and doubts",
      "Peer-to-peer learning and project collaboration",
      "All training sessions recorded, with 1-year access",
    ],
  },
  {
    title: "Career preparation",
    points: [
      "Resume, GitHub and LinkedIn profile",
      "JavaScript, React, Node.js, SQL and AI interview questions",
      "Explaining your projects with confidence",
      "Mock interview practice and job application guidance",
    ],
  },
];

export const aiAssessment = [
  { label: "Final team project", weight: 35 },
  { label: "Practical assignments", weight: 25 },
  { label: "Individual projects", weight: 25 },
  { label: "Module assessments", weight: 15 },
];

export const aiCertificates = [
  {
    title: "AI Full Stack Development",
    requirements: [
      "Complete the training programme",
      "Complete required assignments",
      "Meet the assessment requirements",
      "Complete your individual projects",
    ],
  },
  {
    title: "Internship Completion",
    requirements: [
      "Successfully complete the internship",
      "Participate in team projects",
      "Complete assigned responsibilities",
      "Pass the internship evaluation",
    ],
  },
];

export const aiFaqs = [
  {
    q: "Do I need coding experience to join?",
    a: "You should know basic HTML, CSS and JavaScript. No prior React, Node.js, database or AI experience is needed. Week 1 revises JavaScript before moving on.",
  },
  {
    q: "What language is the training in?",
    a: "All training is delivered live online in Hinglish, so concepts are easy to follow while you learn the English terms used at work.",
  },
  {
    q: "How long is the programme, and how much time does it take?",
    a: "The programme runs for 6 months, including the internship. It's full time: live training runs 3 days a week, 2 hours a day, for the first 16 weeks, and the rest of your time goes into your full-time team internship.",
  },
  {
    q: "What if I miss a training session?",
    a: "Every live training session is recorded, and you get 1-year access to all recordings.",
  },
  {
    q: "How does the internship work?",
    a: "The internship is full time and starts on Day 1. You join a team of 4–5 students and work on a real product alongside your training, for the full 6 months. Each week you apply what you just learned to your team's project, using The PM Lab products, simulated industry projects and, when available, supervised real client projects.",
  },
  {
    q: "Will I get a certificate?",
    a: "You can earn two: an AI Full Stack Development certificate and an Internship Completion certificate, subject to meeting the requirements for each.",
  },
  {
    q: "Do you guarantee a job?",
    a: "No. The programme is built to make you employable, with portfolio projects, interview preparation and job application guidance, but we don't guarantee a job or placement.",
  },
];

export const aiDailyUpdates = {
  title: "Get daily full stack & AI updates on WhatsApp",
  body: "One short message a day to help you learn modern development and stay ready for your first developer role.",
  points: [
    "A quick JavaScript, React, Node.js or AI tip",
    "Common developer interview questions",
    "New batch dates and programme announcements",
  ],
};
