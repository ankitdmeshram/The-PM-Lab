// All homepage copy lives here so it can be edited without touching layout code.
// Anything marked PLACEHOLDER must be replaced with real data before launch.

export const site = {
  name: "The PM Lab",
  // PLACEHOLDER: real WhatsApp number in international format, digits only.
  whatsappNumber: "919999999999",
  email: "hello@thepmlab.in", // PLACEHOLDER
  phone: "+91 99999 99999", // PLACEHOLDER
  nextBatch: "December 2026", // PLACEHOLDER
};

export const nav = [
  { label: "Who it's for", href: "#audience" },
  { label: "Course", href: "#course" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Certificate", href: "#certificate" },
  { label: "FAQ", href: "#faq" },
];

// Facts shown under the hero buttons.
export const stats = [
  { value: "8 weeks", label: "Live virtual programme" },
  { value: "40 hrs", label: "Instructor-led training" },
  { value: "Hinglish", label: "Easy-to-follow classes" },
];

export const audiences = [
  {
    icon: "cap",
    title: "College students",
    body: "In 2nd, 3rd or final year? Learn project management alongside your degree and graduate with a project portfolio and a head start on placements.",
    cta: "Start while you study",
  },
  {
    icon: "compass",
    title: "Fresh graduates",
    body: "Just graduated and looking for your first role? Get job-ready for Project Coordinator, Associate PM and Scrum Master roles.",
    cta: "Land your first role",
  },
  {
    icon: "switch",
    title: "Early-career professionals",
    body: "Working in development, testing, support or operations? Move into a project management role early, before you're locked into one track.",
    cta: "Make the move",
  },
] as const;

export const course = {
  title: "Project Management: From Fundamentals to Real-World Execution",
  tagline: "Learn. Plan. Execute. Deliver.",
  intro:
    "Not just a Jira or Scrum course. You'll learn how to actually manage a project: planning, assigning work, handling delays, communicating with stakeholders, managing risks and delivering outcomes.",
  facts: [
    { value: "8", label: "Weeks" },
    { value: "40", label: "Hours of live training" },
    { value: "24 + 2", label: "Classes + capstone workshops" },
    { value: "90–120", label: "Minutes per class" },
  ],
  highlights: [
    "8-week live virtual programme",
    "40 hours of instructor-led training",
    "24 core classes + 2 capstone workshops",
    "Taught in Hinglish",
    "Hands-on Jira and PM tools",
    "Real-world project simulation",
    "Course completion certificate",
  ],
};

export const curriculum = [
  {
    week: 1,
    title: "Introduction to Project Management",
    outcome: "Understand what a project manager does and how projects are structured.",
    sessions: [
      "What is project management? Projects vs operations, the PM's role",
      "Project lifecycle: initiation, planning, execution, monitoring and closure",
      "Methodologies: Waterfall, Agile, Hybrid, and when to use each",
    ],
  },
  {
    week: 2,
    title: "Project Initiation & Scope Management",
    outcome: "Learn how to define a project before execution begins.",
    sessions: [
      "Business requirements, objectives, stakeholders and the project charter",
      "Scope management, deliverables, assumptions and constraints",
      "Work Breakdown Structure (WBS), milestones and task decomposition",
    ],
  },
  {
    week: 3,
    title: "Project Planning & Scheduling",
    outcome: "Create a realistic project plan with timelines and dependencies.",
    sessions: [
      "Effort estimation, resource planning and cost basics",
      "Dependencies, task sequencing, milestones and critical path",
      "Gantt charts, timelines, baselines and change management",
    ],
  },
  {
    week: 4,
    title: "Agile & Scrum",
    outcome: "Understand how modern software teams plan and deliver work.",
    sessions: [
      "Agile mindset, principles and Agile vs Waterfall",
      "Scrum framework: Product Owner, Scrum Master and Developers",
      "Backlogs, user stories, story points, sprint planning and retrospectives",
    ],
  },
  {
    week: 5,
    title: "Project Management Tools",
    outcome: "Gain hands-on experience with tools project teams use every day.",
    sessions: [
      "Jira project setup, epics, tasks, workflows and assignments",
      "Backlogs, sprint boards, Kanban and Scrum boards",
      "Jira reporting, Confluence and project tracking sheets",
    ],
  },
  {
    week: 6,
    title: "Project Execution & Monitoring",
    outcome: "Learn how to monitor progress and keep a project on track.",
    sessions: [
      "Project execution, task allocation and resource management",
      "Daily stand-ups, progress tracking, dependencies and delays",
      "Monitoring, KPIs, status reports and change requests",
    ],
  },
  {
    week: 7,
    title: "Risk, Quality & Stakeholder Management",
    outcome: "Handle common project challenges and communicate effectively.",
    sessions: [
      "Risk identification, assessment and mitigation",
      "Issue management, quality assurance and quality control",
      "Stakeholder communication, escalation and conflict resolution",
    ],
  },
  {
    week: 8,
    title: "Leadership, Closure & Career Preparation",
    outcome: "Understand a PM's responsibilities beyond planning and tools.",
    sessions: [
      "Team leadership, motivation and client communication",
      "Project closure, handover, lessons learned and retrospectives",
      "PM career paths, interview questions and a mock PM interview",
    ],
  },
];

export const capstone = {
  title: "Capstone: End-to-end project simulation",
  example: "Example project: E-commerce website development",
  body: "Work in a team to run a simulated software project from initiation to delivery and closure, across two live 2-hour workshops.",
  workshops: [
    {
      title: "Workshop 1: Project planning",
      points: [
        "Understand the requirements",
        "Write the project charter and scope",
        "Create the WBS and timeline",
        "Set up Jira and assign responsibilities",
      ],
    },
    {
      title: "Workshop 2: Execution & presentation",
      points: [
        "Run a simulated sprint",
        "Track progress and manage delays",
        "Prepare a risk register and status report",
        "Present the project and explain your decisions",
      ],
    },
  ],
};

// Documents learners create during the course (shown as a portfolio list).
export const deliverables = [
  "Project charter",
  "Scope document",
  "Work Breakdown Structure",
  "Project timeline & Gantt chart",
  "Jira project & sprint board",
  "Risk register",
  "Stakeholder communication plan",
  "Weekly status report",
  "Project closure report",
];

export const tools = [
  { name: "Jira", use: "Task and sprint management" },
  { name: "Confluence", use: "Project documentation" },
  { name: "Excel / Google Sheets", use: "Planning and reporting" },
  { name: "Trello", use: "Kanban and task tracking" },
];

// Five-step format for each class (timings shown are for a 90-minute class).
export const classFormat = [
  { minutes: 10, title: "Recap & discussion" },
  { minutes: 25, title: "Concept explanation" },
  { minutes: 20, title: "Real-world industry example" },
  { minutes: 25, title: "Live practical demonstration" },
  { minutes: 10, title: "Questions & assignment" },
];

export const assessment = [
  { label: "Weekly assignments", weight: 30 },
  { label: "Capstone project", weight: 30 },
  { label: "Attendance & participation", weight: 20 },
  { label: "Final presentation", weight: 20 },
];

export const certificateRules = [
  "Minimum 75% attendance",
  "Complete at least 6 of 8 weekly assignments",
  "Submit the capstone project",
  "Complete the final presentation",
];

// PLACEHOLDER: not shown on the page yet. Add real student stories here
// (with their permission) once the first batch finishes.
export const testimonials: { name: string; from: string; to: string; quote: string }[] = [];

export const faqs = [
  {
    q: "I'm still in college. Can I join?",
    a: "Yes. The course starts from the basics and is built for college students, fresh graduates and early-career professionals. You finish with a portfolio of real project documents.",
  },
  {
    q: "Do I need a technical degree or work experience?",
    a: "No. B.Tech, BCA, BBA, B.Com and other graduates can all do well in project management. We explain everything from scratch with real-world examples.",
  },
  {
    q: "What language are the classes in?",
    a: "Classes are taught in Hinglish, so concepts are easy to follow while you still learn the English terms used at work.",
  },
  {
    q: "How are the classes run?",
    a: "All 26 sessions are live and online: 24 core classes of 90–120 minutes each, plus two 2-hour capstone workshops. Around 60% of the time is hands-on practice.",
  },
  {
    q: "Is the certificate a PMP or PMI certification?",
    a: "No. You receive a course completion certificate from The PM Lab. It is a training certificate, not a PMP, CAPM or other PMI certification.",
  },
  {
    q: "Do you guarantee a job?",
    a: "No, we don't promise jobs. Week 8 is dedicated to career preparation: PM career paths, common interview questions, real-world scenarios and a mock PM interview.",
  },
];

// Options for the "I am a…" dropdown in the enquiry form.
export const enquiryStatuses = [
  "College student",
  "Fresh graduate",
  "Working (0–1 year)",
  "Working (1–2 years)",
];
