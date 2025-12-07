"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { techStack } from "@/data/tech-stack";
import * as SimpleIcons from "simple-icons";

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
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export function Skills() {
  const t = useTranslations("skills");
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Function to get appropriate color based on theme
  const getColor = (originalColor: string) => {
    // If not mounted yet, return original color to avoid hydration mismatch
    if (!mounted) {
      return originalColor;
    }
    const currentTheme = resolvedTheme || theme;
    // If dark mode and color is black, use white instead
    if (currentTheme === "dark" && originalColor === "#000000") {
      return "#FFFFFF";
    }
    return originalColor;
  };

  return (
    <section id="skills" className="py-28 md:py-44 bg-muted/50">
      <div className="container px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-center mb-12"
          >
            {t("title")}
          </motion.h2>

          {/* Tech Badges Grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {techStack.map((tech) => {
              const iconSlug = `si${tech.icon
                .charAt(0)
                .toUpperCase()}${tech.icon.slice(1)}`;
              const icon = (SimpleIcons as Record<string, { path: string }>)[iconSlug];
              const displayColor = getColor(tech.color);

              return (
                <motion.div
                  key={tech.name}
                  variants={item}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className="group relative"
                >
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
                    style={{
                      borderColor: displayColor,
                      backgroundColor: "hsl(var(--background))",
                    }}
                  >
                    {icon && (
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 transition-transform group-hover:rotate-12"
                        style={{ fill: displayColor }}
                      >
                        <path d={icon.path} />
                      </svg>
                    )}
                    <span
                      className="font-semibold text-sm whitespace-nowrap"
                      style={{ color: displayColor }}
                    >
                      {tech.name}
                    </span>
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                    style={{ backgroundColor: displayColor }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
