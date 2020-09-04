import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFDD67',
            main: '#FFDC5C',
            dark: '#FFD747',
            contrastText: '#3D3D3D'
        },
        secondary: {
            light: '#FFCD38',
            main: '#FFCC33',
            dark: '#FFC71F',
            contrastText: '#3D3D3D'
        },
        background: {
            default: '#000000'
        },
        white: {
            main: '#FFF'
        }
    }
})

export default theme