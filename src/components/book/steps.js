import React, { useState } from 'react'
import { Typography, Box, withStyles, Slide } from '@material-ui/core'

const StepsWrapper = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '70%',
        padding: '0, 2.5em'
    }
})(Box)

const StepsBox = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: '30%'
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

const Steps = () => {
    const [scroll, setScroll] = useState(window.scrollY)
    window.addEventListener('scroll', () => setScroll(window.scrollY))

    return(
        <StepsWrapper>
            <Slide in={scroll >= window.innerHeight * 2} direction='right' timeout={750}>
                <StepsBox>
                    <NumberText variant='h1' component='p'>
                        1
                    </NumberText>
                    <BookText>
                        Text us a picture of your hair to <span style={{color: 'var(--primary-dark)', fontWeight: 800}}>(801) 824-8298</span>
                    </BookText>
                </StepsBox>
            </Slide>

            <Slide in={scroll >= window.innerHeight * 2} direction='right' timeout={750} style={{transitionDelay: '250ms'}}>
                <StepsBox style={{alignSelf: 'center'}}>
                    <NumberText variant='h1' component='p'>
                        2
                    </NumberText>
                    <BookText>
                        Include your name and what you’re looking for
                    </BookText>
                </StepsBox>
            </Slide>

            <Slide in={scroll >= window.innerHeight * 2} direction='right' timeout={750} style={{transitionDelay: '500ms'}}>
                <StepsBox style={{alignSelf: 'flex-end'}}>
                    <NumberText variant='h1' component='p'>
                        3
                    </NumberText>
                    <BookText>
                        Wait for a response from our awesome team
                    </BookText>
                </StepsBox>
            </Slide>
        </StepsWrapper>
    )
}

export default Steps