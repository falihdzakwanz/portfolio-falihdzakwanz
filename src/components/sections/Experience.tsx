"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Target, Star } from "lucide-react";
import { experiences } from "@/data/experience";
import { formatDate, getDuration } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function TimelineLine() {
  return (
    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent" />
  );
}

function DurationBadge({ duration }: { duration: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {duration}
                    </span>
  );
}

function AchievementTag({ achievement }: { achievement: string }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <Star className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
      <span className="text-muted-foreground">{achievement}</span>
    </li>
  );
}

export function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale();

  return (
    <section id="experience" className="py-28 md:py-44 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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

          <motion.div variants={item} className="max-w-3xl mx-auto relative">
            <TimelineLine />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const duration = getDuration(
                  exp.startDate,
                  exp.endDate,
                  locale as "id" | "en",
                  t
                );
                const achievements = exp.achievements?.[locale as "id" | "en"];

                return (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[26px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                    {/* Card */}
                    <div className="bg-card border rounded-xl p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                      {/* Gradient accent bar on left */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-primary/30" />

                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between flex-wrap gap-3">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="text-xl font-bold">
                                {exp.company[locale as "id" | "en"]}
                              </h3>
                              {exp.isCurrent && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                  {t("current")}
                                </span>
                              )}
                            </div>
                            <p className="text-base font-medium text-primary">
                              {exp.position[locale as "id" | "en"]}
                            </p>
                          </div>
                          <DurationBadge duration={duration} />
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location[locale as "id" | "en"]}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5" />
                            {exp.type[locale as "id" | "en"]}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {exp.description[locale as "id" | "en"]}
                        </p>

                        {/* Achievements */}
                        {achievements && achievements.length > 0 && (
                          <div className="pt-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                              <Target className="w-3 h-3" />
                              {t("achievements")}
                            </p>
                            <ul className="space-y-1.5">
                              {achievements.map((achievement, i) => (
                                <AchievementTag
                                  key={i}
                                  achievement={achievement}
                                />
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Logo */}
                        {exp.logo && (
                          <div className="absolute top-6 right-6 w-10 h-10 rounded-lg overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity">
                            <Image
                              src={exp.logo}
                              alt={exp.company[locale as "id" | "en"]}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
