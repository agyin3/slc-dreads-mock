import React from 'react'
import { withStyles, Box} from '@material-ui/core'
import SubHeading from '../ui/SubHeading'
import AboutInfo from './aboutInfo'

const AboutBox = withStyles({
    root: {
        backgroundColor: 'var(--black)',
        padding: '7.5% 0'
    }
})(Box)

const About = () => {
    return(
        <AboutBox>
            <SubHeading text='About Us' />
            <AboutInfo />
        </AboutBox>
    )
}

export default About