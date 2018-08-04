import { createMuiTheme } from '@material-ui/core/styles'

const darkGrey = '#4f5d73'
const orange = '#e0995e'
const cream = '#e0e0d1'
const white = '#ffffff'
const red = '#c75c5c'

const defaults = {
  palette: {
    primary: {
      main: red
    },
    secondary: {
      main: orange
    }
  },
  typography: {
    fontFamily: [
      '"Quicksand"',
      '"Roboto"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif'
    ].join(',')
  }
}

export const lightTheme = createMuiTheme({
  ...defaults,
  palette: {
    ...defaults.palette,
    type: 'light'
  }
})

export const darkTheme = createMuiTheme({
  ...defaults,
  palette: {
    ...defaults.palette,
    type: 'dark'
  }
})

export default lightTheme
