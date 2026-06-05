export interface TechStack {
  name: string;
  color: string;
  icon: string; // Simple Icons slug
  category: "frontend" | "backend" | "database" | "tools";
}

export const techStack: TechStack[] = [
  // Frontend
  { name: "React", color: "#61DAFB", icon: "react", category: "frontend" },
  { name: "Next.js", color: "#000000", icon: "nextdotjs", category: "frontend" },
  { name: "TypeScript", color: "#3178C6", icon: "typescript", category: "frontend" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: "tailwindcss", category: "frontend" },
  { name: "JavaScript", color: "#F7DF1E", icon: "javascript", category: "frontend" },
  { name: "HTML5", color: "#E34F26", icon: "html5", category: "frontend" },
  { name: "CSS3", color: "#1572B6", icon: "css3", category: "frontend" },
  { name: "Bootstrap", color: "#7952B3", icon: "bootstrap", category: "frontend" },
  { name: "Alpine.js", color: "#8BC0D0", icon: "alpinedotjs", category: "frontend" },

  // Backend
  { name: "Laravel", color: "#FF2D20", icon: "laravel", category: "backend" },
  { name: "Node.js", color: "#339933", icon: "nodedotjs", category: "backend" },
  { name: "Express.js", color: "#000000", icon: "express", category: "backend" },
  { name: "Python", color: "#3776AB", icon: "python", category: "backend" },
  { name: "PHP", color: "#777BB4", icon: "php", category: "backend" },
  { name: "GraphQL", color: "#E535AB", icon: "graphql", category: "backend" },
  { name: "REST API", color: "#009688", icon: "swagger", category: "backend" },
  { name: "WebSocket", color: "#010101", icon: "socketdotio", category: "backend" },
  { name: "JWT", color: "#000000", icon: "jsonwebtokens", category: "backend" },
  { name: "Prisma", color: "#2D3748", icon: "prisma", category: "backend" },

  // Database
  { name: "PostgreSQL", color: "#4169E1", icon: "postgresql", category: "database" },
  { name: "MySQL", color: "#4479A1", icon: "mysql", category: "database" },
  { name: "SQLite", color: "#003B57", icon: "sqlite", category: "database" },
  { name: "MongoDB", color: "#47A248", icon: "mongodb", category: "database" },

  // Tools
  { name: "Git", color: "#F05032", icon: "git", category: "tools" },
  { name: "GitHub", color: "#181717", icon: "github", category: "tools" },
  { name: "Docker", color: "#2496ED", icon: "docker", category: "tools" },
  { name: "Figma", color: "#F24E1E", icon: "figma", category: "tools" },
  { name: "Postman", color: "#FF6C37", icon: "postman", category: "tools" },
  { name: "Vercel", color: "#000000", icon: "vercel", category: "tools" },
  { name: "Netlify", color: "#00C7B7", icon: "netlify", category: "tools" },
  { name: "Linux", color: "#FCC624", icon: "linux", category: "tools" },
  { name: "Nginx", color: "#009639", icon: "nginx", category: "tools" },
  { name: "Apache", color: "#D22128", icon: "apache", category: "tools" },
  { name: "cPanel", color: "#FF6C2C", icon: "cpanel", category: "tools" },
  { name: "Composer", color: "#885630", icon: "composer", category: "tools" },
  { name: "npm", color: "#CB3837", icon: "npm", category: "tools" },
];
