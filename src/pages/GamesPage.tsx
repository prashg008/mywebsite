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
