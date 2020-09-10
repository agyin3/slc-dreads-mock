import React, { useState, useEffect } from 'react'
import { Typography, Box, withStyles, Slide } from '@material-ui/core'

const StepsWrapper = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '70%',
        padding: '5% 1.5em',
        '@media (min-width: 1000px)': {
            padding: '.5% 1.5em',
            height: '90%'
        }
    }
})(Box)

const StepsBox = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: '30%',
        '@media (min-width:1000px)': {
            marginBottom: '2em'
        }
    }
})(Box)

const NumberText = withStyles({
    root: {
        fontSize: '9em',
        fontWeight: 800,
        color: 'var(--primary-dark)'
    }
})(Typography)

const BookText = withStyles({
    root: {
        fontSize: '2.4em',
        fontStyle: 'italic',
        fontWeight: 500,
        color: 'var(--white)',
        width: '80%'
    }
})(Typography)

const Steps = ({ scroll, height }) => {
    return(
        <StepsWrapper>
            <Slide in={scroll >= height * 2.25} direction='right' timeout={750}>
                <StepsBox>
                    <NumberText variant='h1' component='p'>
                        1
                    </NumberText>
                    <BookText>
                        Text us a picture of your hair to <span style={{color: 'var(--primary-dark)', fontWeight: 800, textDecoration: 'none'}}>(801) 824-8298</span>
                    </BookText>
                </StepsBox>
            </Slide>

            <Slide in={scroll >= height * 2.25} direction='right' timeout={750} style={{transitionDelay: '250ms'}}>
                <StepsBox style={{alignSelf: 'center'}}>
                    <NumberText variant='h1' component='p'>
                        2
                    </NumberText>
                    <BookText>
                        Include your name and what you’re looking for
                    </BookText>
                </StepsBox>
            </Slide>

            <Slide in={scroll >= height * 2.25} direction='right' timeout={750} style={{transitionDelay: '500ms'}}>
                <StepsBox style={{alignSelf: 'flex-end'}}>
                    <NumberText variant='h1' component='p'>
                        3
                    </NumberText>
                    <BookText>
                        Wait for a reply from our awesome team
                    </BookText>
                </StepsBox>
            </Slide>
        </StepsWrapper>
    )
}

export default Steps