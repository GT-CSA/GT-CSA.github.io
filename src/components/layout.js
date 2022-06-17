import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
const Template = ({ footer = true, children }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
      {footer && <Footer />}
    </>
  )
}

export default Template
