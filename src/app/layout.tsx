import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Falih Dzakwan Zuhdi - Fullstack Developer",
  description:
    "Portfolio website of Falih Dzakwan Zuhdi, a passionate Fullstack Developer from Institut Teknologi Sumatera specializing in Next.js, React, TypeScript, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
