import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-alternate" id="contact">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={item} className="section-header">
            <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
              Contact
            </p>
            <h2 className="section-title" style={{ color: 'var(--text-on-alt)' }}>
              Let's work together
            </h2>
          </motion.div>

          <motion.p variants={item} className="contact-sub">
            Open to new opportunities and interesting problems.
            No time-wasters, please - I'm a developer, not a wizard.
          </motion.p>

          <motion.div variants={item} className="contact-actions">
            <motion.a href="mailto:prashanthg008@gmail.com" className="btn btn-surface-dark" whileTap={{ scale: 0.97 }}>
              <FaEnvelope /> Email me
            </motion.a>
            <motion.a
              href="https://github.com/prashg008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-surface-dark"
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prashanthg008/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-surface-dark"
              whileTap={{ scale: 0.97 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
