import React from 'react'
import { withStyles, Box, Typography } from '@material-ui/core'
import Service from './service'

const ServicesBox = withStyles({
    root: {
        backgroundColor: 'var(--black)',
        padding: '7.5% 0'
    }
})(Box)

const ServicesHeading = withStyles({
    root: {
        color: 'var(--white)',
        textAlign: 'center'
    }
})(Typography)


const Services = () => {
    return(
        <ServicesBox>
            <ServicesHeading variant='h2' component='h2'>
                Featured Services
            </ServicesHeading>
            <Service />
        </ServicesBox>
    )
}

export default Services