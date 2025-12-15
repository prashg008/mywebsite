import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaReact, FaDocker, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiGo, SiJavascript, SiDjango, SiPostgresql } from 'react-icons/si';

const SkillsFuturistic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skills = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Golang', icon: <SiGo />, color: '#00ADD8' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  ];

  const competencies = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end application development with modern frameworks',
      icon: <FaReact />,
    },
    {
      title: 'System Design',
      description: 'Architecting scalable and maintainable systems',
      icon: <FaNodeJs />,
    },
    {
      title: 'Database Management',
      description: 'Expertise in SQL and NoSQL databases',
      icon: <FaDatabase />,
    },
    {
      title: 'Security Best Practices',
      description: 'Implementing secure coding and deployment practices',
      icon: <FaDocker />,
    },
  ];

  return (
    <section className="section-futuristic" id="skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title-futuristic gradient-cyber-text">TECH STACK</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-5">
            <h3
              className="text-center mb-4 gradient-cyber-text"
              style={{ fontSize: '2rem', fontFamily: 'Orbitron, sans-serif' }}
            >
              Technologies
            </h3>
            <div className="skills-grid-futuristic">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="skill-card-futuristic"
                >
                  <div
                    className="skill-icon-futuristic"
                    style={{ fontSize: '4rem', color: 'var(--primary-cyan)' }}
                  >
                    {skill.icon}
                  </div>
                  <div className="skill-name-futuristic">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3
              className="text-center mb-4 gradient-cyber-text"
              style={{ fontSize: '2rem', fontFamily: 'Orbitron, sans-serif' }}
            >
              Core Competencies
            </h3>
            <div className="row g-4">
              {competencies.map((competency, index) => (
                <div key={index} className="col-md-6">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card-futuristic h-100"
                  >
                    <div
                      className="mb-3"
                      style={{ fontSize: '3rem', color: 'var(--primary-cyan)' }}
                    >
                      {competency.icon}
                    </div>
                    <h5
                      className="text-white mb-3"
                      style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.3rem' }}
                    >
                      {competency.title}
                    </h5>
                    <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                      {competency.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsFuturistic;
