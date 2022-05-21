import React from 'react'

import Container from '../components/container'
import Layout from '../components/layout'
import Logo from '../images/Logo.inline.svg'

const NotFound = () => (
  <Layout>
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h1>There is no page at this URL!</h1>
        <p>
          It may be under construction still, or an invalid URL has been
          entered. Thank you for your patience, and please contact us if you
          have encountered an error.
        </p>
        <Logo />
      </div>
    </Container>
  </Layout>
)

export default NotFound
