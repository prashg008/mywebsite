# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # TypeScript compile + Vite production build → dist/
npm run lint      # ESLint (max-warnings 0, strict)
npm run preview   # Preview production build locally
npm run deploy    # Build and deploy to GitHub Pages via gh-pages
```

No tests are configured in this project.

## Architecture

Single-page personal website (prashanthgowda.com) deployed to GitHub Pages.

**Entry point:** `src/main.tsx` → `src/App.tsx`

`App.tsx` composes the page as a vertical stack of full-section components in order:
1. `Canvas` — animated particle background (tsparticles, rendered behind all content)
2. `NavigationFuturistic` — sticky nav
3. `HeroFuturistic` — landing hero with type animation
4. `AboutFuturistic` — about section
5. `SkillsFuturistic` — skills grid
6. `ContactFuturistic` — contact form/links
7. `FooterFuturistic` — footer

All section components live in `src/components/` and follow the `*Futuristic` naming convention.

**Styling:** Tailwind CSS v4 + Bootstrap 5 / React-Bootstrap. Global styles in `src/index.css`. `tailwind.config.js` and `postcss.config.js` configure the pipeline.

**Key libraries:**
- `framer-motion` — scroll/entrance animations
- `react-intersection-observer` — trigger animations on scroll
- `react-type-animation` — typewriter effect in hero
- `@tsparticles/react` + `@tsparticles/slim` — particle canvas background
- `react-icons` — icon set

**Build:** Vite + `@vitejs/plugin-react`. Config in `vite.config.ts`. TypeScript config split between `tsconfig.json` (app) and `tsconfig.node.json` (Vite config).

**Deployment:** `dist/` is built and pushed to the `gh-pages` branch. `CNAME` contains the custom domain.
