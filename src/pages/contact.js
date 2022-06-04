import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'

const Contact = ({ data }) => {
  //https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
  const { hero } = data
  return (
    <Layout>
      <Hero hero={hero} />
      test
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    hero: contentfulPageHero(
      id: { eq: "837eb7f5-b484-51a8-b73b-9d10751382a2" }
    ) {
      title
      subtitle
      description: longDescription {
        raw
      }
      images {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`
