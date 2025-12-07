import { SITE_CONFIG } from "./constants";
import { techStack } from "@/data/tech-stack";
import { projects } from "@/data/projects";

export function generatePersonSchema(locale: "id" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.title,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    alumniOf: {
      "@type": "Organization",
      name: "Institut Teknologi Sumatera",
    },
    knowsAbout: techStack.map((tech) => tech.name),
    sameAs: [
      `https://github.com/${SITE_CONFIG.github}`,
      `https://linkedin.com/in/${SITE_CONFIG.linkedin}`,
    ],
    hasCredential: projects
      .filter((p) => p.liveUrl)
      .map((p) => ({
        "@type": "CreativeWork",
        name: p.title[locale],
        description: p.description[locale],
        url: p.liveUrl,
      })),
  };
}
