import { useCallback } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import { useCoffeeSpell } from './hooks/useCoffeeSpell'
import { useKonamiWithDismiss } from './hooks/useKonami'
import { useTabTitle } from './hooks/useTabTitle'
import { ThemeProvider } from './context/ThemeContext'
import ExplorePage from './pages/ExplorePage'
import GamesPage from './pages/GamesPage'
import HomePage from './pages/HomePage'
import JokesPage from './pages/JokesPage'
import ToolsPage from './pages/ToolsPage'

function KonamiOverlay({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      className="konami-overlay"
      onClick={onDismiss}
      onKeyDown={(e) => e.key === 'Escape' && onDismiss()}
      role="dialog"
      aria-modal="true"
      tabIndex={0}
    >
      <svg
        className="konami-svg"
        width="220"
        height="300"
        viewBox="0 0 220 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orion — accurate star positions */}
        {/* Lines first (behind stars) */}
        <line x1="110" y1="38"  x2="72"  y2="88"  stroke="#faf9f5" strokeWidth="0.6" opacity="0.25" />
        <line x1="110" y1="38"  x2="152" y2="82"  stroke="#faf9f5" strokeWidth="0.6" opacity="0.25" />
        <line x1="72"  y1="88"  x2="90"  y2="148" stroke="#faf9f5" strokeWidth="0.6" opacity="0.25" />
        <line x1="152" y1="82"  x2="130" y2="144" stroke="#faf9f5" strokeWidth="0.6" opacity="0.25" />
        {/* Belt */}
        <line x1="90"  y1="148" x2="110" y2="152" stroke="#faf9f5" strokeWidth="0.9" opacity="0.55" />
        <line x1="110" y1="152" x2="130" y2="144" stroke="#faf9f5" strokeWidth="0.9" opacity="0.55" />
        {/* Belt to feet */}
        <line x1="90"  y1="148" x2="76"  y2="222" stroke="#faf9f5" strokeWidth="0.6" opacity="0.25" />
        <line x1="130" y1="144" x2="150" y2="218" stroke="#faf9f5" strokeWidth="0.6" opacity="0.25" />
        {/* Sword below belt */}
        <line x1="112" y1="156" x2="108" y2="178" stroke="#faf9f5" strokeWidth="0.5" opacity="0.2" />
        <line x1="108" y1="178" x2="110" y2="196" stroke="#faf9f5" strokeWidth="0.5" opacity="0.2" />

        {/* Stars */}
        {/* Meissa — head */}
        <circle cx="110" cy="35"  r="1.8" fill="#faf9f5" opacity="0.65" />
        {/* Betelgeuse — left shoulder, red supergiant */}
        <circle cx="72"  cy="88"  r="4.5" fill="#c96442" opacity="0.95" />
        {/* Bellatrix — right shoulder */}
        <circle cx="152" cy="82"  r="2.5" fill="#faf9f5" opacity="0.85" />
        {/* Belt: Alnitak (left), Alnilam (center), Mintaka (right) — slight diagonal */}
        <circle cx="90"  cy="148" r="2"   fill="#faf9f5" opacity="0.9" />
        <circle cx="110" cy="152" r="2.5" fill="#faf9f5" opacity="1"   />
        <circle cx="130" cy="144" r="2"   fill="#faf9f5" opacity="0.9" />
        {/* Sword */}
        <circle cx="108" cy="178" r="1.5" fill="#faf9f5" opacity="0.45" />
        <circle cx="110" cy="194" r="1.2" fill="#faf9f5" opacity="0.35" />
        {/* Saiph — left foot */}
        <circle cx="76"  cy="222" r="2.5" fill="#faf9f5" opacity="0.75" />
        {/* Rigel — right foot, blue-white supergiant */}
        <circle cx="150" cy="218" r="4.5" fill="#c8dcff" opacity="0.95" />

        {/* Ambient background stars */}
        <circle cx="28"  cy="55"  r="0.9" fill="#faf9f5" opacity="0.28" />
        <circle cx="188" cy="38"  r="0.8" fill="#faf9f5" opacity="0.22" />
        <circle cx="18"  cy="165" r="0.8" fill="#faf9f5" opacity="0.2"  />
        <circle cx="198" cy="185" r="0.9" fill="#faf9f5" opacity="0.25" />
        <circle cx="48"  cy="272" r="0.8" fill="#faf9f5" opacity="0.2"  />
        <circle cx="172" cy="264" r="0.8" fill="#faf9f5" opacity="0.2"  />
        <circle cx="165" cy="120" r="0.7" fill="#faf9f5" opacity="0.18" />
        <circle cx="42"  cy="210" r="0.7" fill="#faf9f5" opacity="0.18" />

        {/* Star labels */}
        <text x="44"  y="84"  fontSize="7" fill="#c96442" opacity="0.75" fontFamily="Georgia, serif">Betelgeuse</text>
        <text x="156" y="80"  fontSize="7" fill="#faf9f5" opacity="0.5"  fontFamily="Georgia, serif">Bellatrix</text>
        <text x="154" y="215" fontSize="7" fill="#c8dcff" opacity="0.75" fontFamily="Georgia, serif">Rigel</text>
      </svg>
      <p className="konami-title">You found the good stuff 🌟</p>
      <p className="konami-sub">Most people don't get this far.</p>
      <p className="konami-close-hint">Click anywhere or press Esc to close</p>
    </div>
  )
}

function triggerCoffeeRain() {
  for (let i = 0; i < 10; i++) {
    const el = document.createElement('span')
    el.className = 'coffee-drop'
    el.textContent = '☕'
    el.style.left = `${Math.random() * 95}vw`
    el.style.top = `${Math.random() * 20}vh`
    el.style.animationDelay = `${Math.random() * 0.5}s`
    document.body.appendChild(el)
    el.addEventListener('animationend', () => el.remove())
  }
}

function AppInner() {
  const [konamiActive, dismissKonami] = useKonamiWithDismiss()
  useTabTitle()
  useCoffeeSpell(useCallback(triggerCoffeeRain, []))

  return (
    <>
      {konamiActive && <KonamiOverlay onDismiss={dismissKonami} />}
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/jokes" element={<JokesPage />} />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
