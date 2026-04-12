import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaServer, FaCloud, FaMobileAlt } from 'react-icons/fa'

const expertise = [
  { icon: <FaCode />, title: 'Web Development', desc: 'Responsive, interactive applications' },
  { icon: <FaServer />, title: 'Backend Systems', desc: 'Scalable server architectures' },
  { icon: <FaCloud />, title: 'Cloud Solutions', desc: 'Infrastructure & deployment' },
  { icon: <FaMobileAlt />, title: 'Mobile First', desc: 'Seamless mobile experiences' },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-alternate" id="about">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={item} className="section-header">
            <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
              About
            </p>
            <h2 className="section-title" style={{ color: 'var(--text-on-alt)' }}>
              Who I am
            </h2>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={item} className="about-bio">
              <p>
                I'm a <strong>Full Stack Developer</strong> passionate about creating elegant
                solutions to complex problems. With expertise in modern web technologies and cloud
                platforms, I build scalable applications that make a difference.
              </p>
              <p>
                My journey in software development has given me a diverse skill set - from
                front-end frameworks to backend systems and cloud infrastructure. I thrive on
                challenges and continuously seek to learn and adapt.
              </p>
            </motion.div>

            <motion.div variants={item} className="expertise-grid">
              {expertise.map((e) => (
                <motion.div
                  key={e.title}
                  className="expertise-card"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="expertise-icon">{e.icon}</div>
                  <h3 className="expertise-title">{e.title}</h3>
                  <p className="expertise-desc">{e.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
