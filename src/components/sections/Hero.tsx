"use client";

import { useEffect, useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import { analytics } from "@/lib/analytics";

const floatingIcons = [
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "Next.js", color: "#000000", icon: "▲" },
  { name: "TypeScript", color: "#3178C6", icon: "TS" },
  { name: "Node.js", color: "#339933", icon: "⬢" },
  { name: "Laravel", color: "#FF2D20", icon: "L" },
  { name: "Tailwind", color: "#06B6D4", icon: "◆" },
  { name: "PostgreSQL", color: "#4169E1", icon: "🐘" },
  { name: "Docker", color: "#2496ED", icon: "🐳" },
  { name: "Git", color: "#F05032", icon: "⎇" },
  { name: "Figma", color: "#F24E1E", icon: "◆" },
  { name: "GraphQL", color: "#E535AB", icon: "◈" },
  { name: "Python", color: "#3776AB", icon: "🐍" },
];

function FloatingBadge({
  item,
  index,
}: {
  item: (typeof floatingIcons)[0];
  index: number;
}) {
  const seed = useMemo(() => Math.random(), []);
  const x = useMemo(() => 5 + seed * 90, [seed]);
  const delay = useMemo(() => index * 0.7 + seed * 2, [index, seed]);
  const duration = useMemo(() => 8 + seed * 8, [seed]);
  const size = useMemo(() => 28 + seed * 16, [seed]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${-5 + seed * 10}%` }}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: [0, 0.8, 0.8, 0],
        y: ["0vh", "105vh"],
        x: [0, seed > 0.5 ? 20 : -20, seed > 0.5 ? -10 : 10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.1, 0.9, 1],
      }}
    >
      <div
        className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold tracking-tight shadow-lg"
        style={{
          backgroundColor: `${item.color}15`,
          borderColor: `${item.color}40`,
          borderWidth: 1,
          color: item.color,
          backdropFilter: "blur(4px)",
        }}
      >
        <span className="text-xs">{item.icon}</span>
        <span className="hidden sm:inline">{item.name}</span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    t("title"),
    "React Enthusiast",
    "UI/UX Lover",
    "Problem Solver",
    "Tech Explorer",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCVDownload = () => {
    analytics.trackCVDownload(locale);
    window.open(`/resume-${locale}.pdf`, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 dark:bg-grid-dark bg-grid" />

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-secondary/20 animate-gradient-shift" />

      {/* Floating Tech Badges */}
      {floatingIcons.map((item, i) => (
        <FloatingBadge key={i} item={item} index={i} />
      ))}

      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70"
          >
            {t("name")}
          </motion.h1>

          {/* Animated title */}
          <div className="h-12 md:h-14 overflow-hidden">
            <motion.h2
              key={titleIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-4xl font-semibold text-primary"
            >
              {titles[titleIndex]}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-lg text-muted-foreground leading-relaxed px-12"
          >
            {t("bio")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mt-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              {t("viewProjects")}
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleCVDownload}
              className="group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              {t("downloadCV")}
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              {t("contactMe")}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
