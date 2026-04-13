import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaReact, FaDocker, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiGo, SiJavascript, SiDjango, SiPostgresql } from 'react-icons/si'
import type { ReactNode } from 'react'

interface TechItem {
  name: string
  icon: ReactNode
}

interface CompetencyItem {
  icon: ReactNode
  title: string
  desc: string
}

const techStack: TechItem[] = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Go', icon: <SiGo /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
]

const competencies: CompetencyItem[] = [
  {
    icon: <FaReact />,
    title: 'Full Stack Development',
    desc: 'End-to-end application development with modern frameworks',
  },
  {
    icon: <FaNodeJs />,
    title: 'System Design',
    desc: 'Architecting scalable and maintainable systems',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Management',
    desc: 'Expertise in SQL and NoSQL databases',
  },
  {
    icon: <FaDocker />,
    title: 'Security Best Practices',
    desc: 'Implementing secure coding and deployment practices',
  },
]

const weirdSkills: string[] = [
  'Debugging by staring until it feels guilty',
  'Cold coffee consumption',
  'Finding constellations at 2am',
  'Converting sunset colours to hex codes',
  'Solving bugs mid bike ride',
  'Painting over problems',
  'Naming stars but not CSS classes',
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-primary" id="skills">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={item} className="section-header">
            <p className="section-overline">Tech Stack</p>
            <h2 className="section-title">Skills &amp; Tools</h2>
          </motion.div>

          <motion.div variants={item} className="skill-chips">
            {techStack.map((s) => (
              <motion.div key={s.name} className="skill-chip" whileHover={{ scale: 1.04 }}>
                <span className="skill-chip-icon">{s.icon}</span>
                <span>{s.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="competency-grid">
            {competencies.map((c) => (
              <motion.div key={c.title} variants={item} className="competency-card" whileHover={{ scale: 1.02 }}>
                <div className="competency-icon">{c.icon}</div>
                <h3 className="competency-title">{c.title}</h3>
                <p className="competency-desc">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={item}>
            <p className="weird-skills-label">Other skills</p>
            <div className="skill-chips">
              {weirdSkills.map((s) => (
                <div key={s} className="skill-chip skill-chip--weird">
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
