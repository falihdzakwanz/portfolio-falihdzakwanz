"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  Globe,
  User,
  FolderGit2,
  Code2,
  Mail,
  Briefcase,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Cookies from "js-cookie";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set mounted to true after initial render
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const switchLocale = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 });
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    router.refresh();
  };

  const navItems = [
    { key: "about", id: "about", icon: User },
    { key: "experience", id: "experience", icon: Briefcase },
    { key: "projects", id: "projects", icon: FolderGit2 },
    { key: "skills", id: "skills", icon: Code2 },
    { key: "contact", id: "contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6 md:px-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold hover:opacity-80 transition-opacity cursor-pointer"
        >
          FDZ
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon className="h-4 w-4" />
                {t(
                  item.key as
                    | "about"
                    | "experience"
                    | "projects"
                    | "skills"
                    | "contact"
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => switchLocale(locale === "id" ? "en" : "id")}
            title={
              locale === "id"
                ? "Switch to English"
                : "Ganti ke Bahasa Indonesia"
            }
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Globe className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">Change language</span>
          </Button>

          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.div>
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-6">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.key}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors text-left"
                      whileHover={{ x: 8, scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                      {t(
                        item.key as
                          | "about"
                          | "experience"
                          | "projects"
                          | "skills"
                          | "contact"
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
