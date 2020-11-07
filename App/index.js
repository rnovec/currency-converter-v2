import React from 'react'
import Navigation from './navigation'
import { ConversionContextProvider } from './util/ConversionContext'

export default () => (
  <ConversionContextProvider>
    <Navigation />
  </ConversionContextProvider>
)
