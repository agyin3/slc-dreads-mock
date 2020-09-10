import React from 'react'
import { withStyles, Box } from '@material-ui/core'
import Service from './service'
import SubHeading from '../ui/SubHeading'

const ServicesBox = withStyles({
    root: {
        backgroundColor: 'var(--black)',
        padding: '3% 0'
    }
})(Box)


const Services = ({ scroll, height }) => {
    return(
        <ServicesBox>
            <SubHeading text='Featured Services' />
            <Service scroll={scroll} height={height} />
        </ServicesBox>
    )
}

export default Services