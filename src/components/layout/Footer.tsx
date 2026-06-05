"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Falih Dzakwan Zuhdi. {t("rights")}.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
