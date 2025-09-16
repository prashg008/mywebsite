import { Container } from 'react-bootstrap';
import go from '../static/Images/go.png';
import python from '../static/Images/python.png';
import js from '../static/Images/js.png';
import react from '../static/Images/react.png';
import django from '../static/Images/django.png';

const Skills = () => {
  return (
    <Container className='skill-wrapper'>
      <h3 className='skill-title'>Skills</h3>
      <div className="skillsContainer">
        <div className="skillsCard">
          <img className="skillsImage" src={python} alt="python" />
          Python
        </div>
        <div className="skillsCard">
          <img className="skillsImage" src={go} alt="Golang" />
          Golang
        </div>
        <div className="skillsCard">
          <img className="skillsImage" src={js} alt="JavaScript" />
          JavaScript
        </div>
        <div className="skillsCard">
          <img className="skillsImage" src={react} alt="React" />
          React
        </div>
        <div className="skillsCard">
          <img className="skillsImage" src={django} alt="Django" />
          Django
        </div>
      </div>
    </Container>
  );
};

export default Skills;