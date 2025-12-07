"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">😔</h1>
        <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
        <p className="text-muted-foreground mb-8">{t("description")}</p>
        <Button onClick={reset} size="lg">
          {t("retry")}
        </Button>
      </div>
    </div>
  );
}
