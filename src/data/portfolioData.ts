import { ContactInfo, Certification, Project, SkillCategory, ResumeData } from '../types';

export const personalInfo: ContactInfo = {
  name: "Alhussein Salah Shaban",
  title: "Software Engineer & Front-End Developer",
  email: "alhusseinsalah66@gmail.com",
  phone1: "01211980194",
  phone2: "01146457871",
  address: "El Minya - New El Minya - First District - Youssef El Sebai Street, Villa 163, Egypt",
  linkedIn: "https://linkedin.com/in/hussein-salah-515a48301/",
  gitHub: "https://github.com/alhussein30",
  university: "Faculty of Computers and Information, Minya University",
  degree: "Computer Science & Software Engineering",
  graduationYear: "Student / Graduate"
};

export const certificationsData: Certification[] = [
  {
    id: "cert-frontend-diploma",
    title: "Front-End DIPLOMA (100 Hours)",
    issuer: "Instant Software Solutions",
    issueDate: "2024/08/01",
    duration: "100 Hours",
    description: "Awarded for successfully completing the comprehensive Front-End Diploma course covering standard web architecture, React.js, JavaScript ES6+, responsive frameworks, and API integration.",
    skillsAcquired: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Bootstrap & Tailwind",
      "jQuery & RESTful APIs",
      "Responsive Layouts",
      "Git & Version Control"
    ],
    imagePlaceholderColor: "from-blue-600 to-cyan-500",
    signatureBy: "Instant Software Solutions Board"
  },
  {
    id: "cert-frontend-training",
    title: "Front-End Developer Training Completion",
    issuer: "Instant Software Solutions",
    issueDate: "2024/09/02",
    duration: "1 Month Practical Training",
    description: "Awarded for training completion as Front-End Developer. Focused on hands-on project creation, modular component design, client-side state handling, and cross-browser accessibility.",
    skillsAcquired: [
      "Front-End Engineering",
      "Component Architecture",
      "UI/UX Implementation",
      "Performance Tuning",
      "Problem Solving"
    ],
    imagePlaceholderColor: "from-indigo-600 to-purple-600",
    signatureBy: "Instant Software Solutions Board"
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-al-yaqtin",
    title: "Al-Yaqtin Platform",
    subtitle: "Modern Responsive Web Application",
    description: "A sleek, feature-rich web platform delivering high-performance UI components, smooth navigation, and optimized user interaction flows.",
    longDescription: "Al-Yaqtin is built with modern React principles focusing on visual hierarchy, mobile responsiveness, and clean component isolation. Designed to provide instant load speeds and intuitive usability.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel", "UI/UX"],
    category: "React",
    liveUrl: "https://al-yaqtin.vercel.app/",
    githubUrl: "https://github.com/alhussein30",
    featured: true,
    highlights: [
      "Modular React component structure with fast rendering",
      "Fully responsive across smartphones, tablets, and desktop displays",
      "Deployed and hosted on Vercel with high availability"
    ],
    metrics: "100% Mobile Responsive"
  },
  {
    id: "proj-jurista-wheat",
    title: "Jurista Legal Advisory",
    subtitle: "Legal & Professional Services Platform",
    description: "A modern web portal built for legal consultation, client workflow showcase, and structured service information display.",
    longDescription: "Jurista Wheat provides a trustworthy visual experience for users seeking legal guidance, incorporating structured service packages, direct inquiry forms, and professional typography.",
    tags: ["React", "TypeScript", "Tailwind CSS", "RESTful APIs", "Legal Tech"],
    category: "Legal Tech",
    liveUrl: "https://jurista-wheat.vercel.app/",
    githubUrl: "https://github.com/alhussein30",
    featured: true,
    highlights: [
      "Clean corporate branding tailored for professional advisory services",
      "Interactive service selector and contact request pipeline",
      "Optimized DOM structure and accessible visual hierarchy"
    ],
    metrics: "Client Advisory Portal"
  },
  {
    id: "proj-big-data",
    title: "Big Data Educational Analytics",
    subtitle: "Interactive Learning Analytics & Student Data Suite",
    description: "An educational web suite designed to visualize student metrics, learning analytics trends, and performance data for academic decision making.",
    longDescription: "Created to support data-driven decision making (DDDM) and educational data mining (EDM). Features visual charts, risk indicators, and performance tracking models.",
    tags: ["React", "Data Analytics", "Tailwind CSS", "JavaScript", "Educational Tech"],
    category: "Educational",
    liveUrl: "https://big-data-orpin.vercel.app/",
    githubUrl: "https://github.com/alhussein30",
    featured: true,
    highlights: [
      "Visual dashboards for tracking student progress and time-on-task",
      "Structured data tables with quick filtering and statistical summaries",
      "Tailored for educational data management and predictive insights"
    ],
    metrics: "Educational Big Data Platform"
  },
  {
    id: "proj-vape-master",
    title: "Vape Master E-Store",
    subtitle: "Interactive E-Commerce Product Catalog",
    description: "An engaging e-commerce platform with dynamic product search, category filtering, responsive item grid, and shopping cart workflow.",
    longDescription: "Designed with a bold dark aesthetic suited for modern retail showcases. Includes fast filtering, product image modal popups, and intuitive shopping cart state management.",
    tags: ["React", "E-Commerce", "JavaScript", "CSS Modules", "State Management"],
    category: "E-Commerce",
    liveUrl: "https://vape-master1.vercel.app/",
    githubUrl: "https://github.com/alhussein30",
    featured: true,
    highlights: [
      "Interactive cart management with instant total calculations",
      "Dynamic search and category filtering with crisp micro-interactions",
      "Eye-catching product cards with detailed specifications modal"
    ],
    metrics: "Full Shopping Cart Workflow"
  },
  {
    id: "proj-jorista-seven",
    title: "Jorista Web Application",
    subtitle: "Interactive Frontend Experience",
    description: "A fast React web application featuring custom UI controls, asynchronous data integration, and smooth layout transitions.",
    longDescription: "Demonstrates front-end mastery in state handling, modular CSS styling, and responsive layout scaling across diverse viewport sizes.",
    tags: ["React", "JavaScript", "HTML5", "CSS Grid", "Vite"],
    category: "React",
    liveUrl: "https://jorista-seven.vercel.app/",
    githubUrl: "https://github.com/alhussein30",
    featured: false,
    highlights: [
      "Seamless client-side routing and smooth view transitions",
      "Optimized asset loading and mobile-first responsive design"
    ]
  },
  {
    id: "proj-jurestahu",
    title: "Jurestahu Web Portal",
    subtitle: "Full-Stack Client Interface",
    description: "User-friendly web platform engineered for clear data presentation, simple navigation, and responsive accessibility.",
    longDescription: "Built with a focus on speed, accessible form handling, and cohesive visual theme across all screen dimensions.",
    tags: ["React", "Bootstrap", "RESTful APIs", "Vercel"],
    category: "Full-Stack",
    liveUrl: "https://jurestahu.vercel.app/",
    githubUrl: "https://github.com/alhussein30",
    featured: false,
    highlights: [
      "Clean UI component design with accessible form inputs",
      "Rapid prototyping and deployment on Vercel"
    ]
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Languages & Core Web",
    iconName: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: 92, experience: "Main Language", badge: "Advanced" },
      { name: "TypeScript", level: 85, experience: "Type-safe apps", badge: "Proficient" },
      { name: "HTML5 & Semantic Markup", level: 95, experience: "Accessibility & SEO", badge: "Expert" },
      { name: "CSS3 / Modern CSS", level: 92, experience: "Flexbox, Grid, Animations", badge: "Expert" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    iconName: "Layers",
    skills: [
      { name: "React.js", level: 90, experience: "Hooks, State, Virtual DOM", badge: "Expert" },
      { name: "Tailwind CSS", level: 92, experience: "Utility-first layout", badge: "Expert" },
      { name: "Bootstrap", level: 88, experience: "Rapid UI layout", badge: "Proficient" },
      { name: "jQuery", level: 80, experience: "Legacy DOM & AJAX", badge: "Skilled" }
    ]
  },
  {
    category: "APIs & Web Architecture",
    iconName: "Globe",
    skills: [
      { name: "RESTful APIs Integration", level: 90, experience: "Fetch, Axios, Endpoints", badge: "Advanced" },
      { name: "GraphQL", level: 78, experience: "Data querying", badge: "Intermediate" },
      { name: "Responsive Web Design", level: 95, experience: "Mobile-first & Fluid UI", badge: "Expert" },
      { name: "UI/UX & Figma", level: 85, experience: "Design to code", badge: "Proficient" }
    ]
  },
  {
    category: "Tools & Version Control",
    iconName: "Terminal",
    skills: [
      { name: "Git & GitHub", level: 90, experience: "Branching & Workflow", badge: "Advanced" },
      { name: "VS Code & Dev Tools", level: 95, experience: "Debugging & Profiling", badge: "Expert" },
      { name: "Vite & Build Tools", level: 88, experience: "Fast bundling & HMR", badge: "Proficient" },
      { name: "Vercel Deployment", level: 90, experience: "CI/CD & Live Hosting", badge: "Advanced" }
    ]
  }
];

export const softSkillsData = [
  "Technical Problem Solving",
  "Customer Service Mindset",
  "Active Listening & Empathy",
  "Clear Verbal & Written English Communication",
  "Fast Learning & Adaptability",
  "Patience & Attention to Detail"
];

export const languagesData = [
  { language: "Arabic", proficiency: "Native Speaker" },
  { language: "English", proficiency: "B2 (Upper-Intermediate), approaching C1" }
];

export const fullResumeData: ResumeData = {
  personalInfo,
  objective: "A passionate and detail-oriented Front-End Developer with experience in building responsive, user-friendly websites and applications. Seeking an opportunity to leverage my skills in HTML, CSS, JavaScript, TypeScript, and modern front-end frameworks like React to create engaging user experiences.",
  summary: "Computer Science student / graduate at Faculty of Computers and Information, Minya University. Certified Front-End Developer with 100-Hour Diploma and hands-on experience deploying modern React applications on Vercel. Strong problem-solving abilities, English proficiency (B2/C1), and dedication to high-quality code implementation.",
  skills: {
    languages: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
    frameworks: ["React", "Bootstrap", "jQuery", "Tailwind CSS"],
    tools: ["Visual Studio Code", "Figma", "Git", "GitHub", "Vite", "Vercel"],
    design: ["Flexbox", "CSS Grid", "Media Queries", "Responsive Web Design"],
    versionControl: ["Git", "GitHub"],
    apis: ["RESTful APIs", "GraphQL"]
  },
  certifications: certificationsData,
  projects: projectsData,
  spokenLanguages: languagesData
};
