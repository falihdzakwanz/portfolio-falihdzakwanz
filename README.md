# Portfolio Website - Falih Dzakwan Zuhdi

Modern, bilingual portfolio website showcasing projects, skills, and professional experience. Built with Next.js 14, TypeScript, Tailwind CSS, featuring smooth animations, dark mode, and functional contact form.

## 🌟 Features

- **Bilingual Support** (Bahasa Indonesia & English) - Default: Indonesian, cookie-persisted preference
- **Modern UI/UX** - Responsive, dark mode, smooth scroll, Framer Motion animations, 3D tilt effects
- **Hero Section** - Animated gradient background, mouse-following spotlight, text reveal animations
- **Projects Showcase** - 6 projects with tech badges, live demo/GitHub links, featured highlighting
- **Contact Form** - Resend API, Zod validation, IP rate limiting (3/hour), bilingual email templates
- **SEO Optimized** - Metadata, sitemap, robots.txt, JSON-LD, OpenGraph, hreflang tags
- **Analytics** - Vercel Analytics with custom events (CV downloads, project clicks, form submissions)
- **Performance** - Image optimization, font optimization, lazy loading, GPU-accelerated animations
- **Accessibility** - Semantic HTML5, ARIA labels, keyboard navigation, prefers-reduced-motion

## 🛠️ Tech Stack

**Core:** Next.js 16, TypeScript, React 19  
**Styling:** Tailwind CSS, shadcn/ui, Framer Motion  
**i18n:** next-intl, js-cookie  
**Forms:** React Hook Form, Zod  
**Email:** Resend  
**Analytics:** Vercel Analytics  
**Theme:** next-themes

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env.local`:

```env
RESEND_API_KEY=your_key      # Get from https://resend.com
CONTACT_EMAIL=falihdzakwan028@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Add Your Content

- Update projects in `src/data/projects.ts`
- Update skills in `src/data/skills.ts`
- Add CV files: `public/resume-id.pdf` and `public/resume-en.pdf`
- Add OG image: `public/og-image.png` (1200x630px)

### 4. Development

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm start          # Start production server
```

Visit [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment to Vercel

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

## 📁 Project Structure

```
src/
├── app/[locale]/          # Internationalized routes
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Hero, About, Projects, Skills, Contact
│   └── ui/                # shadcn/ui components
├── data/                  # projects.ts, skills.ts, social.ts
├── lib/                   # utils, analytics, email templates
└── types/                 # TypeScript interfaces
```

## 📝 Translation System

Edit `messages/id.json` (Indonesian) and `messages/en.json` (English):

```json
{
  "nav": { "about": "...", "projects": "..." },
  "hero": { "greeting": "...", "title": "..." },
  "contact": { "form": { "name": "...", "email": "..." } }
}
```

**Note:** Keep tech terms (Next.js, TypeScript, React) in English in both files.

## 📊 Analytics Events

- **cv_download** - CV download tracking
- **project_click** - Project link clicks
- **form_submit** - Contact form submissions

View in Vercel Dashboard after deployment.

## 🎨 Customization

### Add Your Profile Photo

1. Replace `public/profile.jpg` with your actual photo
2. Recommended size: 512x512px or larger (square format)
3. Formats supported: .jpg, .png, .webp
4. The photo will be displayed with rounded corners and a subtle ring effect

### Update Tech Stack

Edit `src/data/tech-stack.ts` to add/remove technologies:

```typescript
export const techStack: TechStack[] = [
  {
    name: "Next.js",
    color: "#000000", // Brand color
    icon: "nextdotjs", // Simple Icons slug
  },
  // Add more...
];
```

Find icon slugs at: [simpleicons.org](https://simpleicons.org)

### Colors

Edit `src/app/globals.css` CSS variables

### Animations

Edit `src/lib/constants.ts`:

```typescript
export const ANIMATION_CONFIG = {
  duration: 0.5,
  staggerDelay: 0.1,
  threshold: 0.2,
};
```

## 🐛 Troubleshooting

**Email not sending?**

- Verify `RESEND_API_KEY` in `.env.local`
- Check Resend dashboard for logs

**Dark mode not working?**

- Clear browser cookies/localStorage

**Build errors?**

- Ensure `next.config.ts` includes next-intl plugin

## 👤 Author

**Falih Dzakwan Zuhdi**  
GitHub: [@falihdzakwanz](https://github.com/falihdzakwanz)  
Email: falihdzakwan028@gmail.com

---
