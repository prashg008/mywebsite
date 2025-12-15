import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import SocialLinks from '../MainContainer/SocialLinks.tsx';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="align-items-center min-vh-100">
            <Col lg={12} className="text-center">
              <motion.div variants={itemVariants} className="image-container-premium">
                <motion.img
                  src="https://avatars3.githubusercontent.com/u/38402683?s=460&u=b6d46fb34aacadc2c187b28363dc936b034ed694&v=4"
                  alt="Prashanth's profile"
                  className="profile-pic-premium"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="profile-glow"></div>
              </motion.div>

              <motion.h1 variants={itemVariants} className="hero-title">
                Hi, I'm <span className="gradient-text">Prashanth G</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="hero-subtitle-container">
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
                  wrapper="h2"
                  className="hero-subtitle"
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p variants={itemVariants} className="hero-description">
                Building elegant solutions with modern technologies
              </motion.p>

              <motion.div variants={itemVariants}>
                <SocialLinks />
              </motion.div>

              <motion.div variants={itemVariants} className="hero-cta">
                <Link to="about" smooth={true} offset={-70} duration={500}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="btn-premium me-3">
                      About Me
                      <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </motion.div>
                </Link>
                <Link to="contact" smooth={true} offset={-70} duration={500}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline-light" className="btn-outline-premium">
                      Get In Touch
                      <i className="fas fa-envelope ms-2"></i>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <i className="fas fa-chevron-down"></i>
      </motion.div>
    </section>
  );
};

export default Hero;
