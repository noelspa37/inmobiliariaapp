import { } from '@material-ui/core/style'

const theme = createMuiThem({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#10A75F'
        },
        common: {
            white: 'white'
        },
        secondary: {
            main: '#e53935'
        }
    },
    spacing: 10
})

export default theme