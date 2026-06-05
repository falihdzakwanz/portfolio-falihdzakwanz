"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { useLocale } from "next-intl";
import Image from "next/image";

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

export function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  const handleCVDownload = () => {
    analytics.trackCVDownload(locale);
    window.open(`/resume-${locale}.pdf`, "_blank");
  };

  return (
    <section id="about" className="py-28 md:py-44 bg-muted/50">
      <div className="container px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-center mb-4"
          >
            {t("title")}
          </motion.h2>

          <motion.div variants={item} className="mt-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Photo */}
              <motion.div variants={item} className="shrink-0 mx-auto md:mx-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-4 ring-primary/10 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt={t("name")}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold">{t("name")}</h3>
                <p className="text-lg text-primary font-medium">{t("role")}</p>
                <p className="text-muted-foreground leading-relaxed text-justify md:text-left">
                  {t("bio")}
                </p>

                <div className="pt-4 space-y-2">
                  <p className="text-sm font-medium">🎓 {t("education")}</p>
                  <p className="text-sm text-muted-foreground">{t("major")}</p>
                </div>

                <Button
                  onClick={handleCVDownload}
                  size="lg"
                  className="mt-6 group"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
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
