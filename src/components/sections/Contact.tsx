"use client";

import { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { analytics } from "@/lib/analytics";
import { socialLinks } from "@/data/social";
import {
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Send,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
  Instagram,
  Youtube,
  MessageCircle,
  Twitter,
  type LucideIcon,
} from "lucide-react";

const socialIcons: Record<string, LucideIcon> = {
  Github,
  LinkedIn: Linkedin,
  Website: Globe,
  Instagram,
  YouTube: Youtube,
  Discord: MessageCircle,
  Twitter,
};

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

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "rate-limit"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const isSubmittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, locale }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
        analytics.trackFormSubmit(locale);
      } else if (response.status === 429) {
        setSubmitStatus("rate-limit");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      isSubmittingRef.current = false;
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-28 md:py-44 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob-delayed" />

      <div className="container px-6 md:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-center mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            variants={item}
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-16"
          >
            {t("description")}
          </motion.p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Left Column - Info */}
            <motion.div variants={item} className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {t("infoTitle")}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {t("infoDesc")}
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border group hover:border-primary/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        {t("email")}
                      </p>
                      <a
                        href="mailto:falihdzakwanz@gmail.com"
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        falihdzakwanz@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border group hover:border-primary/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        {t("location")}
                      </p>
                      <p className="text-sm font-medium">Lampung, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border group hover:border-primary/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        {t("available")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("responseTime")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                  {t("social")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => {
                    const Icon =
                      socialIcons[social.name] || ExternalLink;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div variants={item} className="md:col-span-3">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium block"
                    >
                      {t("form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={t("form.namePlaceholder")}
                      required
                      minLength={2}
                      disabled={isSubmitting}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium block"
                    >
                      {t("form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={t("form.emailPlaceholder")}
                      required
                      disabled={isSubmitting}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium block"
                  >
                    {t("form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t("form.messagePlaceholder")}
                    required
                    minLength={10}
                    rows={5}
                    disabled={isSubmitting}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="group w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        {t("form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        {t("form.submit")}
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {t("success")}
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-destructive flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {t("error")}
                    </motion.p>
                  )}
                  {submitStatus === "rate-limit" && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-destructive flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {t("rateLimit")}
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
