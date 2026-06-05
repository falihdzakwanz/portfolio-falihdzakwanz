export interface Project {
  id: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  longDescription: {
    id: string;
    en: string;
  };
  role: {
    id: string;
    en: string;
  };
  challenge: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  impact: {
    id: string;
    en: string;
  };
  techRationale: {
    id: string;
    en: string;
  };
  features: {
    id: string;
    en: string;
  }[];
  technologies: string[];
  category: "web" | "fullstack" | "mobile" | "game" | "other";
  image: string;
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  date: string;
}

export interface Experience {
  company: {
    id: string;
    en: string;
  };
  position: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  location: {
    id: string;
    en: string;
  };
  type: {
    id: string;
    en: string;
  };
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  logo?: string;
  link?: string;
  achievements?: {
    id: string[];
    en: string[];
  };
  technologies?: string[];
}

export interface TechStack {
  name: string;
  color: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface SocialLink {
  name: string;
  url: string;
  color: string;
}

export interface NavItem {
  name: string;
  href: string;
  label: {
    id: string;
    en: string;
  };
}

export type Locale = "id" | "en";
