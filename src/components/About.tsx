import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="section-premium">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div className="glass-card" variants={itemVariants}>
                <h3 className="gradient-text">Full Stack Developer</h3>
                <p className="about-text">
                  I'm a passionate software engineer with expertise in building scalable web applications
                  and cloud-native solutions. With a strong foundation in both frontend and backend technologies,
                  I specialize in creating elegant, efficient, and user-centric digital experiences.
                </p>
                <p className="about-text">
                  My journey in software development has been driven by curiosity and a constant desire to
                  learn and adapt to new technologies. I believe in writing clean, maintainable code and
                  following best practices to deliver high-quality solutions.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div className="glass-card" variants={itemVariants}>
                <h4 className="mb-4">What I Do</h4>
                <div className="expertise-grid">
                  <div className="expertise-item">
                    <i className="fas fa-code fa-2x mb-3"></i>
                    <h5>Web Development</h5>
                    <p>Building responsive, performant web applications using modern frameworks</p>
                  </div>
                  <div className="expertise-item">
                    <i className="fas fa-server fa-2x mb-3"></i>
                    <h5>Backend Systems</h5>
                    <p>Designing robust APIs and microservices architecture</p>
                  </div>
                  <div className="expertise-item">
                    <i className="fas fa-cloud fa-2x mb-3"></i>
                    <h5>Cloud Solutions</h5>
                    <p>Deploying and managing scalable cloud infrastructure</p>
                  </div>
                  <div className="expertise-item">
                    <i className="fas fa-mobile-alt fa-2x mb-3"></i>
                    <h5>Mobile First</h5>
                    <p>Creating seamless experiences across all devices</p>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
