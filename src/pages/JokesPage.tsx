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
