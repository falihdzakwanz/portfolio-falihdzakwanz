"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as "id" | "en";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + "-01");
    return date.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const calculateDuration = (start: string, end?: string) => {
    const startDate = new Date(start + "-01");
    const endDate = end ? new Date(end + "-01") : new Date();
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) +
      1;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const parts = [];
    if (years > 0) parts.push(`${years} ${years === 1 ? t("year") : t("years")}`);
    if (remainingMonths > 0)
      parts.push(`${remainingMonths} ${remainingMonths === 1 ? t("month") : t("months")}`);
    return parts.join(` ${t("and")} `);
  };

  const getTypeLabel = (type: string) => {
    const types: Record<string, { id: string; en: string }> = {
      fulltime: { id: "Penuh Waktu", en: "Full-time" },
      parttime: { id: "Paruh Waktu", en: "Part-time" },
      contract: { id: "Kontrak", en: "Contract" },
      freelance: { id: "Freelance", en: "Freelance" },
      internship: { id: "Magang", en: "Internship" },
    };
    return types[type]?.[locale] || type;
  };

  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-primary/40" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-border">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={item}
                  className="relative pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(1rem+5px)] top-1.5 size-3 rounded-full bg-primary border-2 border-background" />

                  <div className="space-y-3">
                    {/* Header row */}
                    <div className="flex items-start gap-3">
                      <div className="size-10 rounded-lg border border-border flex items-center justify-center shrink-0 overflow-hidden bg-muted">
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={exp.company[locale]}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <Briefcase className="size-5 text-primary/60" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold">
                          {exp.role[locale]}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company[locale]}
                        </p>
                      </div>
                      {!exp.endDate && (
                        <Badge variant="default" className="shrink-0 text-[10px]">
                          {t("current")}
                        </Badge>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3" />
                        {formatDate(exp.startDate)} —{" "}
                        {exp.endDate ? formatDate(exp.endDate) : t("present")}
                        {" · "}
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3" />
                        {exp.location[locale]}
                      </span>
                      <Badge variant="secondary" className="text-[10px]">
                        {getTypeLabel(exp.type)}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description[locale]}
                    </p>

                    {/* Tech */}
                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-[10px] font-normal border-border/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
