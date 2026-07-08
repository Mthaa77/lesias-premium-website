# Lesia's Educational Services — Ultra Premium Next.js Website

An ultra-premium Next.js admissions website for Lesia's Educational Services, designed to feel cinematic, trustworthy, modern, interactive, and high-converting.

## Latest premium upgrades

The site has been upgraded from a clean premium landing page into an elite admissions experience with:

- Ultra-premium interactive navbar with scroll progress, active-section states, and mobile menu
- Elite cinematic hero section with animated light fields, 3D tilt, floating proof cards, premium badge system, and student pathway console
- Premium typography upgrade using Playfair Display, Manrope, Sora, and Cormorant Garamond through Next font optimisation
- Dedicated premium typography effects file with heading shadows, luxury section title styling, and improved text rhythm
- Multi-step interactive ECD pathway quiz
- Interactive Level 4 vs Level 5 programme command centre
- Premium admissions flow component with selectable enrolment steps
- Editorial brand repositioning section
- Trust badge architecture
- Programme intelligence, conversion psychology, and student-success messaging
- Career outcomes section for employment and entrepreneurship pathways
- Campus cards for Soshanguve and Hammanskraal
- WhatsApp, call, and email conversion CTAs
- Public images folder for website photo uploads
- Fully responsive mobile-first styling
- Vercel-ready project setup

## Image uploads

Upload website images into:

```text
public/images/
```

Recommended image names:

```text
public/images/logo.png
public/images/hero-students.jpg
public/images/graduation-01.jpg
public/images/classroom-01.jpg
public/images/campus-soshanguve.jpg
public/images/campus-hammanskraal.jpg
public/images/founder-or-principal.jpg
```

Use images in Next.js like this:

```tsx
import Image from "next/image";

<Image
  src="/images/hero-students.jpg"
  alt="Lesia's Educational Services students"
  width={1200}
  height={800}
/>
```

## Tech stack

- Next.js
- React
- TypeScript
- App Router
- Global CSS through `app/globals.css`
- Premium typography CSS through `app/premium-typography.css`
- Public assets through `public/images/`
- No external UI library required

## Run locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy

Recommended deployment: Vercel.

1. Import this repository into Vercel.
2. Framework preset should be detected as Next.js.
3. Deploy.

## Main files

```text
app/layout.tsx
app/page.tsx
app/globals.css
app/premium-typography.css
components/EliteNavbar.tsx
components/EliteHero.tsx
components/PathwayQuiz.tsx
components/ProgrammeExplorer.tsx
components/AdmissionsFlow.tsx
public/images/README.md
package.json
```
