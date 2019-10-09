import React, { Fragment } from 'react'
import { Header, Footer } from './layouts/'
import Excercises from './Excercises'
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { orange, red } from '@material-ui/core/colors'
//#590222 30%, #F2059F 90%
const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: '#F2059F'
    },
    secondary: {
      main: '#590222'
    },
    background: {
      default: red[50]
    }
  }
});


export const VinylApp = () => (
    <Fragment>
      <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>

      <Excercises/>

      <Footer/>
      </MuiThemeProvider>
    </Fragment>
/*  </MuiThemeProvider>*/
)