import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar
        expand="lg"
        expanded={expanded}
        className="navbar-glass fixed-top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-premium">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="brand-text"
            >
              Prashanth G
            </motion.span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {['home', 'about', 'skills', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link-premium"
                  onClick={() => setExpanded(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
