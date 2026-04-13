import { useCallback } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import { useCoffeeSpell } from './hooks/useCoffeeSpell'
import { useKonamiWithDismiss } from './hooks/useKonami'
import { useTabTitle } from './hooks/useTabTitle'
import { ThemeProvider } from './context/ThemeContext'
import ExplorePage from './pages/ExplorePage'
import HomePage from './pages/HomePage'

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
        width="200"
        height="160"
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orion constellation — simplified */}
        <circle cx="100" cy="20" r="2.5" fill="#c96442" />
        <circle cx="80" cy="50" r="2" fill="#faf9f5" opacity="0.8" />
        <circle cx="120" cy="50" r="2" fill="#faf9f5" opacity="0.8" />
        <circle cx="85" cy="80" r="2" fill="#c96442" />
        <circle cx="100" cy="78" r="2" fill="#c96442" />
        <circle cx="115" cy="80" r="2" fill="#c96442" />
        <circle cx="75" cy="110" r="2.5" fill="#faf9f5" opacity="0.8" />
        <circle cx="125" cy="110" r="2.5" fill="#faf9f5" opacity="0.8" />
        <circle cx="90" cy="140" r="2" fill="#faf9f5" opacity="0.6" />
        <circle cx="110" cy="140" r="2" fill="#faf9f5" opacity="0.6" />
        <line x1="100" y1="20" x2="80" y2="50" stroke="#faf9f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="20" x2="120" y2="50" stroke="#faf9f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="80" y1="50" x2="85" y2="80" stroke="#faf9f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="120" y1="50" x2="115" y2="80" stroke="#faf9f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="85" y1="80" x2="75" y2="110" stroke="#faf9f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="115" y1="80" x2="125" y2="110" stroke="#faf9f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="75" y1="110" x2="90" y2="140" stroke="#faf9f5" strokeWidth="0.5" opacity="0.3" />
        <line x1="125" y1="110" x2="110" y2="140" stroke="#faf9f5" strokeWidth="0.5" opacity="0.3" />
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
