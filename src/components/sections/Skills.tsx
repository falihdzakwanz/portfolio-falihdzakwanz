"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { techStack, type TechStack } from "@/data/tech-stack";
import { Code2, Database, Wrench, Monitor, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const categories = ["frontend", "backend", "database", "tools"] as const;

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Monitor className="w-4 h-4" />,
  backend: <Code2 className="w-4 h-4" />,
  database: <Database className="w-4 h-4" />,
  tools: <Wrench className="w-4 h-4" />,
};

const categoryGradients: Record<string, string> = {
  frontend: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  backend: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  database: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
  tools: "from-sky-500/20 via-indigo-500/20 to-violet-500/20",
};

function getCategoryCounts() {
  const counts: Record<string, number> = {};
  for (const cat of categories) {
    counts[cat] = techStack.filter((t) => t.category === cat).length;
  }
  return counts;
}

export function Skills() {
  const t = useTranslations("skills");
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("frontend");

  const filteredSkills = useMemo(
    () => techStack.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  return (
    <section id="skills" className="py-28 md:py-44 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-40 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-blob-delayed" />

      <div className="container px-6 md:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-center mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            variants={item}
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          >
            Technologies I work with on a daily basis
          </motion.p>

          {/* Category Tabs */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {categoryIcons[cat]}
                  <span>
                    {t(`categories.${cat}`)}
                  </span>
                  <span className="text-xs opacity-70">
                    ({categoryCounts[cat]})
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <div className="relative">
            {/* Gradient background that changes with category */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[activeCategory]} rounded-3xl opacity-30 transition-all duration-500`}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-6"
              >
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="group"
                  >
                    <div className="bg-card border rounded-xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden">
                      {/* Hover Glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />

                      {/* Icon placeholder */}
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          color: skill.color,
                        }}
                      >
                        <span className="text-sm font-bold">
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
