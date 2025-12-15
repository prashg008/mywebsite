import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import python from '../static/Images/python.png';
import go from '../static/Images/go.png';
import js from '../static/Images/js.png';
import react from '../static/Images/react.png';
import django from '../static/Images/django.png';

const SkillsEnhanced = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    {
      name: 'Python',
      icon: python,
    },
    {
      name: 'Golang',
      icon: go,
    },
    {
      name: 'JavaScript',
      icon: js,
    },
    {
      name: 'React',
      icon: react,
    },
    {
      name: 'Django',
      icon: django,
    },
    {
      name: 'Docker',
      icon: null,
    },
    {
      name: 'Node.js',
      icon: null,
    },
    {
      name: 'PostgreSQL',
      icon: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-premium">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={skillVariants}>
            Skills & Expertise
          </motion.h2>
          <Row>
            <Col lg={6}>
              <motion.div className="glass-card" variants={skillVariants}>
                <h3 className="mb-4">Technical Skills</h3>
                <div className="skills-grid-simple">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-card-simple"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      {skill.icon && (
                        <img src={skill.icon} alt={skill.name} className="skill-icon-large" />
                      )}
                      {!skill.icon && (
                        <i className="fas fa-code skill-icon-fallback-large"></i>
                      )}
                      <span className="skill-name-simple">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div className="glass-card" variants={skillVariants}>
                <h3 className="mb-4">Core Competencies</h3>
                <div className="competencies-grid">
                  <motion.div
                    className="competency-card"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fas fa-laptop-code fa-3x mb-3"></i>
                    <h5>Full Stack Development</h5>
                    <p>Building end-to-end web applications</p>
                  </motion.div>
                  <motion.div
                    className="competency-card"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fas fa-cogs fa-3x mb-3"></i>
                    <h5>System Design</h5>
                    <p>Architecting scalable solutions</p>
                  </motion.div>
                  <motion.div
                    className="competency-card"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fas fa-database fa-3x mb-3"></i>
                    <h5>Database Management</h5>
                    <p>SQL and NoSQL expertise</p>
                  </motion.div>
                  <motion.div
                    className="competency-card"
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fas fa-shield-alt fa-3x mb-3"></i>
                    <h5>Security Best Practices</h5>
                    <p>Implementing secure code</p>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default SkillsEnhanced;
