import type {
  CompanyValue,
  Project,
  Service,
  TeamMember,
} from "../types/portfolio";

export const services: Service[] = [
  {
    id: "cloud-architecture",
    title: "Cloud Architecture",
    description:
      "Secure, scalable cloud infrastructure designed to support your business as it grows.",
    icon: "☁️",
    features: [
      "Cloud migration",
      "Infrastructure design",
      "DevOps automation",
      "Security and monitoring",
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description:
      "Custom web and mobile products built with modern, reliable technologies.",
    icon: "💻",
    features: [
      "Web application development",
      "Mobile app development",
      "API development",
      "System integration",
    ],
  },
  {
    id: "ai-data-analytics",
    title: "AI & Data Analytics",
    description:
      "Turn complex data into practical insights and intelligent business solutions.",
    icon: "📊",
    features: [
      "Business intelligence dashboards",
      "Data engineering",
      "Predictive analytics",
      "AI solution development",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "fintech-platform",
    title: "MetroPay Financial Platform",
    description:
      "A secure digital payments platform that helps businesses process and manage transactions.",
    challenge:
      "The client needed to replace slow, fragmented payment processes with a dependable platform that could support growing transaction volumes.",
    solution:
      "MetroBlue created a unified financial platform with secure transaction workflows, clear operational visibility, and a scalable backend.",
    image: "/images/projects/metropay.jpg",
    industry: "FinTech",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    results: ["40% faster transaction processing", "99.9% platform uptime"],
    featured: true,
  },
  {
    id: "education-platform",
    title: "Educesol Learning Platform",
    description:
      "A modern education platform connecting learners, teachers, and school administrators.",
    challenge:
      "Schools needed a simpler way to coordinate learning, track progress, and keep teachers, learners, and administrators aligned.",
    solution:
      "MetroBlue delivered a central learning experience that brings key academic activities and progress information into one accessible platform.",
    image: "/images/projects/educesol.jpg",
    industry: "Education",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    results: ["Used across multiple schools", "Simplified learner progress tracking"],
    featured: true,
  },
  {
    id: "healthcare-system",
    title: "CareConnect Health System",
    description:
      "A digital system that improves patient appointment booking and health-record management.",
    challenge:
      "The healthcare team needed to reduce booking friction and make important patient information easier for authorised staff to access.",
    solution:
      "MetroBlue built a connected appointment and records workflow that improves access to information while supporting better patient experiences.",
    image: "/images/projects/careconnect.jpg",
    industry: "Healthcare",
    technologies: ["React", "TypeScript", "REST API"],
    results: ["Reduced booking time", "Centralised patient information"],
    featured: false,
  },
  {
    id: "enterprise-dashboard",
    title: "Operations Intelligence Dashboard",
    description:
      "A real-time dashboard that gives enterprise teams visibility into operational performance.",
    challenge:
      "Leadership teams lacked one reliable view of performance and spent too much time gathering operational updates from separate sources.",
    solution:
      "MetroBlue developed a central dashboard that transforms operational data into timely, easy-to-understand performance insight.",
    image: "/images/projects/operations.jpg",
    industry: "Enterprise",
    technologies: ["React", "Chart.js", "Node.js"],
    results: ["Real-time reporting", "Improved operational visibility"],
    featured: false,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "francis-chibueze",
    name: "Francis Chibueze",
    role: "Founder & Chief Executive Officer",
    image: "/images/team/francis.jpg",
    bio: "Leading MetroBlue's vision to create dependable technology solutions for modern businesses.",
  },
  {
    id: "sithembiso",
    name: "Sithembiso",
    role: "Technical Team Lead",
    image: "/images/team/sithembiso.jpg",
    bio: "Guiding the engineering team in delivering scalable, high-quality digital products.",
  },
];

export const companyValues: CompanyValue[] = [
  {
    title: "Innovation",
    description:
      "We use practical technology and fresh thinking to solve meaningful business problems.",
  },
  {
    title: "Excellence",
    description:
      "We take pride in high standards, clean execution, and dependable results.",
  },
  {
    title: "Partnership",
    description:
      "We work closely with our clients to understand their goals and build long-term value.",
  },
];
