"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("notFound");
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-9xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/50"
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-bold mb-4 mt-4">{t("title")}</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {t("description")}
        </p>
        <Button onClick={() => router.push("/")} size="lg">
          <Home className="mr-2 h-4 w-4" />
          {t("backHome")}
        </Button>
      </motion.div>
    </div>
  );
}
