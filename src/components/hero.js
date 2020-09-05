import React from 'react'
import { Box, Typography, Button, withStyles } from '@material-ui/core'
import bgImg from '../images/slc-dreads-homepage.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './hero.module.css'

const CustomButton = withStyles({
    root: {
        transition: 'all ease 0.8s',
        border: '2px solid #FFDC5C',
        margin: '2.5em auto',
        '&:hover': {
            boxShadow: 'inset 200px 0 0 0 #FFDC5C',
            color: '#000',
            border: '2px solid #FFDC5C'
        }
    }
})(Button)

const CustomBox = withStyles({
    root: {
        backgroundColor: '#FFF',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: '50% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'luminosity',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        '@media (min-width: 600px)': {
            paddingTop:'10vh',
        },
        '@media (min-width: 1366px)': {
            backgroundAttachment: 'fixed',
        }
    }
})(Box)

const H1 = withStyles({
    root: {
        color: '#FFF', 
        width: '90%', 
        textAlign: 'center',
        fontSize: '5.6em',
        margin: '20px auto',
        textShadow: '-1px 1px var(--secondary-dark), -2px 2px var(--secondary-dark), -3px 3px var(--secondary-dark), -4px 4px var(--secondary-dark), -5px 5px var(--secondary-dark), -6px 6px var(--secondary-dark), -7px 7px var(--secondary-dark), -8px 8px var(--secondary-dark)'
    }
})(Typography)

const Hero = ({ sitetitle }) => {
    return(
        <CustomBox
        >
            <H1 variant='h1' component='h1'>
                {sitetitle}
            </H1>
            <CustomButton variant='outlined' color='primary'>Book Appointment</CustomButton>
            <ExpandMoreIcon className={styles.wobbleHorBottom} color='primary' style={{fontSize: '2em', width: '4em', height: '4em'}} />
        </CustomBox>
    )
}

Hero.defaultProps = {
    sitetitle: `Salt Lake City Dreads`,
  }

export default Hero