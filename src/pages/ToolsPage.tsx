import { Link } from 'react-router-dom'
import DevToolsWorkbench from '../components/DevToolsWorkbench'

const ToolsPage = () => (
  <div className="explore-page">
    <div className="explore-header section-alternate">
      <div className="container">
        <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
          Utilities
        </p>
        <h1 className="explore-title">Dev Tools</h1>
        <p className="explore-sub">Practical tools you actually end up using every week.</p>
        <div className="page-crumbs" aria-label="Breadcrumb">
          <Link to="/" className="page-crumb-link">
            Home
          </Link>
          <span className="page-crumb-sep">/</span>
          <Link to="/explore" className="page-crumb-link">
            Explore
          </Link>
          <span className="page-crumb-sep">/</span>
          <span className="page-crumb-current">Tools</span>
        </div>
      </div>
    </div>

    <div className="explore-worlds section-primary">
      <div className="container">
        <DevToolsWorkbench />
      </div>
    </div>
  </div>
)

export default ToolsPage
