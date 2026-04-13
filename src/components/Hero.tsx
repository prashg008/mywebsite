import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const obsessions = [
  'Currently stargazing instead of sleeping',
  'Currently on: One Piece',
  'Currently obsessed with Go',
  'Currently on a 5km bike streak',
  'Currently painting badly',
  'Currently at: somewhere with a good view',
  'Currently avoiding YAML',
  'Currently: third coffee, no regrets',
]

const statuses = [
  '☕ 3rd cup today',
  '🚴 just back from a ride',
  '🔭 should be sleeping',
  '🎨 covered in paint',
  '📺 mid episode, please hold',
  '🌊 found a good view',
]

function getTimeGreeting(): string {
  const h = new Date().getHours()
  if (h < 5) return "🌙 You're up late too"
  if (h < 12) return '☕ Good morning'
  if (h < 18) return '👋 Hey there'
  if (h < 21) return '🌅 Good evening'
  return '🌙 Winding down'
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Hero = () => {
  const obsession = useMemo(() => obsessions[Math.floor(Math.random() * obsessions.length)], [])
  const greeting = useMemo(() => getTimeGreeting(), [])
  const [statusIdx, setStatusIdx] = useState<number | null>(null)

  const handleAvatarClick = () => {
    setStatusIdx((prev) => (prev === null ? 0 : (prev + 1) % statuses.length))
  }

  return (
    <section className="section-primary hero-section" id="home">
      <div className="container">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
          <motion.span variants={item} className="hero-time-greeting">
            {greeting}
          </motion.span>

          <motion.div variants={item} className="hero-avatar-wrap" onClick={handleAvatarClick} title="Click me">
            <img
              src="https://avatars.githubusercontent.com/u/38402683?v=4"
              alt="Prashanth G"
              className="hero-avatar"
              style={{ margin: 0 }}
            />
          </motion.div>

          {statusIdx !== null && (
            <span key={statusIdx} className="avatar-status">
              {statuses[statusIdx]}
            </span>
          )}

          <motion.p variants={item} className="hero-overline">
            Full Stack Dev · Bangalore · ☕ Fuelled by coffee
          </motion.p>

          <motion.h1 variants={item} className="hero-title">
            Hi, I'm <span className="hero-name-accent">Prashanth G</span>
          </motion.h1>

          <motion.div variants={item} className="hero-role">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Cloud Solutions Architect',
                2000,
                'Problem Solver',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.span variants={item} className="hero-obsession-pill">
            ✦ {obsession}
          </motion.span>

          <motion.p variants={item} className="hero-desc">
            Building things for the web. Fuelled by coffee, sustained by good views.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <motion.a
              href="https://github.com/prashg008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sand"
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prashanthg008/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sand"
              whileTap={{ scale: 0.97 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            <motion.a href="mailto:prashanthg008@gmail.com" className="btn btn-brand" whileTap={{ scale: 0.97 }}>
              <FaEnvelope /> Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
