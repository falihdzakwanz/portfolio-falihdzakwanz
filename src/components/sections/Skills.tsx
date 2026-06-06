"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { techStack } from "@/data/tech-stack";
import * as SimpleIcons from "simple-icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const CATEGORIES = [
  { key: "frontend" as const, names: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"] },
  { key: "backend" as const, names: ["Laravel", "Express.js", "Node.js", "Firebase", "PHP"] },
  { key: "database" as const, names: ["MySQL", "PostgreSQL", "Firestore"] },
  { key: "ai_ml" as const, names: ["Python", "TensorFlow", "PyTorch", "OpenCV"] },
  { key: "tools" as const, names: ["Git", "Docker", "Linux", "Vercel", "Figma"] },
];

function getSiIcon(iconSlug: string) {
  const key = `si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(1)}`;
  const icon = (SimpleIcons as Record<string, { path: string; hex: string }>)[key];
  return icon;
}

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-primary/40" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => {
              const catTechs = cat.names
                .map((name) => techStack.find((t) => t.name === name))
                .filter((t): t is (typeof techStack)[0] => t !== undefined);

              return (
                <motion.div
                  key={cat.key}
                  variants={item}
                  className="surface-raised p-4"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
                    {t(`categories.${cat.key === 'ai_ml' ? 'ai_ml' : cat.key}`)}
                  </h3>
                  <div className="space-y-2.5">
                    {catTechs.map((tech) => {
                      const icon = getSiIcon(tech.icon);
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2.5"
                        >
                          {icon && (
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              className="size-4 shrink-0 opacity-60"
                              style={{ fill: tech.color }}
                            >
                              <path d={icon.path} />
                            </svg>
                          )}
                          <span className="text-sm text-muted-foreground">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
