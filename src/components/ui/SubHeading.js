import React from 'react'
import { withStyles, Typography} from '@material-ui/core'

const SubHeading = withStyles({
    root: {
        color: 'var(--white)',
        textAlign: 'center'
    }
})(Typography)

export default ({ text }) => <SubHeading variant='h2' component='h2'> { text } </SubHeading>