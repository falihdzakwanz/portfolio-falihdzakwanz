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
  CardDescription,
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
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function ProjectDetail({ project }: { project: (typeof projects)[0] }) {
  const locale = useLocale();
  const t = useTranslations("projects");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length
    );
  };

  if (!project.screenshots || project.screenshots.length === 0) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
      {/* Left Column: Gallery */}
      <div className="lg:w-3/5 space-y-6">
        <div className="relative group w-full overflow-hidden rounded-3xl bg-muted h-[300px] md:h-[500px] shadow-2xl border border-primary/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title[locale as "id" | "en"]} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </AnimatePresence>

          {project.screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-black/60 active:scale-95"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-black/60 active:scale-95"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {project.screenshots.length > 1 && (
          <div className="flex justify-center gap-2">
            {project.screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentImageIndex ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Content */}
      <div className="lg:w-2/5 space-y-8">
        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary/60 flex items-center gap-2 mb-3">
              <Layout className="size-4" />
              {t("role")}
            </h3>
            <p className="text-lg font-medium leading-relaxed">{project.role[locale as "id" | "en"]}</p>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary/60 flex items-center gap-2 mb-3">
              <Target className="size-4" />
              {t("impact")}
            </h3>
            <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1 font-serif">
              "{project.impact[locale as "id" | "en"]}"
            </p>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary/60 flex items-center gap-2 mb-3">
              <Wrench className="size-4" />
              {t("techRationale")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.techRationale[locale as "id" | "en"]}</p>
          </section>

          <section className="bg-muted/30 p-5 rounded-xl border border-primary/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary/60 flex items-center gap-2 mb-4">
              <Lightbulb className="size-4" />
              {t("challenge")} & {t("solution")}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-foreground/40 mb-1 tracking-tighter uppercase">{t("challenge")}</p>
                <p className="text-sm italic opacity-80 leading-snug">
                  "{project.challenge[locale as "id" | "en"]}"
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/40 mb-1 tracking-tighter uppercase">{t("solution")}</p>
                <p className="text-sm leading-snug">
                  {project.solution[locale as "id" | "en"]}
                </p>
              </div>
            </div>
          </section>
        </div>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-4">{t("features")}</h3>
          <ul className="grid grid-cols-1 gap-2.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group">
                <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 transition-transform group-hover:scale-125" />
                <span>{feature[locale as "id" | "en"]}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="pt-8 border-t flex flex-wrap gap-4">
          {project.liveUrl && (
            <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px]">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("viewLive")}
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild className="rounded-full px-6 transition-all hover:translate-y-[-2px]">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    analytics.trackProjectClick(project.id, locale);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          variants={item}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer group"
          onClick={handleClick}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="h-full"
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30">
              {/* Image Container with Hover Overlay */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title[locale as "id" | "en"]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay for Impact & Role */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-primary/90 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center text-primary-foreground space-y-4 z-10"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                          {t("role")}
                        </p>
                        <p className="text-sm font-medium leading-tight">
                          {project.role[locale as "id" | "en"]}
                        </p>
                      </motion.div>

                      <div className="w-12 h-px bg-primary-foreground/30" />

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                          {t("impact")}
                        </p>
                        <p className="line-clamp-3 text-sm italic font-serif leading-relaxed">
                          "{project.impact[locale as "id" | "en"]}"
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-4 right-4"
                      >
                        <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                          {t("viewDetails")}
                        </Badge>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {project.featured && (
                  <Badge className="absolute top-2 right-2 bg-primary z-20">
                    {t("featured")}
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle>{project.title[locale as "id" | "en"]}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description[locale as "id" | "en"]}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-[10px]">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="gap-2 pt-0">
                <div className="flex w-full items-center justify-between text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>{t("viewDetails")}</span>
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-7xl h-[90vh] md:h-auto md:max-h-[90vh] overflow-y-auto p-0 border-none bg-background/95 backdrop-blur-2xl shadow-2xl">
        <div className="p-6 md:p-14 lg:p-20 relative">
          <DialogHeader className="mb-12 text-left sm:text-left">
            <div className="flex items-center gap-3 text-primary/60 opacity-80 uppercase tracking-[0.2em] font-bold text-[10px] mb-3">
              <span className="bg-primary/10 px-2 py-0.5 rounded">{project.category}</span>
              <span className="text-primary/20">•</span>
              <span>{new Date(project.date).getFullYear()}</span>
            </div>
            <DialogTitle className="text-4xl md:text-6xl font-black tracking-tighter">
              {project.title[locale as "id" | "en"]}
            </DialogTitle>
            <DialogDescription className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl leading-relaxed">
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

  // Sort projects: featured first, then by date
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section id="projects" className="py-28 md:py-44 bg-muted/50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
