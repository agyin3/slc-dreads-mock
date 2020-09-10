import React, { useState, useEffect } from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { withStyles, Box, Typography, Zoom } from '@material-ui/core'


const ServiceBox = withStyles({
    root: {
        width: '80%',
        margin: '2em auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5% 0',
        '&:nth-child(1)': {
          borderRight: 'none',
          borderBottom: '3px solid var(--secondary-main)'
        },
        '&:nth-child(2)': {
          borderRight: 'none',
          borderBottom: '3px solid var(--secondary-main)'
        },
        '@media (min-width: 1000px)': {
          width: '33%',
          '&:nth-child(1)': {
            borderBottom: 'none',
            borderRight: '3px solid var(--secondary-main)'
          },
          '&:nth-child(2)': {
            borderBottom: 'none',
            borderRight: '3px solid var(--secondary-main)'
          }
      }
    }
})(Box)

const ServicesWrapper = withStyles({
  root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '7.5% 0',
      '@media (min-width: 1000px)': {
          flexDirection: 'row'
      }
  }
})(Box)

const ServiceText = withStyles({
    root: {
        fontSize: '2.4em',
        color: '#FFF',
        padding: '1em 0'
    }
})(Typography)

const Service = ({ scroll, height }) => {
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
        <ServicesWrapper>
          <Zoom in={scroll >= height} timeout={750}>
            <ServiceBox>
                <Img style={{height: '200px', width: '200px', borderRadius: '50%'}} fluid={data.image1.childImageSharp.fluid} />
                <ServiceText component='p'>
                    New Dreadlocks
                </ServiceText>
            </ServiceBox>
          </Zoom>

          <Zoom 
          in={scroll >= height} 
          timeout={750} 
          style={{transitionDelay:'250ms'}}
          >
            <ServiceBox>
                <Img style={{height: '200px', width: '200px', borderRadius: '50%'}} fluid={data.image2.childImageSharp.fluid} />
                <ServiceText component='p'>
                    Maintanence
                </ServiceText>
            </ServiceBox>
          </Zoom>

          <Zoom 
          in={scroll >= height} 
          timeout={750} 
          style={{transitionDelay: '500ms'}}
          >
            <ServiceBox>
                <Img style={{height: '200px', width: '200px', borderRadius: '50%'}} fluid={data.image3.childImageSharp.fluid} />
                <ServiceText component='p'>
                    Wraps & Beads
                </ServiceText>
            </ServiceBox>
          </Zoom>
        </ServicesWrapper>
    )
}

export default Service