import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const obsessions = [
  'Currently obsessed with Go',
  'Currently reading: DDIA',
  'Currently breaking prod',
  'Currently over-engineering things',
  'Currently avoiding YAML',
  'Currently blaming the compiler',
]

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

  return (
    <section className="section-primary hero-section" id="home">
      <div className="container">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
          <motion.img
            variants={item}
            src="https://avatars.githubusercontent.com/u/38402683?v=4"
            alt="Prashanth G"
            className="hero-avatar"
          />

          <motion.p variants={item} className="hero-overline">
            Full Stack Developer · Bangalore
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
            Building things for the web. Sometimes they even work.
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
            <motion.a
              href="mailto:prashanthg008@gmail.com"
              className="btn btn-brand"
              whileTap={{ scale: 0.97 }}
            >
              <FaEnvelope /> Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
