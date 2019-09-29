import React, { Fragment } from 'react'
import { Header, Footer } from './layouts/'
import Excercises from './Excercises'
import { CssBaseline } from '@material-ui/core'

export const VinylApp = () => (
  <Fragment>
    <CssBaseline/>
    <Header/>

    <Excercises/>

    <Footer/>
  </Fragment>
)