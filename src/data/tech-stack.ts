export interface TechStack {
  name: string;
  color: string;
  icon: string; // Simple Icons slug
}

export const techStack: TechStack[] = [
  // Frontend
  { name: "Next.js", color: "#000000", icon: "nextdotjs" },
  { name: "React", color: "#61DAFB", icon: "react" },
  { name: "TypeScript", color: "#3178C6", icon: "typescript" },
  { name: "JavaScript", color: "#F7DF1E", icon: "javascript" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: "tailwindcss" },
  { name: "HTML5", color: "#E34F26", icon: "html5" },
  { name: "CSS3", color: "#1572B6", icon: "css3" },
  { name: "Framer Motion", color: "#0055FF", icon: "framer" },

  // Backend
  { name: "Laravel", color: "#FF2D20", icon: "laravel" },
  { name: "Express.js", color: "#000000", icon: "express" },
  { name: "Node.js", color: "#339933", icon: "nodedotjs" },
  { name: "Firebase", color: "#FFCA28", icon: "firebase" },
  { name: "PHP", color: "#777BB4", icon: "php" },

  // Database
  { name: "MySQL", color: "#4479A1", icon: "mysql" },
  { name: "PostgreSQL", color: "#4169E1", icon: "postgresql" },
  { name: "Firestore", color: "#FFCA28", icon: "firebase" },

  // Tools & Platform
  { name: "Git", color: "#F05032", icon: "git" },
  { name: "GitHub", color: "#000000", icon: "github" },
  { name: "Vercel", color: "#000000", icon: "vercel" },
  { name: "PayPal", color: "#00457C", icon: "paypal" },
  { name: "Inertia.js", color: "#9553E9", icon: "inertia" },
  { name: "JWT", color: "#000000", icon: "jsonwebtokens" },
];
