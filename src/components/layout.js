import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
const Template = ({ children }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main style={{ paddingTop: 'var(--size-max-nav)' }}>{children}</main>
      <Footer />
    </>
  )
}

export default Template
