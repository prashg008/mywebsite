import { useState } from 'react'

const Footer = () => {
  const [coffeeCount, setCoffeeCount] = useState(1)

  return (
    <footer className="section-alternate site-footer">
      <div className="container">
        <p className="footer-text">
          Made with{' '}
          <button
            className="footer-coffee-btn"
            onClick={() => setCoffeeCount((c) => c + 1)}
            title="this means nothing"
            aria-label="Coffee counter"
          >
            ☕ ×{coffeeCount}
          </button>{' '}
          · Debugged on 🚴 · Deployed under 🌟
        </p>
        <p className="footer-text" style={{ marginTop: '4px' }}>
          © 2026 Prashanth G
        </p>
      </div>
    </footer>
  )
}

export default Footer
