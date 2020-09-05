import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { withStyles, Box, Typography } from '@material-ui/core'
import styles from './about.module.css'

const InfoWrapper = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '100vh',
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
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})(Typography)

const InfoHeading = withStyles({
    root: {
        fontSize: '4.6em',
        fontWeight: 500,
        color: 'var(--primary-main)',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})(Typography)

const AboutInfo = () => {
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
        <Img className={styles.aboutImg} fluid={data.image1.childImageSharp.fluid} />
        <Box>
        <InfoHeading variant='h2' component='p' gutterBottom>
            Making Utah Cool One DreadLock At A Time
        </InfoHeading>
        <AboutText component='p' gutterBottom>
            Have you always wanted dreadlocks but didn't know where to start? Well... now there is a solution "Salt Lake City Dreadlock Shop" can give you dreads in Salt Lake City, Utah.  
        </AboutText>

        <AboutText component='p' gutterBottom>
            We use an Asian method called the "crochet method" were we back comb then "crochet" your dreads into place. Then your dread journey begins. 
        </AboutText>
        </Box>
        </InfoWrapper>
    )
}

export default AboutInfo