# Lesia's Educational Services — Premium Next.js Website

A premium Next.js admissions website for Lesia's Educational Services, designed to feel cinematic, trustworthy, modern, and high-converting.

## What changed

The original static `index.html` landing page has been revamped into a Next.js app with:

- Premium App Router structure
- TypeScript support
- Responsive cinematic hero section
- Interactive programme pathway quiz
- Level 4 and Level 5 ECD programme showcases
- Programme comparison section
- Student support and career outcome sections
- Admissions flow
- FAQ section
- WhatsApp, call, and email conversion CTAs
- Premium typography using Next font optimisation
- Vercel-ready project setup

## Tech stack

- Next.js
- React
- TypeScript
- CSS Modules-style global styling through `app/globals.css`
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
components/PathwayQuiz.tsx
package.json
```
