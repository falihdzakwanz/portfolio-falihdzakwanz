"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";
import { techStack } from "@/data/tech-stack";

const FEATURED_TECH = ["Next.js", "React", "TypeScript", "Python", "Laravel", "TensorFlow"];

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const featuredTech = techStack.filter((t) => FEATURED_TECH.includes(t.name));

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Subtle background — no gradient, no spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-sm font-medium text-primary mb-4 tracking-wide uppercase"
          >
            {t("greeting")}
          </motion.p>

          {/* Name — solid, no gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight display-tight text-foreground"
          >
            {t("name")}
          </motion.h1>

          {/* Title — solid, no gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="mt-3 text-xl md:text-2xl font-semibold text-primary"
          >
            {t("title")}
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl"
          >
            {t("bio")}
          </motion.p>

          {/* CTAs — Two buttons only */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="pill"
              onClick={() => scrollToSection("projects")}
            >
              {t("viewProjects")}
              <ArrowUpRight className="ml-2 size-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="pill"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 size-4" />
              {t("contactMe")}
            </Button>
          </motion.div>

          {/* Tech badges inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">
              Stack
            </span>
            <div className="h-3 w-px bg-border/60" />
            {featuredTech.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-muted-foreground bg-muted/50 rounded-full border border-border/30"
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
