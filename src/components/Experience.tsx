import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      position: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Leading development of cloud-native applications and microservices architecture. Mentoring junior developers and establishing best practices.',
      achievements: [
        'Reduced deployment time by 60% through CI/CD optimization',
        'Led migration to Kubernetes, improving scalability',
        'Implemented monitoring system reducing downtime by 40%',
      ],
    },
    {
      position: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using React, Node.js, and Python. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Built real-time analytics dashboard serving 10K+ users',
        'Improved application performance by 45%',
        'Integrated third-party APIs and payment systems',
      ],
    },
    {
      position: 'Software Developer',
      company: 'Startup Ventures',
      period: '2018 - 2020',
      description: 'Worked on building MVPs and prototypes for various projects. Gained experience in rapid development and agile methodologies.',
      achievements: [
        'Developed 5+ MVPs from concept to deployment',
        'Implemented responsive designs for mobile platforms',
        'Collaborated with design team on UX improvements',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="section-premium">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Work Experience
          </motion.h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <h3>{exp.position}</h3>
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle me-2"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
