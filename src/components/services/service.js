import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { withStyles, Box, Typography } from '@material-ui/core'


const ServiceBox = withStyles({
    root: {
        width: '80%',
        margin: '2em auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5% 0',
    }
})(Box)

const ServiceText = withStyles({
    root: {
        fontSize: '2.4em',
        color: '#FFF',
        padding: '1em 0'
    }
})(Typography)

const Service = () => {
    const data = useStaticQuery(graphql`
      query {
        image1: file(relativePath: { eq: "services_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "services_2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "services_3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <>
        <ServiceBox style={{borderBottom: '3px solid var(--secondary-main)'}}>
            <Img style={{height: '200px', width: '200px', borderRadius: '50%'}} fluid={data.image1.childImageSharp.fluid} />
            <ServiceText component='p'>
                New Dreadlocks
            </ServiceText>
        </ServiceBox>

        <ServiceBox style={{borderBottom: '3px solid var(--secondary-main)'}}>
            <Img style={{height: '200px', width: '200px', borderRadius: '50%'}} fluid={data.image2.childImageSharp.fluid} />
            <ServiceText component='p'>
                Maintanence
            </ServiceText>
        </ServiceBox>

        <ServiceBox>
            <Img style={{height: '200px', width: '200px', borderRadius: '50%'}} fluid={data.image3.childImageSharp.fluid} />
            <ServiceText component='p'>
                Wraps & Beads
            </ServiceText>
        </ServiceBox>
        </>
    )
}

export default Service