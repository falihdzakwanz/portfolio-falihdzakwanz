"use client";

import { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Github,
  ChevronRight,
  ChevronLeft,
  Layout,
  Target,
  Wrench,
  Lightbulb,
} from "lucide-react";
import { projects } from "@/data/projects";
import { analytics } from "@/lib/analytics";
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

function ProjectDetail({ project }: { project: (typeof projects)[0] }) {
  const locale = useLocale();
  const t = useTranslations("projects");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () =>
    setCurrentImageIndex((p) => (p + 1) % project.screenshots.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (p) => (p - 1 + project.screenshots.length) % project.screenshots.length
    );

  if (!project.screenshots || project.screenshots.length === 0) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Left: Gallery */}
      <div className="lg:w-3/5 space-y-4">
        <div className="relative group overflow-hidden rounded-xl bg-muted h-[300px] md:h-[450px] border border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title[locale as "id" | "en"]} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </AnimatePresence>

          {project.screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-background/70 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity border border-border flex items-center justify-center"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-background/70 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity border border-border flex items-center justify-center"
              >
                <ChevronRight className="size-4" />
              </button>
            </>
          )}
        </div>

        {project.screenshots.length > 1 && (
          <div className="flex justify-center gap-2">
            {project.screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentImageIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right: Content */}
      <div className="lg:w-2/5 space-y-6">
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 flex items-center gap-2 mb-2">
            <Layout className="size-3.5" />
            {t("role")}
          </h3>
          <p className="text-base font-medium">{project.role[locale as "id" | "en"]}</p>
        </section>

        <section>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 flex items-center gap-2 mb-2">
            <Target className="size-3.5" />
            {t("impact")}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">
            &ldquo;{project.impact[locale as "id" | "en"]}&rdquo;
          </p>
        </section>

        <section>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 flex items-center gap-2 mb-2">
            <Wrench className="size-3.5" />
            {t("techRationale")}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.techRationale[locale as "id" | "en"]}
          </p>
        </section>

        <section className="bg-muted/40 p-4 rounded-lg border border-border/50">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 flex items-center gap-2 mb-3">
            <Lightbulb className="size-3.5" />
            {t("challenge")}
          </h3>
          <p className="text-sm italic text-muted-foreground mb-3">
            &ldquo;{project.challenge[locale as "id" | "en"]}&rdquo;
          </p>
          <p className="text-sm text-foreground/80">
            {project.solution[locale as "id" | "en"]}
          </p>
        </section>

        <section>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
            {t("features")}
          </h3>
          <ul className="grid grid-cols-1 gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="size-1 rounded-full bg-primary mt-2 shrink-0" />
                <span>{feature[locale as "id" | "en"]}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="pt-6 border-t border-border flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 size-4" />
                {t("viewLive")}
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-4" />
                {t("viewCode")}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const locale = useLocale();
  const t = useTranslations("projects");
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    analytics.trackProjectClick(project.id, locale);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          variants={item}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer group"
          onClick={handleClick}
        >
          <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 border-border hover:border-primary/40 hover:shadow-sm">
            {/* Image */}
            <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title[locale as "id" | "en"]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Featured badge */}
              {project.featured && (
                <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground border-none text-[10px]">
                  {t("featured")}
                </Badge>
              )}
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">
                {project.title[locale as "id" | "en"]}
              </CardTitle>
              <p className="text-sm text-muted-foreground leading-snug line-clamp-2">
                {project.description[locale as "id" | "en"]}
              </p>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-[10px] font-normal border-border/50"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] font-normal border-border/50"
                  >
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <div className="flex w-full items-center justify-between text-xs text-muted-foreground group-hover:text-primary transition-colors">
                <span>{t("viewDetails")}</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-6xl max-h-[85vh] overflow-y-auto p-0 border-border">
        <div className="p-6 md:p-10">
          <DialogHeader className="mb-8 text-left sm:text-left">
            <div className="flex items-center gap-3 text-xs text-muted-foreground/60 uppercase tracking-widest mb-2">
              <span className="font-semibold text-primary/80">{project.category}</span>
              <span className="text-border">/</span>
              <span>{new Date(project.date).getFullYear()}</span>
            </div>
            <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tight">
              {project.title[locale as "id" | "en"]}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground mt-3 leading-relaxed max-w-2xl">
              {project.description[locale as "id" | "en"]}
            </DialogDescription>
          </DialogHeader>

          <ProjectDetail project={project} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const t = useTranslations("projects");

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {/* Section header — left-aligned */}
          <motion.div variants={item} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("title")}
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-primary/40" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
