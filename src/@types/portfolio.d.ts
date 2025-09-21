export interface Introduction {
  title: string;
  slogan: string;
  summary: string;
}

export interface About {
  title: string;
  slogan: string;
  summaries: string[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface Skills {
  programming: string[];
  backend: string[];
  frontend: string[];
  databases: string[];
  devOps_tools: string[];
  architecture: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  tasks: string[];
  latest: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  latest: boolean;
}

export interface Contact {
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface PortfolioData {
  introduction: Introduction;
  about: About;
  projects: Project[];
  skills: Skills;
  experience: Experience[];
  education: Education[];
  contact: Contact;
  githubProfile: string;
  resume: string;
  viewers: number;
  likes: number;
}
