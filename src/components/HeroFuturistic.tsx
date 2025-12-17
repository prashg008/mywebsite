import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket } from 'react-icons/fa';

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
      transition: { duration: 0.8 },
    },
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
              <motion.a
                href="https://github.com/prashg008"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-futuristic"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prashanthg008/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-futuristic"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:prashanthg008@gmail.com"
                className="social-link-futuristic"
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1]
              }}
              style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                fontSize: '3rem',
                color: 'var(--nebula-violet)',
                filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))',
                opacity: 0.6,
                zIndex: 1
              }}
            >
              <FaRocket style={{ transform: 'rotate(45deg)' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroFuturistic;
