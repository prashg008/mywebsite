import { motion } from 'framer-motion'

interface World {
  emoji: string
  name: string
  desc: string
  count: number
  unit: string
}

const worlds: World[] = [
  {
    emoji: '🎮',
    name: 'Games',
    desc: 'Tiny browser games to kill time responsibly',
    count: 0,
    unit: 'games',
  },
  {
    emoji: '🛠',
    name: 'Dev Tools',
    desc: 'Actually useful utilities I built for myself',
    count: 0,
    unit: 'tools',
  },
  {
    emoji: '😂',
    name: 'Jokes',
    desc: 'Developer humour. Quality not guaranteed.',
    count: 0,
    unit: 'jokes',
  },
  {
    emoji: '✨',
    name: 'Just Vibes',
    desc: "Random things that don't fit anywhere else",
    count: 0,
    unit: 'things',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ExplorePage = () => (
  <div className="explore-page">
    <div className="explore-header section-alternate">
      <div className="container">
        <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
          The fun stuff
        </p>
        <h1 className="explore-title">What do you feel like?</h1>
        <p className="explore-sub">Pick a world. No rules.</p>
      </div>
    </div>

    <div className="explore-worlds section-primary">
      <div className="container">
        <div className="world-grid">
          {worlds.map((w, i) => (
            <motion.div
              key={w.name}
              className="world-card"
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
                {w.count} {w.unit} · more soon
              </p>
            </motion.div>
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

export default ExplorePage
