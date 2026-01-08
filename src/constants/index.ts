import { CodeIcon, RocketIcon, HeartIcon } from "lucide-react";

export const projects = [
  {
    id: "1",
    name: "Flexify – Portfolio & CMS Platform",
    imageUrl: "",
    description:
      "A full-featured portfolio application with a public-facing website and an admin dashboard. Includes CRUD management for projects, services, technologies, testimonials, users, and site settings. Built with Next.js, TypeScript, Tailwind CSS, Zustand, React Query, and Framer Motion.",
    liveUrl: "https://flexifypro.vercel.app/en",
  },
  {
    id: "2",
    name: "Notion Clone – Real-Time Productivity Platform",
    imageUrl: "",
    description:
      "A full-stack Notion-like application featuring real-time collaboration, hierarchical documents, dark mode, and live updates. Includes secure authentication, file handling, and optimistic UI updates using Convex, Clerk, and EdgeStore.",
    liveUrl: "https://flexify-notion-clone.vercel.app/",
  },
  {
    id: "3",
    name: "Vendo – Multi-Store E-commerce CMS",
    imageUrl: "",
    description:
      "A scalable multi-tenant e-commerce CMS with centralized admin dashboard and public storefronts. Includes secure authentication, Stripe payments, webhook-based order automation, and high-performance UI.",
  },
];

export const technologies = [
  {
    label: "React Query",
    name: "reactquery",
    color: "#FF4154",
  },
  {
    label: "Node js",
    name: "nodedotjs",
    color: "#5FA04E",
  },
  {
    label: "Tailwind CSS",
    name: "tailwindcss",
    color: "#06B6D4",
  },
  {
    label: "Shadcn/ui",
    name: "shadcnui",
    color: "#000000",
  },
  {
    label: "Radix UI",
    name: "radixui",
    color: "#161618",
  },
  {
    label: "Material UI",
    name: "mui",
    color: "#007FFF",
  },
  {
    label: "Framer Motion",
    name: "framer",
    color: "#0055FF",
  },
  {
    label: "Axios",
    name: "axios",
    color: "#5A29E4",
  },
  {
    label: "Supabase",
    name: "supabase",
    color: "#3FCF8E",
  },
  {
    label: "TypeORM",
    name: "typeorm",
    color: "#FE0803",
  },
  {
    label: "SASS/SCSS",
    name: "sass",
    color: "#CC6699",
  },
  {
    label: "JavaScript",
    name: "javascript",
    color: "#F7DF1E",
  },
  {
    label: "GitHub",
    name: "github",
    color: "#181717",
  },
  {
    label: "GitLab",
    name: "gitlab",
    color: "#FC6D26",
  },
  {
    label: "Nest js",
    name: "nestjs",
    color: "#E0234E",
  },
  {
    label: "TypeScript",
    name: "typescript",
    color: "#3178C6",
  },
  {
    label: "Prisma",
    name: "prisma",
    color: "#2D3748",
  },
  {
    label: "React js",
    name: "react",
    color: "#61DAFB",
  },
  {
    label: "Zod",
    name: "zod",
    color: "#408AFF",
  },
  {
    label: "Next js",
    name: "nextdotjs",
    color: "#000000",
  },
];

export const storyPoints = [
  {
    icon: CodeIcon,
    title: "The Beginning",
    description:
      "My journey into web development started with a curiosity about how websites work. What began as a hobby quickly transformed into a passion for creating beautiful, functional digital experiences.",
  },
  {
    icon: RocketIcon,
    title: "Growth & Learning",
    description:
      "Through continuous learning and hands-on projects, I've mastered modern frontend technologies. Each project has been an opportunity to push boundaries and refine my craft.",
  },
  {
    icon: HeartIcon,
    title: "The Mission",
    description:
      "Today, I'm committed to building web applications that make a difference. My goal is to create solutions that are not only technically sound but also delightful to use.",
  },
];

export const stats = [
  {
    value: "3+",
    label: "Years Experience",
    description: "Building web applications",
  },
  {
    value: "8+",
    label: "Projects Completed",
    description: "From concept to deployment",
  },
  {
    value: "20+",
    label: "Technologies Mastered",
    description: "Modern web stack",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    description: "Quality guaranteed",
  },
];

export const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Material UI",
      "Framer Motion",
      "SASS/SCSS",
      "ReUi",
    ],
  },
  {
    category: "State & Data Management",
    skills: [
      "Zustand",
      "TanStack Query (React Query)",
      "Axios",
      "REST APIs",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    category: "Authentication & Security",
    skills: [
      "NextAuth.js",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "OAuth",
    ],
  },
  {
    category: "Backend & Databases Basics",
    skills: [
      "Node.js",
      "NestJS",
      "Prisma",
      "TypeORM",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Convex",
      "Firebase",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      "GitHub",
      "GitLab",
      "Vercel",
      "Postman",
      "APIDog",
      "Figma",
      "Notion",
      "ClickUp",
    ],
  },
];

export const experiences = [
  {
    role: "Frontend Developer",
    company: "Titech",
    period: "Sep 2025 – Present",
    type: "Part-time · Remote",
    description:
      "Working on a Relief Management System, building responsive dashboards and scalable front-end features using modern Next.js architecture. Collaborating closely with back-end engineers to ensure reliable API integration and maintainable UI structures.",
    achievements: [
      "Built responsive dashboards using Next.js, TypeScript, Tailwind CSS, and shadcn/ui",
      "Integrated file uploads and API-driven data handling",
      "Collaborated with back-end teams to deliver scalable front-end solutions",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Tech Pundits",
    period: "Aug 2024 – Nov 2025",
    type: "Full-time · On-site",
    description:
      "Developed scalable SaaS and PaaS platforms, including e-learning systems with dashboards, media galleries, and file handling. Focused on modular front-end architecture, state management, and multilingual-ready interfaces.",
    achievements: [
      "Built high-performance SaaS platforms using Next.js and TypeScript",
      "Implemented advanced client-side state management with Zustand",
      "Worked on multilingual and localization-ready applications",
      "Led and supported front-end developers to improve code quality",
      "Translated Figma designs into production-ready interfaces",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Logic Software Development",
    period: "Dec 2024 – Jun 2025",
    type: "Part-time · Remote",
    description:
      "Focused on integrating front-end applications with back-end services, validating APIs, and implementing secure, role-based user flows across multiple systems.",
    achievements: [
      "Tested and validated APIs to ensure correct data flow",
      "Integrated third-party services such as OTP-less and WhatsApp solutions",
      "Implemented role-based access control and permissions management",
      "Worked on secure financial and payment-related workflows",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Microteach",
    period: "Jan 2020 – Oct 2023",
    type: "Full-time · On-site",
    description:
      "Gained hands-on experience building and maintaining React-based user interfaces while working on multilingual platforms and RESTful API integrations.",
    achievements: [
      "Assisted in developing and maintaining UI components using React",
      "Integrated RESTful APIs into front-end applications",
      "Worked on responsive design and cross-browser compatibility",
      "Collaborated with senior developers to fix bugs and improve features",
    ],
  },
];
