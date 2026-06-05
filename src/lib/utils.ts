import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  dateString: string,
  locale: "id" | "en"
): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
    month: "short",
    year: "numeric",
  });
}

export function getDuration(
  startDate: string,
  endDate: string | null,
  locale: "id" | "en",
  t: (key: string) => string
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${t(years > 1 ? "years" : "year")}`);
  }
  if (months > 0) {
    parts.push(`${months} ${t(months > 1 ? "months" : "month")}`);
  }

  if (parts.length === 0) {
    parts.push(`< 1 ${t("month")}`);
  }

  const startFormatted = formatDate(startDate, locale);
  const endFormatted = endDate
    ? formatDate(endDate, locale)
    : t("present");

  return `${startFormatted} - ${endFormatted} · ${parts.join(" ")}`;
}
