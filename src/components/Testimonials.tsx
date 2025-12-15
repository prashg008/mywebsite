import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, Tech Innovators Inc.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: 'Prashanth is an exceptional developer who consistently delivers high-quality work. His ability to solve complex problems and mentor others makes him invaluable to our team.',
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager, Digital Solutions Co.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      text: 'Working with Prashanth has been a pleasure. He has a keen eye for detail and always goes above and beyond to ensure projects are delivered on time and exceed expectations.',
    },
    {
      name: 'Emily Davis',
      position: 'Lead Designer, Startup Ventures',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      text: 'Prashanth brings technical excellence and creative problem-solving to every project. His collaborative approach makes him a joy to work with.',
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="testimonials" className="section-premium">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Testimonials
          </motion.h2>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <motion.div
                  className="testimonial-card glass-card"
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.position}</p>
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

export default Testimonials;
