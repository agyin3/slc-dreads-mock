import React from 'react'
import bgImg from '../../images/slc-dreads-bg-2.jpg'
import { withStyles, Box } from '@material-ui/core'
import SubHeading from '../ui/SubHeading'
import Steps from './steps'

const BookBox = withStyles({
    root: {
        backgroundColor: '#FFF',
        backgroundPosition: '50% 0%',
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'luminosity',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding: '7.5% 0',
        '@media (min-width: 1366px)': {
            backgroundAttachment: 'fixed',
        }
    }
})(Box)

const Book = () => {
    return(
        <BookBox>
            <SubHeading text='Book Appointment' />
            <Steps />
        </BookBox>
    )
}

export default Book