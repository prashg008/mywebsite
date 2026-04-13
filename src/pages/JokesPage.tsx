import { Link } from 'react-router-dom'
import JokesLab from '../components/JokesLab'

const JokesPage = () => (
  <div className="explore-page">
    <div className="explore-header section-alternate">
      <div className="container">
        <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
          Humor
        </p>
        <h1 className="explore-title">Jokes</h1>
        <p className="explore-sub">Developer humor for when the build finally turns green.</p>
        <div className="page-crumbs" aria-label="Breadcrumb">
          <Link to="/" className="page-crumb-link">
            Home
          </Link>
          <span className="page-crumb-sep">/</span>
          <Link to="/explore" className="page-crumb-link">
            Explore
          </Link>
          <span className="page-crumb-sep">/</span>
          <span className="page-crumb-current">Jokes</span>
        </div>
      </div>
    </div>

    <div className="explore-worlds section-primary">
      <div className="container">
        <JokesLab />
      </div>
    </div>
  </div>
)

export default JokesPage
