"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  FolderGit2,
  Briefcase,
  Cpu,
  Award,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const statCards = [
  { icon: FolderGit2, key: "projects", value: "6+" },
  { icon: Briefcase, key: "experience", value: "1+" },
  { icon: Cpu, key: "technologies", value: "20+" },
  { icon: Award, key: "certifications", value: "3" },
];

const whatIDo = [
  { icon: Code2, key: "frontendDev", descKey: "whatIDoDesc1" },
  { icon: Database, key: "backendDev", descKey: "whatIDoDesc2" },
  { icon: Palette, key: "uiDesign", descKey: "whatIDoDesc3" },
];

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-28 md:py-44 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob" />

      <div className="container px-6 md:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            {t("title")}
          </motion.h2>

          {/* Main content */}
          <motion.div
            variants={item}
            className="grid md:grid-cols-2 gap-12 items-start mb-20"
          >
            {/* Left: Photo */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-64 h-80 md:w-80 md:h-96">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-6 transition-transform hover:rotate-0 duration-500" />
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/profile.jpg"
                    alt={t("name")}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{t("name")}</h3>
                <p className="text-primary font-medium">{t("role")}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">{t("bio")}</p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("education")}</span> —{" "}
                  {t("major")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {statCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.key}
                  className="bg-card border rounded-xl p-5 text-center group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">
                    {t(`stats.${stat.key}`)}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* What I Do */}
          <motion.div variants={item}>
            <motion.h3
              variants={item}
              className="text-2xl font-bold text-center mb-10"
            >
              {t("whatIDo")}
            </motion.h3>
            <motion.div
              variants={container}
              className="grid md:grid-cols-3 gap-6"
            >
              {whatIDo.map((w) => {
                const Icon = w.icon;
                return (
                  <motion.div
                    key={w.key}
                    variants={item}
                    className="bg-card border rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{t(w.key)}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(w.descKey)}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
