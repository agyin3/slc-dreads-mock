import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { withStyles, Box, Typography, Slide } from '@material-ui/core'
import styles from './about.module.css'

const InfoWrapper = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2em auto',
        padding: '5% 0',
        alignItems: 'center',
        justifyContent: 'space-around',
        '@media (min-width: 700px)': {
            justifyContent: 'space-evenly',
        },
        '@media (min-width: 1000px)': {
            flexDirection: 'row'
        }
    }
})(Box)

const AboutText = withStyles({
    root: {
        fontSize: '2em',
        fontWeight: 500,
        color: 'var(--white)',

    }
})(Typography)

const InfoHeading = withStyles({
    root: {
        fontSize: '4.6em',
        fontWeight: 500,
        color: 'var(--primary-main)',
        marginLeft: 'auto',
        marginRight: 'auto',
        '@media (min-width: 550px)': {
            textAlign: 'center'
        }
    }
})(Typography)

const TextWrapper = withStyles({
    root: {
        width: '80%',
        '@media (min-width: 1000px)': {
            width: '50%'
        }
    }
})(Box)

const AboutInfo = ({ scroll, height }) => {
    const data = useStaticQuery(graphql`
      query {
        image1: file(relativePath: { eq: "about_us.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <InfoWrapper>
            <Slide direction='right' in={scroll >= height * 3} timeout={1000}>
            <Img className={styles.aboutImg} fluid={data.image1.childImageSharp.fluid} />
            </Slide>
            <TextWrapper>
                <Slide direction='left' in={scroll >= height * 3} timeout={1000}>
                <InfoHeading variant='h2' component='p' gutterBottom>
                    Making Utah Cool<br/> One DreadLock At A Time
                </InfoHeading>
                </Slide>
                
                <Slide direction='up' in={scroll >= height * 3} timeout={1000}>
                <AboutText component='p' gutterBottom>
                    Have you always wanted dreadlocks but didn't know where to start? Well... now there is a solution "Salt Lake City Dreadlock Shop" can give you dreads in Salt Lake City, Utah.  
                </AboutText>
                </Slide>
                <Slide direction='up' in={scroll >= height * 3} timeout={1000}>
                <AboutText component='p' gutterBottom>
                    We use an Asian method called the "crochet method" were we back comb then "crochet" your dreads into place. Then your dread journey begins. 
                </AboutText>
                </Slide>
            </TextWrapper>
        </InfoWrapper>
    )
}

export default AboutInfo