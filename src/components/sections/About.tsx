"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MapPin, GraduationCap, Award } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { useLocale } from "next-intl";
import Image from "next/image";

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

export function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  const handleCVDownload = () => {
    analytics.trackCVDownload(locale);
    window.open(`/resume-${locale}.pdf`, "_blank");
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={item} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-primary/40" />
          </motion.div>

          <motion.div variants={item}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Photo */}
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-xl overflow-hidden border border-border">
                  <Image
                    src="/profile.jpg"
                    alt={t("name")}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{t("name")}</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">{t("role")}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("bio")}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="size-4 text-primary/60" />
                    <span>{t("education")} · {t("major")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="size-4 text-primary/60" />
                    <span>Apple Developer Academy 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-primary/60" />
                    <span>Indonesia</span>
                  </div>
                </div>

                <Button
                  onClick={handleCVDownload}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  <Download className="mr-2 size-3.5" />
                  {t("downloadCV")}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
