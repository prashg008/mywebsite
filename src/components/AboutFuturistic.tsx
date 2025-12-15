import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaCloud, FaMobileAlt } from 'react-icons/fa';

const AboutFuturistic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const expertise = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building responsive and interactive web applications',
    },
    {
      icon: <FaServer />,
      title: 'Backend Systems',
      description: 'Designing scalable and efficient server architectures',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Deploying and managing cloud infrastructure',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile First',
      description: 'Creating seamless mobile experiences',
    },
  ];

  return (
    <section className="section-futuristic" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title-futuristic gradient-cyber-text">ABOUT ME</h2>
          </motion.div>

          <div className="row g-4">
            <div className="col-lg-6">
              <motion.div variants={itemVariants} className="glass-card-futuristic h-100">
                <h3 className="gradient-cyber-text mb-4" style={{ fontSize: '1.8rem' }}>
                  Who Am I?
                </h3>
                <p className="text-secondary mb-3" style={{ lineHeight: '1.8' }}>
                  I'm a <strong className="text-white">Full Stack Developer</strong> passionate
                  about creating elegant solutions to complex problems. With expertise in modern
                  web technologies and cloud platforms, I build scalable applications that make a
                  difference.
                </p>
                <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                  My journey in software development has equipped me with a diverse skill set,
                  ranging from front-end frameworks to backend systems and cloud infrastructure. I
                  thrive on challenges and continuously seek to learn and adapt to new technologies.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div variants={itemVariants}>
                <h3 className="gradient-cyber-text mb-4" style={{ fontSize: '1.8rem' }}>
                  Expertise
                </h3>
                <div className="row g-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="col-6">
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="glass-card-futuristic text-center p-4"
                      >
                        <div
                          className="mb-3"
                          style={{ fontSize: '2.5rem', color: 'var(--primary-cyan)' }}
                        >
                          {item.icon}
                        </div>
                        <h5
                          className="text-white mb-2"
                          style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem' }}
                        >
                          {item.title}
                        </h5>
                        <p className="text-secondary" style={{ fontSize: '0.85rem' }}>
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFuturistic;
