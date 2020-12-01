import React from 'react'
import Typed from 'react-typed';

const SubTitle = () => {
    return (
            <Typed
            className="subtitle"
                strings={[
                    "I like to code",
                    "I like to code",
                    "I like to create",
                    "I like to play",
                    "I like to listen"]}
                typeSpeed={50}
                backSpeed={35}
                startDelay={500}
                loop >
        </Typed>
    )
}

export default SubTitle
