// ============================================================
// src/data/index.ts — Central data file for the portfolio
// ============================================================

// ──────────────────────────────────────────────────────────────
// PERSONAL INFO
// ──────────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Myriam Hamam',
  location: 'Cairo, Egypt',
  email: 'Myriamhmam20@gmail.com',
  universityEmail: 'myriam.hamam@student.miu.edu.eg',
  phone: '+20 1211439274',

  typingRoles: [
    'Senior Software Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'AI Enthusiast',
  ],

  summary:
    'Senior Software Engineering student focused on Full Stack Development, AI, and building modern web applications that solve real-world problems.',

  photo:  '/images/personal/1781819908438.jpg',
  photo2: '/images/personal/Me-Image2.jpg',

  cvPath:          '/documents/Myriam_Hamam_CV_Updated.pdf',
  coverLetterPath: '/documents/Cover_Letter_Myriam_Hamam_UPDATED.pdf',

  github:   'https://github.com/myriam-hamam',
  linkedin: 'https://www.linkedin.com/in/myriam-hamam/',

  stats: {
    projects:       8,
    certifications: 7,
    technologies:   20,
    repositories:   15,
  },
};

// ──────────────────────────────────────────────────────────────
// SKILL CATEGORIES
// ──────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'React.js',      level: 88 },
      { name: 'TypeScript',    level: 82 },
      { name: 'JavaScript',    level: 90 },
      { name: 'Tailwind CSS',  level: 85 },
      { name: 'HTML5 / CSS3',  level: 92 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'Node.js',    level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'Python',     level: 75 },
      { name: 'Java',       level: 72 },
      { name: 'REST APIs',  level: 85 },
      { name: 'MongoDB',    level: 74 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Data',
    color: 'from-pink-500 to-rose-400',
    skills: [
      { name: 'Python ML',     level: 70 },
      { name: 'OpenCV',        level: 65 },
      { name: 'MediaPipe',     level: 60 },
      { name: 'Power BI',      level: 75 },
      { name: 'LangGraph',     level: 60 },
      { name: 'Deep Learning', level: 62 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    color: 'from-violet-500 to-purple-400',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Docker',       level: 60 },
      { name: 'Vite',         level: 80 },
      { name: 'VS Code',      level: 92 },
      { name: 'Postman',      level: 82 },
      { name: 'Figma',        level: 65 },
    ],
  },
  {
    id: 'networking',
    label: 'Networking',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'Cisco Packet Tracer', level: 78 },
      { name: 'TCP/IP',              level: 82 },
      { name: 'OSPF / EIGRP',        level: 70 },
      { name: 'VLANs / STP',         level: 72 },
      { name: 'Network Security',     level: 65 },
      { name: 'Wireshark',            level: 60 },
    ],
  },
];

// ──────────────────────────────────────────────────────────────
// SOFT SKILLS
// ──────────────────────────────────────────────────────────────
export const softSkills = [
  { name: 'Problem Solving',     icon: 'Brain',         color: 'from-blue-500 to-cyan-400' },
  { name: 'Communication',       icon: 'MessageSquare', color: 'from-emerald-500 to-teal-400' },
  { name: 'Teamwork',            icon: 'Users',         color: 'from-violet-500 to-purple-400' },
  { name: 'Fast Learner',        icon: 'Zap',           color: 'from-yellow-500 to-orange-400' },
  { name: 'Attention to Detail', icon: 'Star',          color: 'from-pink-500 to-rose-400' },
  { name: 'Adaptability',        icon: 'RefreshCw',     color: 'from-cyan-500 to-blue-400' },
  { name: 'Goal-Oriented',       icon: 'Target',        color: 'from-orange-500 to-amber-400' },
  { name: 'Time Management',     icon: 'Clock',         color: 'from-teal-500 to-emerald-400' },
];

// ──────────────────────────────────────────────────────────────
// CURRENTLY EXPLORING
// ──────────────────────────────────────────────────────────────
export const currentlyExploring = [
  {
    title: 'Agentic AI Systems',
    desc:  'Building multi-agent pipelines with LangGraph and LangChain for autonomous task execution.',
    icon:  'Bot',
  },
  {
    title: 'Cloud & DevOps',
    desc:  'Learning Docker, CI/CD pipelines, and cloud deployment on AWS and Vercel.',
    icon:  'Cloud',
  },
  {
    title: 'System Design',
    desc:  'Studying scalable distributed systems, microservices architecture, and database sharding.',
    icon:  'Server',
  },
  {
    title: 'Advanced Networking',
    desc:  'Deep-diving into BGP, MPLS, and enterprise network security configurations.',
    icon:  'Shield',
  },
  {
    title: 'GraphQL & tRPC',
    desc:  'Exploring type-safe API layers for modern full-stack TypeScript applications.',
    icon:  'GitBranch',
  },
  {
    title: 'Embedded AI',
    desc:  'Running lightweight ML models on edge devices using TensorFlow Lite and ONNX.',
    icon:  'Cpu',
  },
];

// ──────────────────────────────────────────────────────────────
// SERVICES
// ──────────────────────────────────────────────────────────────
export const services = [
  {
    title: 'Full-Stack Web Development',
    desc:  'End-to-end web applications using React, Node.js, Express, and MongoDB — scalable and production-ready.',
    icon:  'Globe',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Backend & API Development',
    desc:  'RESTful APIs, database design, authentication, and server-side logic with Node.js and Python.',
    icon:  'Server',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Mobile App Development',
    desc:  'Cross-platform Android apps using Kotlin and Java with modern Material Design principles.',
    icon:  'Smartphone',
    color: 'from-violet-500 to-purple-400',
  },
  {
    title: 'UI / UX Design',
    desc:  'Clean, responsive, and accessible user interfaces designed with Tailwind CSS and Figma.',
    icon:  'Palette',
    color: 'from-pink-500 to-rose-400',
  },
  {
    title: 'Network Design & Analysis',
    desc:  'Enterprise network topologies, VLAN segmentation, and routing protocol configuration with Cisco tools.',
    icon:  'Network',
    color: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Data Analytics & BI',
    desc:  'Interactive Power BI dashboards, KPI tracking, and data-driven insights for business decisions.',
    icon:  'BarChart3',
    color: 'from-yellow-500 to-orange-400',
  },
  {
    title: 'AI & ML Solutions',
    desc:  'Computer vision, deep learning models, and intelligent agent systems using Python and LangGraph.',
    icon:  'Cpu',
    color: 'from-cyan-500 to-blue-400',
  },
  {
    title: 'Tutoring & Mentoring',
    desc:  'Teaching Data Structures, OOP, Networking, and Software Engineering to university students.',
    icon:  'Code2',
    color: 'from-teal-500 to-emerald-400',
  },
];

// ──────────────────────────────────────────────────────────────
// CERTIFICATIONS
// Certificate images live in /public/images/certificates/
// Real credential IDs extracted from the actual certificate files.
// ──────────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title:       'Neural Networks and Deep Learning',
    issuer:      'IBM SkillsBuild',
    issuerBrand: 'IBM',
    date:        'Mar 2025',
    category:    'IBM SkillsBuild',
    credential:  null,
    image:       null,
    color:       'from-blue-600 to-blue-400',
    skills:      ['Neural Networks', 'Deep Learning', 'Backpropagation', 'TensorFlow', 'Python'],
  },
  {
    id: 2,
    title:       'Software Development Fundamentals',
    issuer:      'IBM SkillsBuild',
    issuerBrand: 'IBM',
    date:        'Feb 2025',
    category:    'IBM SkillsBuild',
    credential:  null,
    image:       null,
    color:       'from-indigo-600 to-indigo-400',
    skills:      ['Software Development', 'SDLC', 'Agile', 'Version Control', 'Git'],
  },
  {
    id: 3,
    title:       'Project Management Fundamentals',
    issuer:      'IBM SkillsBuild',
    issuerBrand: 'IBM',
    date:        '16 May 2026',
    category:    'IBM SkillsBuild',
    credential:  'PLAN-B2DE5C927EEC',
    image:       '/images/certificates/project-management-fundamentals.png',
    color:       'from-purple-600 to-purple-400',
    skills:      ['Project Management', 'Agile', 'Scrum', 'Risk Management', 'Stakeholder Communication'],
  },
  {
    id: 4,
    title:       'Interview Essentials',
    issuer:      'IBM SkillsBuild',
    issuerBrand: 'IBM',
    date:        '04 Jun 2026',
    category:    'IBM SkillsBuild',
    credential:  'PLAN-5CB0A3E2A678',
    image:       '/images/certificates/interview-essentials.png',
    color:       'from-cyan-600 to-cyan-400',
    skills:      ['Technical Interviews', 'Problem Solving', 'Communication', 'Data Structures'],
  },
  {
    id: 5,
    title:       'Build with AI — Masr Edition',
    issuer:      'Google for Developers',
    issuerBrand: 'Google',
    date:        'Nov 2024',
    category:    'Google & AI',
    credential:  null,
    image:       '/images/certificates/build-with-ai-masr.png',
    color:       'from-green-500 to-emerald-400',
    skills:      ['Generative AI', 'Google AI Tools', 'Prompt Engineering', 'AI Applications'],
  },
  {
    id: 6,
    title:       'Software Development Using IBM Granite',
    issuer:      'IBM SkillsBuild',
    issuerBrand: 'IBM',
    date:        '11 May 2026',
    category:    'IBM SkillsBuild',
    credential:  'PLAN-0434949A76FD',
    image:       '/images/certificates/granite-ai-software-dev.png',
    color:       'from-teal-600 to-teal-400',
    skills:      ['IBM Granite', 'AI-Assisted Coding', 'Code Generation', 'LLM Integration'],
  },
  {
    id: 7,
    title:       'Building Multi-Agent Systems with LangGraph',
    issuer:      'Google Cloud',
    issuerBrand: 'Google',
    date:        'Sep 2024',
    category:    'Google & AI',
    credential:  null,
    image:       null,
    color:       'from-yellow-500 to-amber-400',
    skills:      ['LangGraph', 'Multi-Agent AI', 'LangChain', 'Google Cloud', 'Agentic Systems'],
  },
];

// ──────────────────────────────────────────────────────────────
// PROJECTS
// No actual project screenshots exist in the repo.
// image: null → components will render a styled placeholder.
// Add real screenshots to /public/images/projects/<name>/ when ready.
// ──────────────────────────────────────────────────────────────
export const projects = [
  {
    id:       1,
    title:    'Aura Luxury E-Commerce',
    desc:     'A premium luxury e-commerce platform with advanced product browsing, cart management, and secure checkout.',
    longDesc: 'A fully responsive, production-grade luxury e-commerce platform featuring dynamic product catalog, real-time cart management, wishlist, authentication, and a polished UI/UX designed for high-end brands.',
    category: ['Full Stack', 'Web Development'],
    tech:     ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js'],
    image:    null,
    github:   'https://github.com/myriam-hamam/aura-luxury-ecommercee',
    live:     'https://aura-luxury-ecommercee.vercel.app',
    featured: true,
    achievements: [
      'Deployed to Vercel with CI/CD pipeline',
      'Responsive design across all device sizes',
      'Integrated secure checkout flow',
      'Built reusable component library',
    ],
  },
  {
    id:       2,
    title:    'TripLink — Travel Booking App',
    desc:     'A multi-service travel booking application supporting flight, hotel, and activity reservations.',
    longDesc: 'TripLink is a full-stack travel booking platform enabling users to search, compare, and book flights, hotels, and activities. Features include user authentication, booking history, and interactive maps.',
    category: ['Full Stack', 'Web Development'],
    tech:     ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    image:    null,
    github:   'https://github.com/myriam-hamam/TripLink',
    live:     null,
    featured: true,
    achievements: [
      'Multi-service booking engine (flights, hotels, activities)',
      'User authentication and profile management',
      'Real-time availability checking',
      'Booking history and management dashboard',
    ],
  },
  {
    id:       3,
    title:    'BI Analytics Dashboard',
    desc:     'Interactive business intelligence dashboard with Power BI visualizations, KPIs, and actionable insights.',
    longDesc: 'A comprehensive BI solution combining Python data processing with Power BI dashboards to deliver real-time KPIs, trend analysis, and business performance metrics for decision-makers.',
    category: ['Data Analytics'],
    tech:     ['Power BI', 'Python', 'Pandas', 'SQL', 'DAX', 'Data Modeling'],
    image:    null,
    github:   'https://github.com/myriam-hamam/BI-Project',
    live:     null,
    featured: true,
    achievements: [
      'Interactive KPI dashboards with drill-down capability',
      'Python-based ETL pipeline for data transformation',
      'Advanced DAX measures for complex calculations',
      'Automated report generation and distribution',
    ],
  },
  {
    id:       4,
    title:    'Java Recruitment System',
    desc:     'Object-oriented recruitment management system built in Java with full SDLC documentation.',
    longDesc: 'A comprehensive recruitment management system implementing OOP principles in Java with complete software engineering documentation including SRS, use-case diagrams, ERD, and class diagrams.',
    category: ['Java', 'Software Engineering'],
    tech:     ['Java', 'OOP', 'Design Patterns', 'UML', 'SQL'],
    image:    null,
    github:   'https://github.com/myriam-hamam/Java-Recruitment-System',
    live:     null,
    featured: false,
    achievements: [
      'Full OOP implementation with SOLID principles',
      'Complete SRS and system design documentation',
      'UML diagrams: class, sequence, use-case',
      'Relational database with normalized schema',
    ],
  },
  {
    id:       5,
    title:    'Advanced Network Design',
    desc:     'Enterprise-grade network topology design with multi-area OSPF, VLANs, and security policies.',
    longDesc: 'A complex enterprise network design project implementing multi-area OSPF routing, VLAN segmentation, spanning tree protocol, NAT, and ACL security policies using Cisco Packet Tracer.',
    category: ['Networking'],
    tech:     ['Cisco Packet Tracer', 'OSPF', 'VLANs', 'STP', 'NAT', 'ACLs'],
    image:    null,
    github:   'https://github.com/myriam-hamam/Advanced-Network-Design',
    live:     null,
    featured: false,
    achievements: [
      'Multi-area OSPF routing configuration',
      'VLAN segmentation for department isolation',
      'Redundancy with STP and HSRP',
      'Security hardening with ACLs and port security',
    ],
  },
  {
    id:       6,
    title:    'Software Project Management',
    desc:     'Full SDLC documentation package using Agile/Scrum methodology for a real-world software project.',
    longDesc: 'Comprehensive software project management documentation covering requirements engineering, sprint planning, risk management, and stakeholder communication following Agile best practices.',
    category: ['Software Engineering'],
    tech:     ['Agile', 'Scrum', 'Jira', 'UML', 'Risk Management'],
    image:    null,
    github:   'https://github.com/myriam-hamam/Software-Project-management',
    live:     null,
    featured: false,
    achievements: [
      'Complete Agile project plan with sprints',
      'Risk register and mitigation strategies',
      'Stakeholder communication matrix',
      'Full SRS and test plan documentation',
    ],
  },
];

// ──────────────────────────────────────────────────────────────
// EXPERIENCES
// ──────────────────────────────────────────────────────────────
export const experiences = [
  {
    id:     1,
    role:   'Google Build with AI — Masr Edition Participant',
    org:    'Google for Developers',
    type:   'Program',
    period: 'Nov 2024',
    icon:   'Cpu',
    color:  'from-green-500 to-emerald-400',
    desc:   "Selected as one of 5,000+ developers to participate in Google's AI innovation program in Egypt. Explored Generative AI tools and built AI-powered applications.",
    skills: ['Generative AI', 'Google AI', 'Prompt Engineering', 'AI Applications'],
  },
  {
    id:     2,
    role:   'Freelance Full-Stack Developer',
    org:    'Self-Employed',
    type:   'Freelance',
    period: '2024 – Present',
    icon:   'Code2',
    color:  'from-blue-500 to-cyan-400',
    desc:   'Building web applications and e-commerce platforms for clients. Delivered Aura Luxury E-Commerce and TripLink as major freelance projects.',
    skills: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
  },
  
  {
    id:     4,
    role:   'B.Sc. Computer Science Student',
    org:    'Misr International University (MIU)',
    type:   'Education',
    period: '2023 – 2027',
    icon:   'GraduationCap',
    color:  'from-emerald-500 to-teal-400',
    desc:   'Fourth-year student majoring in Software Engineering and minoring in Software Development. Consistently building practical projects alongside coursework.',
    skills: ['Software Engineering', 'Computer Science', 'Algorithms', 'System Design'],
  },
];

// ──────────────────────────────────────────────────────────────
// ACHIEVEMENTS
// ──────────────────────────────────────────────────────────────
export const achievements = [
  {
    title: 'Google AI Program — 5,000+ Developers',
    desc:  "Selected among 5,000+ developers for Google Build with AI Masr Edition, Egypt's largest AI developer program.",
    year:  '2024',
    icon:  'Award',
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Aura E-Commerce — Live on Vercel',
    desc:  'Successfully deployed a production-grade luxury e-commerce platform used by real users, achieving top performance scores.',
    year:  '2025',
    icon:  'Rocket',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: '7+ Professional Certifications',
    desc:  'Earned certifications from IBM SkillsBuild and Google covering AI, Deep Learning, Software Engineering, and Cloud.',
    year:  '2024–2026',
    icon:  'Shield',
    color: 'from-yellow-500 to-orange-400',
  },
  {
    title: 'Multi-Domain Portfolio',
    desc:  'Built 8+ projects spanning Full Stack, AI, Data Analytics, Networking, and Mobile — showcasing breadth across disciplines.',
    year:  '2023–2026',
    icon:  'Code2',
    color: 'from-violet-500 to-purple-400',
  },
  {
    title: 'Advanced Network Design',
    desc:  'Designed and implemented a complex enterprise network with OSPF, VLANs, STP, and security policies from scratch.',
    year:  '2024',
    icon:  'Star',
    color: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Peer Tutoring Excellence',
    desc:  'Consistently tutoring students in DS&A, Networking, and OOP, helping improve pass rates in core CS subjects.',
    year:  '2023–Present',
    icon:  'Award',
    color: 'from-pink-500 to-rose-400',
  },
];

// ──────────────────────────────────────────────────────────────
// CODING PROFILES
// ──────────────────────────────────────────────────────────────
export const codingProfiles = [
  {
    name:       'LeetCode',
    username:   'myriam-hamam',
    logo:       'LC',
    url:        'https://leetcode.com/myriam-hamam',
    color:      'from-yellow-500 to-orange-500',
    badge:      'Beginner',
    badgeColor: 'from-yellow-600 to-orange-600',
    desc:       'Practicing algorithmic problem solving and data structures.',
    note:       'Building problem-solving fundamentals',
    stats:      [{ value: '20+', label: 'Solved' }, { value: 'Easy', label: 'Level' }],
  },
  {
    name:       'HackerRank',
    username:   'myriam-hamam',
    logo:       'HR',
    url:        'https://hackerrank.com/myriam-hamam',
    color:      'from-green-500 to-emerald-500',
    badge:      '3★ Java',
    badgeColor: 'from-green-600 to-emerald-600',
    desc:       'Completed Java and SQL certification challenges.',
    note:       null,
    stats:      [{ value: '3★', label: 'Java' }, { value: '2★', label: 'SQL' }],
  },
  {
    name:       'GitHub',
    username:   'myriam-hamam',
    logo:       'GH',
    url:        'https://github.com/myriam-hamam',
    color:      'from-slate-500 to-slate-700',
    badge:      'Active',
    badgeColor: 'from-slate-600 to-slate-800',
    desc:       'Open-source projects and portfolio repositories.',
    note:       null,
    stats:      [{ value: '15+', label: 'Repos' }, { value: '8+', label: 'Projects' }],
  },
  {
    name:       'Kaggle',
    username:   'myriamhamam',
    logo:       'KG',
    url:        'https://www.kaggle.com/myriamhamam',
    color:      'from-cyan-500 to-blue-500',
    badge:      'Novice',
    badgeColor: 'from-cyan-600 to-blue-600',
    desc:       'Exploring ML datasets and data science competitions.',
    note:       'Starting data science journey',
    stats:      [{ value: 'Novice', label: 'Rank' }, { value: '3+', label: 'Notebooks' }],
  },
];

// ──────────────────────────────────────────────────────────────
// BLOG POSTS
// ──────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id:       1,
    title:    'Building a Luxury E-Commerce Platform with React & TypeScript',
    excerpt:  'A deep dive into building Aura, a production-grade luxury e-commerce app — architecture decisions, state management patterns, and lessons learned.',
    category: 'Full Stack',
    tags:     ['React', 'TypeScript', 'E-Commerce', 'Tailwind CSS'],
    date:     'May 2026',
    readTime: '8 min read',
    featured: true,
    color:    'from-blue-500 to-cyan-400',
  },
  {
    id:       2,
    title:    'Getting Started with Multi-Agent AI Systems using LangGraph',
    excerpt:  'Exploring how to build autonomous multi-agent pipelines using LangGraph and LangChain — concepts, architecture, and real-world use cases.',
    category: 'AI & Machine Learning',
    tags:     ['LangGraph', 'AI Agents', 'LangChain', 'Python'],
    date:     'Apr 2026',
    readTime: '10 min read',
    featured: true,
    color:    'from-pink-500 to-rose-400',
  },
  {
    id:       3,
    title:    'Enterprise Network Design: OSPF, VLANs, and Security from Scratch',
    excerpt:  'How I designed a complex enterprise network topology using Cisco Packet Tracer — including multi-area OSPF, VLAN segmentation, and ACL security.',
    category: 'Networking',
    tags:     ['OSPF', 'VLANs', 'Cisco', 'Network Security'],
    date:     'Mar 2026',
    readTime: '7 min read',
    featured: false,
    color:    'from-orange-500 to-amber-400',
  },
  {
    id:       4,
    title:    'Power BI for Students: Building Your First BI Dashboard',
    excerpt:  'A beginner-friendly walkthrough on creating interactive business intelligence dashboards with Power BI, DAX, and Python data preparation.',
    category: 'Data Analytics',
    tags:     ['Power BI', 'DAX', 'Data Analytics', 'Python'],
    date:     'Feb 2026',
    readTime: '6 min read',
    featured: false,
    color:    'from-yellow-500 to-orange-400',
  },
];

// ──────────────────────────────────────────────────────────────
// FAQ ITEMS
// ──────────────────────────────────────────────────────────────
export const faqItems = [
  {
    q: 'Are you available for freelance work or internships?',
    a: 'Yes! I am actively looking for internships, freelance projects, and part-time opportunities — especially in full-stack development, backend engineering, and AI. Reach out via the Contact section.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'My core stack is React.js, TypeScript, Node.js, Express.js, and MongoDB for full-stack. I also work with Python for AI/ML, Java for Android and backend systems, and Power BI for data analytics.',
  },
  {
    q: 'Can you work remotely with international teams?',
    a: 'Absolutely! I am comfortable working remotely with distributed teams and am experienced with async collaboration tools like GitHub, Jira, Slack, and Notion.',
  },
  {
    q: 'What is your academic background?',
    a: 'I am a 4th-year Computer Science student at Misr International University (MIU), majoring in Software Engineering and minoring in Software Development. Expected graduation: 2027.',
  },
  {
    q: 'Do you offer tutoring services?',
    a: 'Yes! I tutor university students in Data Structures & Algorithms, OOP, Computer Networks, Software Engineering, and Database Systems. Contact me to book a session.',
  },
  {
    q: 'How quickly do you respond to messages?',
    a: 'I typically respond within 24 hours on business days. For urgent inquiries, you can reach me directly at Myriamhmam20@gmail.com.',
  },
];