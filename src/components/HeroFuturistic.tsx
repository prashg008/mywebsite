import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroFuturistic = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-futuristic" id="home">
      <div className="container">
        <motion.div
          className="row align-items-center justify-content-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="col-lg-10">
            <motion.div variants={itemVariants} className="profile-container-futuristic">
              <div className="profile-glow-outer"></div>
              <div className="profile-glow-inner"></div>
              <img
                src="https://avatars.githubusercontent.com/u/38402683?v=4"
                alt="Prashanth G"
                className="profile-pic-futuristic"
              />
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title-futuristic">
              Hi, I'm <span className="gradient-cyber-text">PRASHANTH G</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="hero-subtitle-futuristic">
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

            <motion.p variants={itemVariants} className="hero-description-futuristic">
              Building elegant solutions with modern technologies. Passionate about creating
              scalable applications and solving complex problems.
            </motion.p>

            <motion.div variants={itemVariants} className="social-links-futuristic">
              <a
                href="https://github.com/prashg008"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-futuristic"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/prashanthg008/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-futuristic"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:prashanthg008@gmail.com"
                className="social-link-futuristic"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroFuturistic;
