"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Heart } from "lucide-react";
import { socialLinks } from "@/data/social";

export function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative border-t bg-background">
      {/* Back to top button */}
      <div className="flex justify-center -translate-y-1/2">
        <motion.button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={t("backToTop")}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="container px-6 md:px-8 pb-8 -mt-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              FDZ<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("madeWith")}{" "}
              <Heart className="inline w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />{" "}
              {t("by")} Falih Dzakwan Zuhdi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              {t("connect")}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const iconMap: Record<string, React.ReactNode> = {
                  Github: <Github className="w-4 h-4" />,
                  LinkedIn: <Linkedin className="w-4 h-4" />,
                };
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-card border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {iconMap[social.name] || <Github className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Falih Dzakwan Zuhdi.{" "}
            {t("rights")}.
          </p>
          <p>
            {t("madeWith")}{" "}
            <Heart className="inline w-3 h-3 text-red-500 fill-red-500" />{" "}
            {t("by")} FDZ
          </p>
        </div>
      </div>
    </footer>
  );
}
