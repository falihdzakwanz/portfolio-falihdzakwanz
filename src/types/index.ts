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
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack" | "game" | "other";
  date: string;
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
