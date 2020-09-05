import React from 'react'
import { withStyles, Box } from '@material-ui/core'
import Service from './service'
import SubHeading from '../ui/SubHeading'

const ServicesBox = withStyles({
    root: {
        backgroundColor: 'var(--black)',
        padding: '7.5% 0'
    }
})(Box)


const Services = () => {
    return(
        <ServicesBox>
            <SubHeading text='Featured Services' />
            <Service />
        </ServicesBox>
    )
}

export default Services