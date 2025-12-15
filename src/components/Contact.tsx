import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
    <section id="contact" className="section-premium">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <motion.div className="glass-card text-center" variants={itemVariants}>
                <h3 className="mb-4">Let's Work Together</h3>
                <p className="mb-4" style={{ fontSize: '1.1rem', color: '#cbd5e0', lineHeight: '1.8' }}>
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="contact-info-horizontal">
                  <motion.div
                    className="contact-item-inline"
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href="mailto:prashanthg008@gmail.com" className="contact-link-inline">
                      <i className="fas fa-envelope fa-2x mb-2"></i>
                      <h5>Email</h5>
                      <span>prashanthg008@gmail.com</span>
                    </a>
                  </motion.div>

                  <motion.div
                    className="contact-item-inline"
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href="https://www.linkedin.com/in/prashanthg008/" target="_blank" rel="noreferrer" className="contact-link-inline">
                      <i className="fab fa-linkedin fa-2x mb-2"></i>
                      <h5>LinkedIn</h5>
                      <span>Connect with me</span>
                    </a>
                  </motion.div>

                  <motion.div
                    className="contact-item-inline"
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href="https://github.com/prashg008" target="_blank" rel="noreferrer" className="contact-link-inline">
                      <i className="fab fa-github fa-2x mb-2"></i>
                      <h5>GitHub</h5>
                      <span>Check out my work</span>
                    </a>
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

export default Contact;
