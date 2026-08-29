# Portfolio — Setup

A dark, editorial, bento-grid portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Run it

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Where to edit things

- **All copy, links, and project data** live in one place: `lib/data.ts`. Change your name, bio, tech stack, and projects there — no need to touch component code.
- **Portrait image**: drop a photo at `public/portrait.jpg` (the `Hero` component already expects that path). Any ~4:5 aspect image works well; it's rendered in grayscale with a subtle contrast boost to match the editorial tone.
- **Colors**: the 60/30/10 palette is defined once in `tailwind.config.ts` (`base`, `surface`, `accent`, etc.) — change the hex values there and it propagates everywhere.
- **Fonts**: Inter and JetBrains Mono are loaded via `next/font/google` in `app/layout.tsx` — no extra `<link>` tags or FOUT.

## Structure

```
app/
  layout.tsx       — fonts, metadata, grain overlay
  page.tsx          — assembles all sections
  globals.css       — resets, focus states, scrollbar, reduced-motion
components/
  Hero.tsx           — split-screen bio card + massive headline
  Manifesto.tsx       — short high-impact statement
  TechStackMatrix.tsx — C / Java / HTML / PHP tiles
  ProjectShowcase.tsx  — asymmetrical bento project grid
  Footer.tsx            — socials + click-to-copy email
  CopyEmail.tsx          — client component powering the copy interaction
lib/
  data.ts             — all editable content
```

## Notes on the build

- **Motion respects `prefers-reduced-motion`** throughout — every Framer Motion animation checks `useReducedMotion()` and falls back to a static state, and the global stylesheet also collapses CSS animation/transition durations for users with that preference set.
- **Numbered section markers** (`[01]`–`[05]`) are used because the page sections and the project list are genuinely sequential — not decorative.
- **Bento asymmetry** in the project grid comes from a `size: "lg" | "md" | "sm"` field per project in `lib/data.ts`, mapped to grid spans — add a project and its size decides how much room it takes.
- Everything is responsive down to small mobile widths: the hero collapses to a single column, the bento grid stacks to one column, and the tech tiles go from 4 columns to 2.
