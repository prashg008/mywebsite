import {Fragment} from 'react'
import SubTitle from './SubTitle.js'
import { Row } from 'react-bootstrap';

const Title = () => {
    return (
    <Fragment>
      <Row className='title'>
         Hi I'm Prashanth
      </Row>
      <Row className='image-container'>
      <img
        src="https://avatars3.githubusercontent.com/u/38402683?s=460&v=4"
        className="profile-pic"
      />
      </Row>
      <div className="subtitle_wrapper">
        <SubTitle/>
      </div>
    </Fragment>
    )
}

export default Title
