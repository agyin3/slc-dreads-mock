import React from 'react'
import { Box, Typography, Button, withStyles, Icon } from '@material-ui/core'
import bgImg from '../images/slc-dreads-homepage.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
            paddingTop:'10vh'
        }
    }
})(Box)

const H1 = withStyles({
    root: {
        color: '#FFF', 
        width: '90%', 
        textAlign: 'center',
        fontSize: '5.6em',
        fontFamily: 'Yanone Kaffeesatz, cursive',
        margin: '20px auto'
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
            <ExpandMoreIcon color='primary' style={{fontSize: '2em', width: '4em', height: '4em'}} />
        </CustomBox>
    )
}

Hero.defaultProps = {
    sitetitle: `Salt Lake City Dreads`,
  }

export default Hero