import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { generatePersonSchema } from "@/lib/structured-data";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    id: "Falih Dzakwan Zuhdi - Fullstack Developer",
    en: "Falih Dzakwan Zuhdi - Fullstack Developer",
  };

  const descriptions = {
    id: "Portfolio website Falih Dzakwan Zuhdi, Fullstack Developer dari Institut Teknologi Sumatera yang berspesialisasi dalam Next.js, React, TypeScript, dan teknologi web modern.",
    en: "Portfolio website of Falih Dzakwan Zuhdi, a passionate Fullstack Developer from Institut Teknologi Sumatera specializing in Next.js, React, TypeScript, and modern web technologies.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: [
      "Fullstack Developer",
      "Web Developer",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Portfolio",
    ],
    authors: [{ name: "Falih Dzakwan Zuhdi" }],
    creator: "Falih Dzakwan Zuhdi",
    openGraph: {
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      title: titles[locale as keyof typeof titles] || titles.en,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.en,
      siteName: "Falih Dzakwan Zuhdi Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.en,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.en,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const schema = generatePersonSchema(locale as "id" | "en");

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "hsl(var(--background))",
                  color: "hsl(var(--foreground))",
                  border: "1px solid hsl(var(--border))",
                },
              }}
            />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
