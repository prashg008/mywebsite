import { Link } from 'react-router-dom'
import QuirkyGames from '../components/QuirkyGames'

const GamesPage = () => (
  <div className="explore-page">
    <div className="explore-header section-alternate">
      <div className="container">
        <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
          Arcade
        </p>
        <h1 className="explore-title">Quirky Games</h1>
        <p className="explore-sub">Same vibe. More chaos.</p>
        <div className="page-crumbs" aria-label="Breadcrumb">
          <Link to="/" className="page-crumb-link">
            Home
          </Link>
          <span className="page-crumb-sep">/</span>
          <Link to="/explore" className="page-crumb-link">
            Explore
          </Link>
          <span className="page-crumb-sep">/</span>
          <span className="page-crumb-current">Games</span>
        </div>
      </div>
    </div>

    <div className="explore-worlds section-primary">
      <div className="container">
        <QuirkyGames />
      </div>
    </div>
  </div>
)

export default GamesPage
