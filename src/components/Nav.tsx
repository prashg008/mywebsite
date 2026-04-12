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
          className="nav-theme-btn"
          onClick={toggleTheme}
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
