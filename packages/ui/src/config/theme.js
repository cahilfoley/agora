import { createMuiTheme } from '@material-ui/core/styles'

// const darkGrey = '#4f5d73'
const orange = '#e0995e'
// const cream = '#e0e0d1'
// const white = '#ffffff'
const red = '#c75c5c'

const fontFamily = [
  '"Quicksand"',
  '"Roboto"',
  '"Helvetica"',
  '"Arial"',
  'sans-serif'
].join(',')

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
    display4: { fontFamily },
    display3: { fontFamily },
    display2: { fontFamily },
    display1: { fontFamily },
    headline: { fontFamily },
    title: { fontFamily }
    // subheading: { fontFamily }
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
