"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6">
        {/* Wordmark + tagline */}
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground/60">FDZ</span>
          {" · "}
          © {new Date().getFullYear()} {t("rights")}.
        </p>

        {/* Social */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            if (!Icon) return null;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/50 hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
