import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsFuturistic = () => {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Scalable chat platform supporting thousands of concurrent users with features like group messaging, file sharing, and video calls.',
      tech: ['React', 'Socket.io', 'Redis', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #00f5ff 0%, #b537f2 100%)',
    },
    {
      title: 'AI-Powered Task Manager',
      description:
        'Intelligent task management system that uses machine learning to prioritize tasks, predict completion times, and optimize workflows.',
      tech: ['Python', 'Django', 'TensorFlow', 'React'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Cloud Monitoring Dashboard',
      description:
        'Comprehensive monitoring solution for cloud infrastructure with real-time metrics, alerting, and predictive analytics.',
      tech: ['Go', 'Grafana', 'Prometheus', 'Kubernetes'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  return (
    <section className="section-futuristic" id="projects">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title-futuristic gradient-cyber-text">FEATURED PROJECTS</h2>
          </motion.div>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="project-card-futuristic"
                >
                  <div
                    className="project-gradient-futuristic"
                    style={{ background: project.gradient }}
                  ></div>
                  <div className="project-content-futuristic">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsFuturistic;
