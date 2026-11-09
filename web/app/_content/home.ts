// All homepage copy lives here so it can be edited without touching layout code.
// Anything marked PLACEHOLDER must be replaced with real data before launch.

export const site = {
  name: "The PM Lab",
  // PLACEHOLDER: real WhatsApp number in international format, digits only.
  whatsappNumber: "919999999999",
  email: "hello@thepmlab.in", // PLACEHOLDER
  phone: "+91 99999 99999", // PLACEHOLDER
  // Google Apps Script web app URL that saves WhatsApp update sign-ups to a Google Sheet.
  // See README ("WhatsApp updates form"). While empty, the form opens WhatsApp instead.
  updatesFormEndpoint: "",
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
  { value: "40+ hours", label: "Instructor-led training" },
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
    { value: "40+", label: "Hours of live training" },
    { value: "24 + 2", label: "Classes + capstone workshops" },
    { value: "90–120", label: "Minutes per class" },
  ],
  highlights: [
    "8-week live virtual programme",
    "40+ hours of instructor-led training",
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
  "Capstone presentation deck",
];

export const tools = [
  { name: "Jira", use: "Task and sprint management" },
  { name: "Confluence", use: "Project documentation" },
  { name: "Excel / Google Sheets", use: "Planning and reporting" },
  { name: "Asana", use: "Task and project tracking" },
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
    q: "Will I get a certificate?",
    a: "Yes. You receive a course completion certificate from The PM Lab when you attend at least 75% of classes, complete 6 of 8 weekly assignments, and submit your capstone project and final presentation.",
  },
  {
    q: "Do you guarantee a job?",
    a: "No, we don't promise jobs. Week 8 is dedicated to career preparation: PM career paths, common interview questions, real-world scenarios and a mock PM interview.",
  },
];

// Career ladder shown in the "Career paths" section, from entry level to leadership.
// "years" are typical ranges, not rules.
export const careerLevels = [
  {
    step: "Start here",
    stage: "Entry level",
    years: "0–2 years",
    roles: [
      {
        title: "Project Coordinator",
        body: "Support the project manager: track tasks, update plans, schedule meetings and send status reports.",
      },
      {
        title: "Project Analyst",
        body: "Maintain plans and trackers, analyse project data and prepare reports that help managers make decisions.",
      },
      {
        title: "PMO Analyst",
        body: "Keep projects visible across the organisation with dashboards, risk logs, reports and documentation.",
      },
      {
        title: "Junior Scrum Master",
        body: "Run sprint ceremonies, manage the board, remove blockers and help an Agile team deliver every sprint.",
      },
      {
        title: "Agile Project Associate",
        body: "Help Kanban and hybrid teams plan work, manage boards, run stand-ups and keep delivery flowing.",
      },
      {
        title: "Delivery Coordinator",
        body: "Track delivery for client projects in IT services: schedules, client updates, team capacity and handovers.",
      },
      {
        title: "Implementation Associate",
        body: "Roll out software or solutions for clients, managing timelines, requirements and go-live handovers.",
      },
      {
        title: "Program Coordinator",
        body: "Support several related projects at once with combined reporting, meetings, risks and documentation.",
      },
      {
        title: "Junior Business Analyst",
        body: "Gather requirements, write user stories and connect business teams with developers.",
      },
    ],
  },
  {
    step: "Grow into",
    stage: "Mid level",
    years: "2–5 years",
    roles: [
      {
        title: "Associate Project Manager",
        body: "Own smaller projects or workstreams end to end, from scope and timelines to stakeholders and delivery.",
      },
      {
        title: "Scrum Master",
        body: "Coach an Agile team in Scrum, protect the sprint, remove blockers and keep improving how the team works.",
      },
      {
        title: "Associate Product Manager",
        body: "Work with users, designers and engineers to plan features, prioritise the backlog and ship releases.",
      },
    ],
  },
  {
    step: "Lead",
    stage: "Senior level",
    years: "5+ years",
    roles: [
      {
        title: "Project Manager",
        body: "Lead projects end to end: scope, budget and timelines, the team, stakeholders and final delivery.",
      },
      {
        title: "Project Leader",
        body: "Lead large projects or several teams, set direction, manage senior stakeholders and mentor other PMs.",
      },
      {
        title: "Program Manager",
        body: "Oversee a group of related projects, align them with business goals and manage budgets, risks and leadership reporting.",
      },
    ],
  },
];

// WhatsApp daily updates sign-up section.
export const dailyUpdates = {
  title: "Get daily project management updates on WhatsApp",
  body: "One short message a day to help you learn project management and stay ready for your first PM role.",
  points: [
    "A quick PM concept or tool tip, explained simply",
    "Common PM interview questions and how to answer them",
    "New batch dates and course announcements",
  ],
};

// Options for the "I am a…" dropdown in the updates form.
export const enquiryStatuses = [
  "College student",
  "Fresh graduate",
  "Working (0–1 year)",
  "Working (1–2 years)",
];
