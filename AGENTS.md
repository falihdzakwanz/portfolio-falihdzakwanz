# AGENTS.md - Development Guidelines for This Repository

## Project Overview

Portfolio website milik **Falih Dzakwan Zuhdi**, seorang Fullstack Developer dari Institut Teknologi Sumatera. Dibangun dengan Next.js 16, React 19, TypeScript, dan Tailwind CSS v4. Mendukung dua bahasa (Indonesia & English) via `next-intl`, dark/light mode via `next-themes`, dan email via Resend API.

**Situs ini adalah single-page portfolio** dengan bagian: Hero → About → Experience → Projects → Skills → Contact, semua tersusun dalam satu route `[locale]/page.tsx`.

---

## Build & Development Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build produksi
npm run start        # Jalankan versi produksi
npm run lint         # ESLint check
```

> Tidak ada test framework. Verifikasi manual dengan `npm run dev`.

---

## Arsitektur & Struktur File

```
src/
├── app/
│   ├── [locale]/               # Semua halaman ada di sini
│   │   ├── layout.tsx          # Root layout: font, theme, i18n, analytics, toast
│   │   ├── page.tsx            # Satu-satunya halaman (SPA), merangkai semua sections
│   │   ├── error.tsx           # Error boundary
│   │   ├── loading.tsx         # Loading state
│   │   └── not-found.tsx       # 404 page
│   ├── api/
│   │   └── send/route.ts       # POST /api/send — kirim email via Resend (rate limit 3/jam/IP)
│   ├── globals.css             # CSS global: Tailwind v4, theme tokens (oklch), custom animations
│   ├── layout.tsx              # Root layout (hanya redirect ke [locale])
│   ├── robots.ts               # SEO robots config
│   └── sitemap.ts              # SEO sitemap — generate per locale + route
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky header: nav links, theme toggle, language switcher, mobile sheet
│   │   └── Footer.tsx          # Simple footer
│   ├── sections/               # Komponen halaman utama (semua "use client")
│   │   ├── Hero.tsx            # Full-screen hero: mouse spotlight, animated CTA, scroll indicator
│   │   ├── About.tsx           # Profil & foto
│   │   ├── Experience.tsx      # Timeline zigzag pengalaman kerja
│   │   ├── Projects.tsx        # Grid proyek: 3D card tilt, collapsible image di mobile
│   │   ├── Skills.tsx          # Tech badges dengan Simple Icons + glow hover effect
│   │   └── Contact.tsx         # Form kontak (react-hook-form + zod + Resend)
│   └── ui/                     # shadcn-style components (Radix UI + CVA)
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       ├── separator.tsx
│       ├── sheet.tsx           # Dipakai untuk mobile menu
│       ├── skeleton.tsx
│       └── textarea.tsx
│
├── data/                       # Static data (BUKAN dari API/DB)
│   ├── projects.ts             # Array Project[] — tambah proyek di sini
│   ├── experience.ts           # Array Experience[] — tambah pengalaman di sini
│   ├── tech-stack.ts           # Array TechStack[] — icon slug dari simple-icons
│   └── social.ts               # Array SocialLink[] — icon dari lucide-react
│
├── lib/
│   ├── utils.ts                # `cn()` — clsx + tailwind-merge
│   ├── constants.ts            # SITE_CONFIG, ANIMATION_CONFIG, COLORS
│   ├── analytics.ts            # Vercel Analytics: trackCVDownload, trackProjectClick, trackFormSubmit
│   ├── email-template.ts       # generateEmailTemplate() + subject() — HTML email bilingual
│   └── structured-data.ts      # generatePersonSchema() — JSON-LD untuk SEO
│
├── types/
│   └── index.ts                # Interface: Project, Experience, SkillCategory, SocialLink
│
├── i18n.ts                     # next-intl config — locales: ["id", "en"], defaultLocale: "en"
└── middleware.ts               # next-intl middleware — localePrefix: "always"

messages/
├── en.json                     # Terjemahan Inggris
└── id.json                     # Terjemahan Indonesia

public/
├── profile.jpg                 # Foto profil
├── resume-en.pdf               # CV versi Inggris
├── resume-id.pdf               # CV versi Indonesia
├── companies/                  # Logo perusahaan (PNG)
└── projects/                   # Screenshot proyek (WebP)
```

---

## Konfigurasi & Dependencies Utama

| Dependency | Kegunaan |
|---|---|
| `next` 16 | Framework |
| `react` 19 | UI |
| `next-intl` ^4 | Internationalization (id/en) |
| `next-themes` | Dark/light mode via `attribute="class"` |
| `framer-motion` | Animasi (motion, AnimatePresence, spring) |
| `@hookform/resolvers` + `react-hook-form` | Form management |
| `zod` ^4 | Schema validasi (contact form & API route) |
| `resend` | Email API (contact form) |
| `simple-icons` | SVG icon tech stack di Skills section |
| `lucide-react` | Semua icon UI (nav, buttons, dll) |
| `@vercel/analytics` | Analytics tracking |
| `react-hot-toast` | Toast notifikasi |
| `js-cookie` | Menyimpan preferensi locale |
| `tailwindcss` ^4 + `tw-animate-css` | Styling |
| `class-variance-authority` + `tailwind-merge` + `clsx` | Variant & className management |
| Radix UI primitives | Accessibility untuk Sheet, Dialog, NavigationMenu, dll |

### Environment Variables

Salin `.env.local.example` ke `.env.local`. Variabel yang diperlukan:

```env
RESEND_API_KEY=        # API key dari resend.com
CONTACT_EMAIL=         # Email penerima pesan kontak (default: falihdzakwan028@gmail.com)
NEXT_PUBLIC_SITE_URL=  # URL produksi (default: http://localhost:3000)
```

---

## Code Style Guidelines

### General Principles
- TypeScript strict mode aktif
- Functional components dengan interface props eksplisit
- Seluruh section component menggunakan `"use client"` karena pakai hooks/framer-motion
- Server component hanya di `layout.tsx` dan route handlers

### Import Order
```typescript
// 1. React/Next core
import { useState, useEffect } from "react"
import Image from "next/image"
// 2. Third-party
import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
// 3. Internal — selalu gunakan alias @/
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
```

### Naming Conventions
- **File component**: PascalCase (`Hero.tsx`, `ProjectCard.tsx`)
- **File utility**: kebab-case (`email-template.ts`, `structured-data.ts`)
- **Komponen**: PascalCase
- **Fungsi/variabel**: camelCase
- **Konstanta export**: PascalCase (`SITE_CONFIG`, `ANIMATION_CONFIG`)

### TypeScript
```typescript
// Selalu define interface untuk props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

// Gunakan union type literal, bukan plain string
type Locale = "id" | "en"
type ExperienceType = "fulltime" | "parttime" | "contract" | "freelance" | "internship"
type ProjectCategory = "web" | "mobile" | "fullstack" | "game" | "other"
```

### UI Components (shadcn pattern)
```typescript
// Gunakan cva untuk variants, Radix untuk accessibility, data-slot untuk identification
const buttonVariants = cva("base-classes", {
  variants: { variant: { default: "...", outline: "..." } },
  defaultVariants: { variant: "default" }
})

function Button({ className, variant, ...props }: ButtonProps) {
  return <Comp className={cn(buttonVariants({ variant, className }))} {...props} />
}
```

---

## Pola & Konvensi Penting

### 1. Internationalization (i18n)

Semua teks UI **wajib** melalui `next-intl`. Jangan hardcode string UI dalam bahasa apapun.

```typescript
// Di client component
const t = useTranslations("sectionName")
const locale = useLocale() as "id" | "en"

// Untuk data bilingual (di data/*.ts dan types/)
// Gunakan objek { id: string; en: string }
exp.company[locale]       // ✅
exp.company["id"]         // ❌ hardcode
```

Tambahkan key baru di **kedua** file `messages/en.json` dan `messages/id.json` secara bersamaan.

**Namespace i18n yang sudah ada:**
- `nav` — navigasi header
- `hero` — hero section
- `about` — about section
- `projects` — projects section (featured, viewLive, viewCode, allProjects)
- `skills` — skills section
- `experience` — experience section (current, present, month/months, year/years, and)
- `contact` — contact form & messages
- `footer` — footer
- `errors` — validasi form
- `notFound` — halaman 404
- `error` — error boundary

### 2. Menambah Data Konten

**Tambah Proyek Baru** (`src/data/projects.ts`):
```typescript
{
  id: "unique-kebab-case-id",
  title: { id: "Judul Indonesia", en: "English Title" },
  description: { id: "...", en: "..." },
  longDescription: { id: "...", en: "..." },  // Untuk detail/modal
  image: "/projects/nama-file.webp",           // Letakkan di public/projects/
  technologies: ["Next.js", "TypeScript"],
  liveUrl: "https://...",                      // Optional
  githubUrl: "https://github.com/...",         // Optional
  featured: false,                             // true = tampil di atas
  category: "web" | "mobile" | "fullstack" | "game" | "other",
  date: "YYYY-MM-DD",                          // Untuk sorting
}
```

**Tambah Pengalaman Baru** (`src/data/experience.ts`):
```typescript
{
  id: "unique-id",
  company: { id: "...", en: "..." },
  role: { id: "...", en: "..." },
  description: { id: "...", en: "..." },
  technologies: ["Tech1", "Tech2"],
  logo: "/companies/logo.png",                 // Optional, letakkan di public/companies/
  startDate: "YYYY-MM",
  endDate: "YYYY-MM",                          // undefined = pekerjaan saat ini
  location: { id: "...", en: "..." },
  type: "fulltime" | "parttime" | "contract" | "freelance" | "internship",
  locationType: "onsite" | "remote" | "hybrid",
}
```

**Tambah Tech Stack** (`src/data/tech-stack.ts`):
```typescript
{ name: "Nama Tech", color: "#HEXCODE", icon: "simple-icons-slug" }
// icon slug: cek di https://simpleicons.org/ — gunakan slug tanpa "si" prefix
// Warna hitam (#000000) otomatis jadi putih di dark mode (lihat Skills.tsx)
```

### 3. Animasi (Framer Motion)

Pola standar yang digunakan di semua sections:
```typescript
// Definisikan di luar komponen
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

// Gunakan whileInView + once:true untuk scroll-triggered animations
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={container}
>
  <motion.h2 variants={item}>...</motion.h2>
</motion.div>
```

Referensi `ANIMATION_CONFIG` di `src/lib/constants.ts` untuk nilai default:
- `duration: 0.5`, `staggerDelay: 0.1`, `threshold: 0.2`, `ease: "easeOut"`

### 4. Theming & Styling

- Warna menggunakan oklch color space di CSS variables (lihat `globals.css`)
- **Selalu** gunakan semantic tokens, **jangan** hardcode warna:
  ```tsx
  // ✅
  className="bg-background text-foreground border-border"
  style={{ color: "hsl(var(--primary))" }}
  
  // ❌
  className="bg-white text-black"
  ```
- Dark mode: toggle class `.dark` pada `<html>` (via `next-themes`)
- Custom animation `animate-gradient-shift` tersedia (dipakai di Hero background)
- Font: Inter dari Google Fonts, via CSS variable `--font-inter`

### 5. Analytics Tracking

Gunakan `src/lib/analytics.ts` untuk track event penting:
```typescript
import { analytics } from "@/lib/analytics"

analytics.trackCVDownload(locale)          // Saat CV didownload
analytics.trackProjectClick(id, locale)   // Saat link proyek diklik
analytics.trackFormSubmit(locale)         // Saat form kontak berhasil dikirim
```

### 6. SEO

- Metadata dipanggil di `[locale]/layout.tsx` via `generateMetadata()`
- JSON-LD Schema.org (Person) dibuat via `generatePersonSchema()` di `lib/structured-data.ts`
- Sitemap dinamis di `app/sitemap.ts` — otomatis include semua locale
- Robots config di `app/robots.ts`
- Setiap section diberikan `id` attribute untuk anchor links dan navigasi

---

## Cara Menambah Section Baru

1. Buat `src/components/sections/NamaBaru.tsx`
2. Tambahkan section ID unik: `<section id="nama-baru">`
3. Tambahkan i18n key ke `messages/en.json` dan `messages/id.json`
4. Import dan tambah ke `src/app/[locale]/page.tsx`
5. Tambah nav item di `Header.tsx` array `navItems` (beserta icon dari lucide-react)
6. Tambah route ke sitemap di `app/sitemap.ts` jika perlu

## Cara Menambah UI Component Baru

1. Buat `src/components/ui/nama-komponen.tsx`
2. Gunakan pola CVA + Radix UI + `data-slot` attr
3. Export komponen dan variantsnya

---

## Catatan Teknis & Gotchas

- **Hydration warning**: `next-themes` butuh `suppressHydrationWarning` di `<html>`. Komponen yang bergantung pada tema (Header, Skills) pakai `mounted` state dengan `setTimeout(() => setMounted(true), 0)`.
- **Locale persistence**: Locale dipersist via cookie `NEXT_LOCALE` (js-cookie), bukan hanya URL.
- **Rate limiting**: API `/api/send` membatasi 3 request/jam per IP (in-memory Map, bukan Redis — akan reset jika server restart).
- **Simple Icons**: Icon diakses via `si` + PascalCase slug dari modul `simple-icons`, bukan via CDN.
- **Image**: Semua project image menggunakan format `.webp` di `public/projects/`. Company logo menggunakan `.png` di `public/companies/`.
- **Zod v4**: Proyek ini menggunakan `zod` ^4 — syntax `z.string().email()` dll tetap sama, tapi beberapa internal API berubah.
- **Tailwind v4**: Gunakan `@import "tailwindcss"` bukan `@tailwind base/components/utilities`. Konfigurasi via `@theme inline {}` bukan `tailwind.config.js`.
- **next-intl v4**: Konfigurasi via `getRequestConfig` di `src/i18n.ts`, di-plug ke Next.js via `createNextIntlPlugin` di `next.config.ts`.
