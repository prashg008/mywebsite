import {Fragment} from 'react'

import { Container } from 'react-bootstrap';

import Title from './Title.js'
import SocialLinks from './SocialLinks.js'
import Skills from './Skills.js'


const MainContainer = () => {
    return (
        <Fragment >
            <div className="bg-layer-2"></div>
            <Container>
                <Title/>
                <SocialLinks/>
                <Skills/>
            </Container>
        </Fragment>
    )
}


export default MainContainer;