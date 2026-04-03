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
  image: string; // Featured image
  screenshots: string[]; // Additional gallery images
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack" | "game" | "other";
  date: string;
  role: {
    id: string;
    en: string;
  };
  impact: {
    id: string;
    en: string;
  };
  features: {
    id: string;
    en: string;
  }[];
  challenge: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  techRationale: {
    id: string;
    en: string;
  };
}

export interface SkillCategory {
  name: {
    id: string;
    en: string;
  };
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: {
    id: string;
    en: string;
  };
  role: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  technologies: string[];
  logo?: string;
  startDate: string; // Format: "YYYY-MM"
  endDate?: string; // undefined = current position
  location: {
    id: string;
    en: string;
  };
  type: "fulltime" | "parttime" | "contract" | "freelance" | "internship";
  locationType: "onsite" | "remote" | "hybrid";
}
