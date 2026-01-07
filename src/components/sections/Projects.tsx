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
import { ExternalLink, Github } from "lucide-react";
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

function ProjectCard({
  project,
  isImageOpen,
  onToggleImage,
}: {
  project: (typeof projects)[0];
  isImageOpen: boolean;
  onToggleImage: () => void;
}) {
  const locale = useLocale();
  const t = useTranslations("projects");
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

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
  };

  const handleClick = () => {
    analytics.trackProjectClick(project.id, locale);
  };

  return (
    <motion.div
      variants={item}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
          {/* Desktop: Always show image */}
          <div className="hidden md:block relative h-48 md:h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title[locale as "id" | "en"]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {project.featured && (
              <Badge className="absolute top-2 right-2 bg-primary">
                {t("featured")}
              </Badge>
            )}
          </div>

          {/* Mobile: Collapsible image */}
          <AnimatePresence>
            {isImageOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 192, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden relative overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title[locale as "id" | "en"]}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                {project.featured && (
                  <Badge className="absolute top-2 right-2 bg-primary">
                    {t("featured")}
                  </Badge>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <CardHeader
            className="md:cursor-default cursor-pointer md:hover:bg-transparent hover:bg-muted/50 transition-colors"
            onClick={onToggleImage}
          >
            <CardTitle className="flex items-center justify-between">
              {project.title[locale as "id" | "en"]}
              <span className="md:hidden text-xs text-muted-foreground">
                {isImageOpen ? "▲" : "▼"}
              </span>
            </CardTitle>
            <CardDescription>
              {project.description[locale as "id" | "en"]}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="gap-2">
            {project.liveUrl && (
              <Button size="sm" asChild onClick={handleClick}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("viewLive")}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild onClick={handleClick}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {t("viewCode")}
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const t = useTranslations("projects");
  const [openImageId, setOpenImageId] = useState<string | null>(null);

  // Sort projects: featured first, then by date
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const handleToggleImage = (projectId: string) => {
    setOpenImageId(openImageId === projectId ? null : projectId);
  };

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
              <ProjectCard
                key={project.id}
                project={project}
                isImageOpen={openImageId === project.id}
                onToggleImage={() => handleToggleImage(project.id)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
