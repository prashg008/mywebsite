# Website Rebuild (Phase 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild prashanthgowda.com from a dark cyberpunk aesthetic to a warm editorial design (design.md), with React Router, light/dark theme, and a stub `/explore` route.

**Architecture:** New component files replace all `*Futuristic` files. `ThemeContext` drives a CSS custom-property theme system toggled via `data-theme` on `<html>`. `react-router-dom` adds two routes: `/` (portfolio) and `/explore` (stub hub).

**Tech Stack:** React 18, TypeScript, Vite, react-router-dom, framer-motion, react-type-animation, react-intersection-observer, react-icons, CSS custom properties (no CSS-in-JS)

---

### Task 1: Swap dependencies + delete dead files

**Files:**
- Modify: `package.json`
- Delete: `src/Canvas.tsx`, `src/components/HeroFuturistic.tsx`, `src/components/AboutFuturistic.tsx`, `src/components/SkillsFuturistic.tsx`, `src/components/ContactFuturistic.tsx`, `src/components/FooterFuturistic.tsx`, `src/components/NavigationFuturistic.tsx`, `src/components/ProjectsFuturistic.tsx`

- [ ] **Step 1: Install react-router-dom, remove tsparticles packages**

```bash
npm install react-router-dom
npm uninstall @tsparticles/engine @tsparticles/react @tsparticles/slim
```

Expected: `package.json` reflects changes, no errors.

- [ ] **Step 2: Delete all old component and canvas files**

```bash
rm src/Canvas.tsx
rm src/components/HeroFuturistic.tsx
rm src/components/AboutFuturistic.tsx
rm src/components/SkillsFuturistic.tsx
rm src/components/ContactFuturistic.tsx
rm src/components/FooterFuturistic.tsx
rm src/components/NavigationFuturistic.tsx
rm src/components/ProjectsFuturistic.tsx
```

- [ ] **Step 3: Verify nothing currently builds (expected — App.tsx still imports deleted files)**

```bash
npm run build 2>&1 | head -20
```

Expected: TypeScript errors about missing imports. That's fine — we'll fix App.tsx in Task 4.

- [ ] **Step 4: Create required directories**

```bash
mkdir -p src/context src/pages
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove tsparticles, add react-router-dom, delete Futuristic components"
```

---

### Task 2: Replace index.css with design-system tokens and base styles

**Files:**
- Overwrite: `src/index.css`

- [ ] **Step 1: Replace index.css entirely**

Write the following to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── Design Tokens ──────────────────────────────────────── */
:root,
[data-theme="light"] {
  --bg-primary:   #f5f4ed;
  --bg-alternate: #141413;
  --bg-card:      #faf9f5;
  --bg-card-alt:  #30302e;

  --text-primary:      #141413;
  --text-secondary:    #5e5d59;
  --text-tertiary:     #87867f;
  --text-on-alt:       #faf9f5;
  --text-secondary-on-alt: #b0aea5;

  --border:     #e8e6dc;
  --border-alt: #30302e;
  --border-card:#e8e6dc;

  --brand:       #c96442;
  --brand-hover: #b5573b;

  --nav-bg:     #f5f4ed;
  --nav-border: #e8e6dc;
  --nav-text:   #5e5d59;

  --btn-sand-bg:   #e8e6dc;
  --btn-sand-text: #4d4c48;
  --btn-dark-bg:   #141413;
  --btn-dark-text: #faf9f5;
  --btn-surf-bg:   #30302e;
  --btn-surf-text: #faf9f5;
  --btn-surf-border: #30302e;
}

[data-theme="dark"] {
  --bg-primary:   #141413;
  --bg-alternate: #30302e;
  --bg-card:      #30302e;
  --bg-card-alt:  #1e1e1c;

  --text-primary:      #faf9f5;
  --text-secondary:    #b0aea5;
  --text-tertiary:     #87867f;
  --text-on-alt:       #faf9f5;
  --text-secondary-on-alt: #b0aea5;

  --border:     #30302e;
  --border-alt: #3d3d3a;
  --border-card:#3d3d3a;

  --brand:       #c96442;
  --brand-hover: #d97757;

  --nav-bg:     #141413;
  --nav-border: #30302e;
  --nav-text:   #b0aea5;

  --btn-sand-bg:   #30302e;
  --btn-sand-text: #b0aea5;
  --btn-dark-bg:   #faf9f5;
  --btn-dark-text: #141413;
  --btn-surf-bg:   #30302e;
  --btn-surf-text: #b0aea5;
  --btn-surf-border: #3d3d3a;
}

/* ─── Reset & Base ───────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: system-ui, -apple-system, Arial, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  transition: background 0.25s, color 0.25s;
}

a { text-decoration: none; color: inherit; }
button { cursor: pointer; font: inherit; border: none; background: none; }
img { display: block; max-width: 100%; }

/* ─── Layout ─────────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-primary   { background: var(--bg-primary); color: var(--text-primary); }
.section-alternate { background: var(--bg-alternate); color: var(--text-on-alt); }

section, .section-primary, .section-alternate {
  padding: 80px 0;
}

/* ─── Typography ─────────────────────────────────────────── */
.section-overline {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 8px;
}

.section-title {
  font-family: Georgia, serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.15;
  margin-bottom: 32px;
}

.section-header { margin-bottom: 40px; }

/* ─── Buttons ────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
  white-space: nowrap;
}
.btn:hover  { opacity: 0.9; transform: translateY(-1px); }
.btn:active { transform: scale(0.97); }

.btn-sand {
  background: var(--btn-sand-bg);
  color: var(--btn-sand-text);
  box-shadow: 0 0 0 1px var(--border);
}

.btn-brand {
  background: var(--brand);
  color: #faf9f5;
  border-radius: 12px;
  box-shadow: 0 0 0 1px var(--brand);
}
.btn-brand:hover { background: var(--brand-hover); }

.btn-surface-dark {
  background: var(--btn-surf-bg);
  color: var(--btn-surf-text);
  box-shadow: 0 0 0 1px var(--btn-surf-border);
}

/* ─── Cards ──────────────────────────────────────────────── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 20px;
  box-shadow: rgba(0,0,0,0.05) 0px 4px 24px;
}

.card-alt {
  background: var(--bg-card-alt);
  border: 1px solid var(--border-alt);
  border-radius: 8px;
  padding: 20px;
}

/* ─── Navigation ─────────────────────────────────────────── */
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 24px;
  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  transition: background 0.25s, border-color 0.25s;
}

.nav-logo {
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 14px;
  color: var(--nav-text);
  transition: color 0.15s;
}
.nav-link:hover { color: var(--text-primary); }

.nav-explore {
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background: var(--btn-dark-bg);
  color: var(--btn-dark-text);
  margin-left: 4px;
  transition: opacity 0.15s;
}
[data-theme="dark"] .nav-explore {
  background: var(--brand);
  color: #faf9f5;
}
.nav-explore:hover { opacity: 0.85; }

.nav-theme-btn {
  font-size: 18px;
  padding: 4px 6px;
  border-radius: 6px;
  margin-left: 4px;
  line-height: 1;
  transition: transform 0.2s;
}
.nav-theme-btn:hover { transform: scale(1.15); }

.nav-hamburger {
  display: none;
  font-size: 20px;
  padding: 4px 8px;
  color: var(--text-primary);
}

@media (max-width: 640px) {
  .nav-links-group { display: none; }
  .nav-links-group.open { display: flex; flex-direction: column; position: absolute; top: 56px; left: 0; right: 0; background: var(--nav-bg); border-bottom: 1px solid var(--nav-border); padding: 12px 24px; gap: 4px; }
  .nav-hamburger { display: block; }
}

/* ─── Hero ───────────────────────────────────────────────── */
.hero-section {
  padding: 80px 0 100px;
  min-height: calc(100vh - 56px);
  display: flex;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  gap: 0;
}

.hero-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 3px var(--border), 0 0 0 6px var(--bg-primary);
  margin-bottom: 24px;
}

.hero-overline {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 12px;
}

.hero-title {
  font-family: Georgia, serif;
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 500;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.hero-name-accent { color: var(--brand); }

.hero-role {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--text-secondary);
  min-height: 1.6em;
  margin-bottom: 16px;
}

.hero-obsession-pill {
  display: inline-block;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.hero-desc {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ─── About ──────────────────────────────────────────────── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.about-bio {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-secondary-on-alt);
}

.about-bio strong { color: var(--text-on-alt); font-weight: 600; }

.expertise-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.expertise-card {
  background: var(--bg-card-alt);
  border: 1px solid var(--border-alt);
  border-radius: 8px;
  padding: 16px;
  cursor: default;
}

.expertise-icon {
  font-size: 22px;
  color: var(--brand);
  margin-bottom: 8px;
}

.expertise-title {
  font-family: Georgia, serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-on-alt);
  margin-bottom: 4px;
}

.expertise-desc {
  font-size: 12px;
  color: var(--text-secondary-on-alt);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
}

/* ─── Skills ─────────────────────────────────────────────── */
.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-secondary);
  box-shadow: rgba(0,0,0,0.04) 0px 2px 8px;
  transition: transform 0.15s;
}
.skill-chip:hover { transform: translateY(-2px); }

.skill-chip-icon { font-size: 18px; }

.competency-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.competency-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 20px;
  box-shadow: rgba(0,0,0,0.04) 0px 4px 16px;
}

.competency-icon {
  font-size: 24px;
  color: var(--brand);
  margin-bottom: 10px;
}

.competency-title {
  font-family: Georgia, serif;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.competency-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .competency-grid { grid-template-columns: 1fr; }
}

/* ─── Contact ────────────────────────────────────────────── */
.contact-sub {
  font-size: 16px;
  color: var(--text-secondary-on-alt);
  line-height: 1.6;
  margin-top: -16px;
  margin-bottom: 32px;
  max-width: 480px;
}

.contact-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* ─── Footer ─────────────────────────────────────────────── */
.site-footer {
  padding: 28px 0 !important;
  border-top: 1px solid var(--border);
}

.footer-text {
  font-size: 14px;
  color: var(--text-tertiary);
  text-align: center;
}

/* ─── Explore Page ───────────────────────────────────────── */
.explore-page { min-height: calc(100vh - 56px); }

.explore-header {
  padding: 64px 0 48px;
}

.explore-title {
  font-family: Georgia, serif;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.15;
  color: var(--text-on-alt);
  margin-bottom: 8px;
}

.explore-sub {
  font-size: 16px;
  color: var(--text-secondary-on-alt);
}

.explore-worlds { padding: 48px 0 80px; }

.world-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.world-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  box-shadow: rgba(0,0,0,0.04) 0px 4px 16px;
}

.world-emoji { font-size: 28px; margin-bottom: 10px; }

.world-name {
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.world-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 10px;
}

.world-count {
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.3px;
}

.world-card--add {
  border-style: dashed;
  border-color: var(--border);
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 140px;
  box-shadow: none;
}

.world-add-icon {
  font-size: 24px;
  color: var(--text-tertiary);
  margin-bottom: 8px;
  opacity: 0.5;
}

.world-add-label {
  font-size: 12px;
  color: var(--text-tertiary);
  line-height: 1.5;
}
```

- [ ] **Step 2: Verify Tailwind directives are correct (postcss.config.js check)**

```bash
cat postcss.config.js
```

Expected: `tailwindcss` and `autoprefixer` listed as plugins.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: replace index.css with warm design system tokens and component styles"
```

---

### Task 3: ThemeContext

**Files:**
- Create: `src/context/ThemeContext.tsx`

- [ ] **Step 1: Write ThemeContext.tsx**

```tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

- [ ] **Step 2: Commit**

```bash
git add src/context/ThemeContext.tsx
git commit -m "feat: add ThemeContext with localStorage persistence and prefers-color-scheme detection"
```

---

### Task 4: App.tsx with React Router

**Files:**
- Overwrite: `src/App.tsx`

- [ ] **Step 1: Write App.tsx**

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: set up React Router with ThemeProvider wrapper"
```

---

### Task 5: Nav component

**Files:**
- Create: `src/components/Nav.tsx`

- [ ] **Step 1: Write Nav.tsx**

```tsx
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Nav = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="site-nav" style={{ position: 'relative' }}>
      <Link to="/" className="nav-logo">Prashanth G</Link>

      <div className="nav-right">
        <div className={`nav-links-group${menuOpen ? ' open' : ''}`}>
          <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
          <button className="nav-link" onClick={() => scrollTo('skills')}>Skills</button>
          <button className="nav-link" onClick={() => scrollTo('contact')}>Contact</button>
        </div>
        <Link to="/explore" className="nav-explore" onClick={() => setMenuOpen(false)}>
          Explore ✦
        </Link>
        <button
          className="nav-theme-btn"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Nav
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: Errors only for missing pages (HomePage, ExplorePage) — not for Nav itself.

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat: add Nav with smooth scroll, Explore link, and theme toggle"
```

---

### Task 6: Hero component

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Write Hero.tsx**

```tsx
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const obsessions = [
  'Currently obsessed with Go',
  'Currently reading: DDIA',
  'Currently breaking prod',
  'Currently over-engineering things',
  'Currently avoiding YAML',
  'Currently blaming the compiler',
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Hero = () => {
  const obsession = useMemo(
    () => obsessions[Math.floor(Math.random() * obsessions.length)],
    []
  )

  return (
    <section className="section-primary hero-section" id="home">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            variants={item}
            src="https://avatars.githubusercontent.com/u/38402683?v=4"
            alt="Prashanth G"
            className="hero-avatar"
          />

          <motion.p variants={item} className="hero-overline">
            Full Stack Developer · Bangalore
          </motion.p>

          <motion.h1 variants={item} className="hero-title">
            Hi, I'm <span className="hero-name-accent">Prashanth G</span>
          </motion.h1>

          <motion.div variants={item} className="hero-role">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Cloud Solutions Architect', 2000,
                'Problem Solver', 2000,
                'Tech Enthusiast', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.span variants={item} className="hero-obsession-pill">
            ✦ {obsession}
          </motion.span>

          <motion.p variants={item} className="hero-desc">
            Building things for the web. Sometimes they even work.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <motion.a
              href="https://github.com/prashg008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sand"
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prashanthg008/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sand"
              whileTap={{ scale: 0.97 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            <motion.a
              href="mailto:prashanthg008@gmail.com"
              className="btn btn-brand"
              whileTap={{ scale: 0.97 }}
            >
              <FaEnvelope /> Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add Hero with typewriter, quirky obsession pill, and warm design tokens"
```

---

### Task 7: About component

**Files:**
- Create: `src/components/About.tsx`

- [ ] **Step 1: Write About.tsx**

```tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaServer, FaCloud, FaMobileAlt } from 'react-icons/fa'

const expertise = [
  { icon: <FaCode />, title: 'Web Development', desc: 'Responsive, interactive applications' },
  { icon: <FaServer />, title: 'Backend Systems', desc: 'Scalable server architectures' },
  { icon: <FaCloud />, title: 'Cloud Solutions', desc: 'Infrastructure & deployment' },
  { icon: <FaMobileAlt />, title: 'Mobile First', desc: 'Seamless mobile experiences' },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-alternate" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={item} className="section-header">
            <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
              About
            </p>
            <h2 className="section-title" style={{ color: 'var(--text-on-alt)' }}>
              Who I am
            </h2>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={item} className="about-bio">
              <p>
                I'm a <strong>Full Stack Developer</strong> passionate about creating elegant
                solutions to complex problems. With expertise in modern web technologies and cloud
                platforms, I build scalable applications that make a difference.
              </p>
              <p>
                My journey in software development has given me a diverse skill set — from
                front-end frameworks to backend systems and cloud infrastructure. I thrive on
                challenges and continuously seek to learn and adapt.
              </p>
            </motion.div>

            <motion.div variants={item} className="expertise-grid">
              {expertise.map((e) => (
                <motion.div
                  key={e.title}
                  className="expertise-card"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="expertise-icon">{e.icon}</div>
                  <h3 className="expertise-title">{e.title}</h3>
                  <p className="expertise-desc">{e.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: add About with bio and expertise cards on dark alternate section"
```

---

### Task 8: Skills component

**Files:**
- Create: `src/components/Skills.tsx`

- [ ] **Step 1: Write Skills.tsx**

```tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaReact, FaDocker, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiGo, SiJavascript, SiDjango, SiPostgresql } from 'react-icons/si'
import type { ReactNode } from 'react'

interface TechItem { name: string; icon: ReactNode }
interface CompetencyItem { icon: ReactNode; title: string; desc: string }

const techStack: TechItem[] = [
  { name: 'Python',     icon: <FaPython /> },
  { name: 'Go',         icon: <SiGo /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React',      icon: <FaReact /> },
  { name: 'Django',     icon: <SiDjango /> },
  { name: 'Docker',     icon: <FaDocker /> },
  { name: 'Node.js',    icon: <FaNodeJs /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
]

const competencies: CompetencyItem[] = [
  { icon: <FaReact />,    title: 'Full Stack Development', desc: 'End-to-end application development with modern frameworks' },
  { icon: <FaNodeJs />,   title: 'System Design',          desc: 'Architecting scalable and maintainable systems' },
  { icon: <FaDatabase />, title: 'Database Management',    desc: 'Expertise in SQL and NoSQL databases' },
  { icon: <FaDocker />,   title: 'Security Best Practices',desc: 'Implementing secure coding and deployment practices' },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-primary" id="skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={item} className="section-header">
            <p className="section-overline">Tech Stack</p>
            <h2 className="section-title">Skills &amp; Tools</h2>
          </motion.div>

          <motion.div variants={item} className="skill-chips">
            {techStack.map((s) => (
              <motion.div key={s.name} className="skill-chip" whileHover={{ scale: 1.04 }}>
                <span className="skill-chip-icon">{s.icon}</span>
                <span>{s.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="competency-grid">
            {competencies.map((c) => (
              <motion.div
                key={c.title}
                variants={item}
                className="competency-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="competency-icon">{c.icon}</div>
                <h3 className="competency-title">{c.title}</h3>
                <p className="competency-desc">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Skills.tsx
git commit -m "feat: add Skills with tech chip row and competency cards"
```

---

### Task 9: Contact component

**Files:**
- Create: `src/components/Contact.tsx`

- [ ] **Step 1: Write Contact.tsx**

```tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-alternate" id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={item} className="section-header">
            <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
              Contact
            </p>
            <h2 className="section-title" style={{ color: 'var(--text-on-alt)' }}>
              Let's work together
            </h2>
          </motion.div>

          <motion.p variants={item} className="contact-sub">
            Open to new opportunities and interesting problems.
            No time-wasters, please — I'm a developer, not a wizard.
          </motion.p>

          <motion.div variants={item} className="contact-actions">
            <motion.a
              href="mailto:prashanthg008@gmail.com"
              className="btn btn-surface-dark"
              whileTap={{ scale: 0.97 }}
            >
              <FaEnvelope /> Email me
            </motion.a>
            <motion.a
              href="https://github.com/prashg008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-surface-dark"
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prashanthg008/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-surface-dark"
              whileTap={{ scale: 0.97 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: add Contact section with quirky copy and social links"
```

---

### Task 10: Footer component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Write Footer.tsx**

```tsx
const Footer = () => (
  <footer className="section-primary site-footer">
    <div className="container">
      <p className="footer-text">© 2026 Prashanth G · Built with React &amp; Vite</p>
    </div>
  </footer>
)

export default Footer
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add minimal Footer"
```

---

### Task 11: HomePage

**Files:**
- Create: `src/pages/HomePage.tsx`

- [ ] **Step 1: Write HomePage.tsx**

```tsx
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </>
)

export default HomePage
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/HomePage.tsx
git commit -m "feat: add HomePage composing all portfolio sections"
```

---

### Task 12: ExplorePage stub

**Files:**
- Create: `src/pages/ExplorePage.tsx`

- [ ] **Step 1: Write ExplorePage.tsx**

```tsx
import { motion } from 'framer-motion'

interface World {
  emoji: string
  name: string
  desc: string
  count: number
  unit: string
}

const worlds: World[] = [
  { emoji: '🎮', name: 'Games',     desc: 'Tiny browser games to kill time responsibly', count: 0, unit: 'games' },
  { emoji: '🛠', name: 'Dev Tools', desc: 'Actually useful utilities I built for myself',  count: 0, unit: 'tools' },
  { emoji: '😂', name: 'Jokes',     desc: 'Developer humour. Quality not guaranteed.',      count: 0, unit: 'jokes' },
  { emoji: '✨', name: 'Just Vibes',desc: "Random things that don't fit anywhere else",    count: 0, unit: 'things' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ExplorePage = () => (
  <div className="explore-page">
    <div className="explore-header section-alternate">
      <div className="container">
        <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
          The fun stuff
        </p>
        <h1 className="explore-title">What do you feel like?</h1>
        <p className="explore-sub">Pick a world. No rules.</p>
      </div>
    </div>

    <div className="explore-worlds section-primary">
      <div className="container">
        <div className="world-grid">
          {worlds.map((w, i) => (
            <motion.div
              key={w.name}
              className="world-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="world-emoji">{w.emoji}</div>
              <h2 className="world-name">{w.name}</h2>
              <p className="world-desc">{w.desc}</p>
              <p className="world-count">
                {w.count} {w.unit} · more soon
              </p>
            </motion.div>
          ))}

          <motion.div
            className="world-card world-card--add"
            custom={worlds.length}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <div className="world-add-icon">＋</div>
            <p className="world-add-label">
              Something new
              <br />
              coming eventually
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
)

export default ExplorePage
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/ExplorePage.tsx
git commit -m "feat: add ExplorePage stub with world cards and Phase 2 placeholder"
```

---

### Task 13: Final verification and build

**Files:** None — verification only.

- [ ] **Step 1: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: Zero errors.

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: Zero warnings (lint is configured with `--max-warnings 0`).

Common lint fixes needed:
- Unused imports → remove them
- `ReactNode` import — use `import type { ReactNode }` if only used as a type

- [ ] **Step 3: Production build**

```bash
npm run build
```

Expected: Build succeeds, output in `dist/`.

- [ ] **Step 4: Visual check in dev server**

```bash
npm run dev
```

Check in browser:
- [ ] Light theme loads by default (or matches system preference)
- [ ] 🌙/☀️ toggle switches theme, persists on reload
- [ ] All 5 sections render in correct light/dark alternation
- [ ] Nav smooth-scrolls to sections
- [ ] Typewriter animation runs in hero
- [ ] Obsession pill shows a random string
- [ ] `/explore` route shows the hub with 4 world cards + dashed ＋ card
- [ ] Framer Motion entrance animations trigger on scroll
- [ ] Mobile hamburger menu works at <640px

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete Phase 1 website rebuild — warm editorial design, React Router, light/dark theme"
```
