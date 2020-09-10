import React from 'react'
import { withStyles, Box} from '@material-ui/core'
import SubHeading from '../ui/SubHeading'
import AboutInfo from './aboutInfo'

const AboutBox = withStyles({
    root: {
        backgroundColor: 'var(--black)',
        padding: '3% 0',
    }
})(Box)

const About = ({ scroll, height }) => {
    return(
        <AboutBox>
            <SubHeading text='About Us' />
            <AboutInfo scroll={scroll} height={height} />
        </AboutBox>
    )
}

export default About