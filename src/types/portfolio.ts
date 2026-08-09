export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  industry: string;
  technologies: string[];
  results: string[];
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export type ProjectFilter = "All" | "FinTech" | "Education" | "Healthcare" | "Enterprise";
