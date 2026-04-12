# Website Rebuild — Design Spec
**Date:** 2026-04-12
**Phase:** 1 of 2

---

## Overview

Full rebuild of prashanthgowda.com from a dark cyberpunk aesthetic to a warm, editorial design system inspired by `design.md` (Claude/Anthropic visual language). The site gains React Router, a light/dark theme toggle, and a stub `/explore` route ready for Phase 2 content.

Phase 2 (out of scope here) adds the Explore hub: Games, Dev Tools, Jokes, Just Vibes worlds.

---

## Design System

All visual decisions follow `design.md` exactly. Key tokens:

| Role | Light value | Dark value |
|------|-------------|------------|
| Page background | `#f5f4ed` Parchment | `#141413` Near Black |
| Alternate section | `#141413` Near Black | `#30302e` Dark Surface |
| Primary text | `#141413` | `#faf9f5` Ivory |
| Secondary text | `#5e5d59` Olive Gray | `#b0aea5` Warm Silver |
| Tertiary text | `#87867f` Stone Gray | `#87867f` Stone Gray |
| Brand CTA | `#c96442` Terracotta | `#c96442` Terracotta |
| Card surface | `#faf9f5` Ivory | `#30302e` Dark Surface |
| Border | `#e8e6dc` Border Warm | `#30302e` Border Dark |

**Typography:** Georgia serif for all headings (weight 500 equivalent), system-ui/Arial for UI/body. No custom font install needed for Phase 1.

**Shadows:** Ring-based (`0px 0px 0px 1px`) for interactive elements, whisper drop shadow (`rgba(0,0,0,0.05) 0px 4px 24px`) for elevated cards. No heavy drop shadows.

**Radius scale:** 8px standard cards/buttons, 12px primary CTA button and inputs, 20px pill badges.

**No particles.** `Canvas.tsx` is deleted.

---

## Architecture

### Routing (new)

Install `react-router-dom`. Two routes for Phase 1:

```
/          → HomePage (portfolio scroll)
/explore   → ExplorePage (stub — "coming soon" with world cards)
```

`App.tsx` becomes a router wrapper. A persistent `Nav` component renders on all routes.

### File structure

```
src/
  components/
    Nav.tsx           # Persistent nav: logo + links + Explore btn + ☀/🌙 toggle
    Hero.tsx
    About.tsx
    Skills.tsx
    Contact.tsx
    Footer.tsx
  pages/
    HomePage.tsx      # Composes Hero → About → Skills → Contact → Footer
    ExplorePage.tsx   # Stub hub: 4 world cards (Games, Tools, Jokes, Vibes) — "coming soon"
  context/
    ThemeContext.tsx   # Provides theme + toggle, persists to localStorage
  index.css           # All CSS custom properties + utility classes
  App.tsx             # Router setup
  main.tsx            # Unchanged
```

Delete: `Canvas.tsx`, all `*Futuristic.tsx` components.

### Theme system

`ThemeContext` provides `theme: 'light' | 'dark'` and `toggleTheme()`. Sets `data-theme="light|dark"` on `<html>`. All colours are CSS custom properties that change based on `[data-theme]`. No CSS-in-JS.

---

## Sections (Phase 1)

### Nav
- Sticky, full-width, `z-index: 100`
- Left: "Prashanth G" in Georgia serif (links to `/`)
- Centre/Right: About · Skills · Contact links (smooth scroll on homepage, navigate-then-scroll on other pages)
- Far right: `Explore ✦` button (terracotta on dark theme, near-black on light) → `/explore`
- Theme icon: ☀ (light mode) / 🌙 (dark mode), toggles on click
- Mobile: links collapse to hamburger; Explore button and theme toggle always visible

### Hero (light section in light mode, dark in dark mode — always the page's primary surface)
- Overline: "Full Stack Developer · Bangalore" — Stone Gray, uppercase, 10px
- H1: "Hi, I'm Prashanth G" — Georgia 4rem, `#141413` / `#faf9f5`; name in Terracotta
- Role line: typewriter animation cycling through roles (keep `react-type-animation`)
- Quirky descriptor: rotating pill — "✦ Currently obsessed with Go" (array of strings, random pick on load)
- Short bio: 1–2 lines, self-aware and slightly funny ("Building things for the web. Sometimes they even work.")
- Social buttons: GitHub, LinkedIn (Warm Sand style), Email CTA (Terracotta)
- Profile photo: `https://avatars.githubusercontent.com/u/38402683?v=4` — 120px circle, warm border ring

### About (alternate section — dark in light mode, light-warm in dark mode)
- Section overline + serif H2: "Who I am"
- 2-column layout: bio paragraph left, 2×2 expertise cards right
- Expertise cards: Web Dev, Backend Systems, Cloud, Mobile First — icon + title + one-line description
- Cards use Dark Surface bg in light mode, slightly lighter warm surface in dark mode

### Skills (back to primary surface)
- Section overline + serif H2: "Skills & Tools"
- Tech chip row: Python, Go, JavaScript, React, Django, Docker, Node.js, PostgreSQL — icon + name, ivory card with warm border
- Competency cards below: Full Stack Dev, System Design, Database Management, Security — same 2×2 grid style as About expertise

### Contact (alternate section again)
- Section overline + serif H2: "Let's work together"
- Short line of personality copy
- Three buttons: ✉ Email, GitHub, LinkedIn — Dark Surface style
- No form

### Footer (back to primary surface)
- One line: "© 2026 Prashanth G · Built with React & Vite"
- Stone Gray, centred, 14px

---

## Animations

Keep `framer-motion` for entrance animations (fade + slide up on scroll via `react-intersection-observer`). Remove all: spin-on-hover, constant floating, rotate-360 social icons. Keep: subtle scale on card hover (1.02), button press feedback (scale 0.97).

---

## Explore Page (Phase 1 stub)

Route: `/explore`

Shows the hub layout with 4 world cards (Games, Dev Tools, Jokes, Just Vibes). Each card has emoji, name, tagline, and "Coming soon" badge. No functionality yet. A dashed ＋ card reads "Something new coming eventually."

This stub satisfies the routing setup so Phase 2 only needs to add page components and register routes — no structural changes.

---

## Phase 2 Scope (not built now)

- `/explore/games` — Snake, Dev Wordle, Typing Speed Test, Memory Match, Conway's Life
- `/explore/tools` — JSON formatter, Base64, Timestamp converter, Regex tester, UUID gen, Color palette
- `/explore/jokes` — Dev jokes, Hot takes voting, Commit message gen, Excuse gen
- `/explore/vibes` — Now page, Brag board, Build idea gen, CLI résumé, "Hire me" button

---

## Dependencies

Add: `react-router-dom`
Remove: `@tsparticles/engine`, `@tsparticles/react`, `@tsparticles/slim` (particles gone)
Keep: `framer-motion`, `react-type-animation`, `react-intersection-observer`, `react-icons`, `bootstrap`, `react-bootstrap`

---

## What gets deleted

- `src/Canvas.tsx`
- `src/components/HeroFuturistic.tsx`
- `src/components/AboutFuturistic.tsx`
- `src/components/SkillsFuturistic.tsx`
- `src/components/ContactFuturistic.tsx`
- `src/components/FooterFuturistic.tsx`
- `src/components/NavigationFuturistic.tsx`
- `src/components/ProjectsFuturistic.tsx`
