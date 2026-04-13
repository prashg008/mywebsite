import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface World {
  id: string
  emoji: string
  name: string
  desc: string
  count: number
  unit: string
  available: boolean
}

const worlds: World[] = [
  {
    id: 'games',
    emoji: '🎮',
    name: 'Games',
    desc: 'Tiny browser games to kill time responsibly',
    count: 3,
    unit: 'games',
    available: true,
  },
  {
    id: 'dev-tools',
    emoji: '🛠',
    name: 'Dev Tools',
    desc: 'Actually useful utilities I built for myself',
    count: 6,
    unit: 'tools',
    available: true,
  },
  {
    id: 'jokes',
    emoji: '😂',
    name: 'Jokes',
    desc: 'Developer humour. Quality not guaranteed.',
    count: 3,
    unit: 'jokes',
    available: true,
  },
  {
    id: 'vibes',
    emoji: '✨',
    name: 'Just Vibes',
    desc: "Random things that don't fit anywhere else",
    count: 0,
    unit: 'things',
    available: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
}

const ExplorePage = () => {
  const getRouteForWorld = (id: string) => {
    if (id === 'games') return '/games'
    if (id === 'dev-tools') return '/tools'
    if (id === 'jokes') return '/jokes'
    return ''
  }

  return (
    <div className="explore-page">
      <div className="explore-header section-alternate">
        <div className="container">
          <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
            The fun stuff
          </p>
          <h1 className="explore-title">What do you feel like?</h1>
          <p className="explore-sub">Pick a world. No rules.</p>
          <div className="page-crumbs" aria-label="Breadcrumb">
            <Link to="/" className="page-crumb-link">
              Home
            </Link>
            <span className="page-crumb-sep">/</span>
            <span className="page-crumb-current">Explore</span>
          </div>
        </div>
      </div>

      <div className="explore-worlds section-primary">
        <div className="container">
          <div className="world-grid">
            {worlds.map((w, i) => (
              w.available ? (
                <motion.div
                  key={w.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link className="world-card world-card--live world-card--link" to={getRouteForWorld(w.id)}>
                    <div className="world-emoji">{w.emoji}</div>
                    <h2 className="world-name">{w.name}</h2>
                    <p className="world-desc">{w.desc}</p>
                    <p className="world-count">
                      {w.count} {w.unit} · live now
                    </p>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={w.id}
                  className={`world-card${w.available ? ' world-card--live' : ''}`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="world-emoji">{w.emoji}</div>
                  <h2 className="world-name">{w.name}</h2>
                  <p className="world-desc">{w.desc}</p>
                  <p className="world-count">
                    {w.count} {w.unit} {w.available ? '· live now' : '· more soon'}
                  </p>
                </motion.div>
              )
            ))}

            <motion.div
              className="world-card world-card--add"
              custom={worlds.length}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <div className="world-add-icon">＋</div>
              <p className="world-add-label">
                Something new
                <br />
                coming eventually
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
