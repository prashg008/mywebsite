import { Fragment } from 'react';

import { Container } from 'react-bootstrap';

import Title from './Title.tsx';
import SocialLinks from './SocialLinks.tsx';
import Skills from './Skills.tsx';

const MainContainer = () => {
  return (
    <Fragment>
      <div className="bg-layer-2"></div>
      <Container>
        <Title />
        <SocialLinks />
        <Skills />
      </Container>
    </Fragment>
  );
};

export default MainContainer;