import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Scalable chat application with WebSocket support, file sharing, and group conversations.',
      technologies: ['React', 'Socket.io', 'Redis', 'PostgreSQL'],
      link: '#',
      github: '#',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'AI-Powered Task Manager',
      description: 'Smart task management system with AI-driven prioritization and automated scheduling.',
      technologies: ['Python', 'Django', 'TensorFlow', 'React'],
      link: '#',
      github: '#',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Cloud Monitoring Dashboard',
      description: 'Comprehensive monitoring solution for cloud infrastructure with real-time metrics and alerts.',
      technologies: ['Go', 'Grafana', 'Prometheus', 'Kubernetes'],
      link: '#',
      github: '#',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-premium">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={projectVariants}>
            Featured Projects
          </motion.h2>
          <Row>
            {projects.map((project, index) => (
              <Col lg={6} key={index} className="mb-4">
                <motion.div
                  className="project-card"
                  variants={projectVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="project-gradient"
                    style={{ background: project.gradient }}
                  />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack mb-3">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} bg="light" text="dark" className="me-2 mb-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.link} className="project-link">
                        <i className="fas fa-external-link-alt me-2"></i>
                        Live Demo
                      </a>
                      <a href={project.github} className="project-link">
                        <i className="fab fa-github me-2"></i>
                        Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
