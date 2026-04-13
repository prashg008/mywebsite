import { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Nav = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

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

  const handleThemeToggle = () => {
    const btn = toggleRef.current
    if (btn) {
      const rect = btn.getBoundingClientRect()
      const el = document.createElement('span')
      el.className = 'theme-float'
      el.textContent = theme === 'light' ? '🌙' : '☀️'
      el.style.left = `${rect.left + rect.width / 2}px`
      el.style.top = `${rect.top}px`
      document.body.appendChild(el)
      el.addEventListener('animationend', () => el.remove())
    }
    toggleTheme()
  }

  return (
    <nav className="site-nav" style={{ position: 'relative' }}>
      <Link to="/" className="nav-logo">
        Prashanth G
      </Link>

      <div className="nav-right">
        <div className={`nav-links-group${menuOpen ? ' open' : ''}`}>
          <button className="nav-link" onClick={() => scrollTo('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollTo('skills')}>
            Skills
          </button>
          <button className="nav-link" onClick={() => scrollTo('contact')}>
            Contact
          </button>
        </div>
        <Link to="/explore" className="nav-explore" onClick={() => setMenuOpen(false)}>
          Explore ✦
        </Link>
        <button
          ref={toggleRef}
          className="nav-theme-btn"
          onClick={handleThemeToggle}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button className="nav-hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Nav
