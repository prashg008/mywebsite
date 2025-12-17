import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactFuturistic = () => {
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

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'prashanthg008@gmail.com',
      link: 'mailto:prashanthg008@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/prashanthg008',
      link: 'https://www.linkedin.com/in/prashanthg008/',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/prashg008',
      link: 'https://github.com/prashg008',
    },
  ];

  return (
    <section className="section-futuristic" id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title-futuristic gradient-cyber-text">GET IN TOUCH</h2>
            <p className="text-secondary mt-3" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Let's collaborate and build something amazing together. Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <div className="contact-grid-futuristic">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="contact-item-futuristic text-decoration-none"
              >
                <motion.div
                  className="contact-icon-futuristic"
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {method.icon}
                </motion.div>
                <motion.h5
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {method.title}
                </motion.h5>
                <span className="text-secondary">{method.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFuturistic;
