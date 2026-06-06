"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Download, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";
import { analytics } from "@/lib/analytics";

const stats = [
  { value: "8+", key: "projectsBuilt" },
  { value: "Fullstack + AI", key: "expertise" },
  { value: "3+", key: "yearsExp" },
];

export function StatsBar() {
  const t = useTranslations("stats");
  const locale = useLocale();

  const handleCVDownload = () => {
    analytics.trackCVDownload(locale);
    window.open(`/resume-${locale}.pdf`, "_blank");
  };

  const socialMap: Record<string, { url: string; icon: React.ReactNode }> = {
    Github: {
      url: socialLinks.find((s) => s.name === "GitHub")?.url ?? "#",
      icon: <Github className="size-4" />,
    },
    Linkedin: {
      url: socialLinks.find((s) => s.name === "LinkedIn")?.url ?? "#",
      icon: <Linkedin className="size-4" />,
    },
  };

  return (
    <section className="w-full border-y border-border/40 bg-muted/20">
      <div className="container mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Stats */}
          <div className="flex items-center divide-x divide-border/40">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-2 px-5 first:pl-0"
              >
                <span className="stat-number text-lg font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {t(stat.key)}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCVDownload}
              className="group text-muted-foreground hover:text-foreground"
            >
              <Download className="mr-1.5 size-3.5 group-hover:translate-y-0.5 transition-transform" />
              CV
            </Button>

            {Object.entries(socialMap).map(([name, data]) => (
              <a
                key={name}
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {data.icon}
                <span className="hidden sm:inline">{name}</span>
                <ArrowUpRight className="size-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
