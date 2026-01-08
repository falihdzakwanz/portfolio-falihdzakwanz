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
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
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
    if (years > 0) {
      parts.push(`${years} ${years === 1 ? t("year") : t("years")}`);
    }
    if (remainingMonths > 0) {
      parts.push(
        `${remainingMonths} ${remainingMonths === 1 ? t("month") : t("months")}`
      );
    }

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

  if (experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-28 md:py-44">
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

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              {/* Experience items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={exp.id}
                      variants={item}
                      className={`relative flex items-center gap-8 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline node */}
                      <div className="absolute -left-1.5 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

                      {/* Spacer for desktop alternating layout */}
                      <div className="hidden md:block md:w-1/2" />

                      {/* Content card */}
                      <div className="flex-1 ml-8 md:ml-0">
                        <div className="bg-card border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                          {/* Company logo */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                              {exp.logo ? (
                                <Image
                                  src={exp.logo}
                                  alt={exp.company[locale]}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <Briefcase className="w-6 h-6 text-primary" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-1">
                                {exp.role[locale]}
                              </h3>
                              <p className="text-muted-foreground font-medium">
                                {exp.company[locale]}
                              </p>
                            </div>
                            {!exp.endDate && (
                              <Badge variant="default" className="shrink-0">
                                {t("current")}
                              </Badge>
                            )}
                          </div>

                          {/* Meta information */}
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {formatDate(exp.startDate)} -{" "}
                                {exp.endDate
                                  ? formatDate(exp.endDate)
                                  : t("present")}{" "}
                                ·{" "}
                                {calculateDuration(exp.startDate, exp.endDate)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location[locale]}</span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <Badge variant="secondary">
                              {getTypeLabel(exp.type)}
                            </Badge>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
                            {exp.description[locale]}
                          </p>

                          {/* Technologies */}
                          {exp.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="outline">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
