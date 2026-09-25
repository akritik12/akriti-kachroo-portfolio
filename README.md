# Akriti Kachroo — Portfolio

A premium, minimal portfolio built with Next.js 15 (App Router), React 19, TypeScript,
Tailwind CSS, and Framer Motion.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## 3. Replace placeholders

- **Resume**: drop your PDF at `public/resume.pdf` (the Hero's "Download Resume" button
  already links to `/resume.pdf`).
- **Profile photo**: add an image to `public/profile.jpg`, then in
  `components/Hero.tsx` swap the placeholder `<User />` icon block for:
  ```tsx
  import Image from "next/image";
  // ...
  <Image src="/profile.jpg" alt="Akriti Kachroo" fill className="object-cover" />
  ```
- **Favicon**: add `public/favicon.ico`.
- **Contact details, project links, socials**: edit `lib/data.ts` — every section pulls
  its content from this single file.
- **Contact form**: `components/ContactForm.tsx` currently simulates a submission.
  Wire it to a real endpoint (an API route, Formspree, Resend, etc.) inside `handleSubmit`.

## 4. Build for production

```bash
npm run build
npm start
```

## 5. Deploy to Vercel

**Option A — CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts; Vercel auto-detects Next.js.

**Option B — Git**
1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Keep the default build settings (Framework: Next.js) and click Deploy.

Every push to your main branch will redeploy automatically.

## Project structure

```
app/            Routes, layout, global styles
components/     Navbar, Hero, About, Timeline, Experience, Projects,
                ProjectCard, Skills, SkillBadge, Certifications,
                Contact, ContactForm, Footer, SectionTitle
hooks/          useTheme (dark mode), useActiveSection (nav highlighting)
lib/data.ts     All site content (profile, education, experience, projects, skills…)
public/         Static assets — add resume.pdf, favicon.ico, profile.jpg here
```

## Notes

- Dark mode is a manual toggle in the navbar, persisted to `localStorage`, defaulting
  to the visitor's OS preference.
- Section links in the navbar highlight automatically as you scroll (`IntersectionObserver`).
- Motion respects `prefers-reduced-motion` globally (see `app/globals.css`).
