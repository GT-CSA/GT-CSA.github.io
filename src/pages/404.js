import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import Container from '../components/container'
import Layout from '../components/layout'
import Logo from '../images/Logo.inline.svg'

const NotFound = ({ data }) => {
  const { title, subtitle, images } = data.data
  return (
    <Layout>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <h1>{title ? title : 'There is no page at this URL!'}</h1>
          <p>
            {subtitle
              ? subtitle
              : 'It may be under construction still, or an invalid URL has been entered. Thank you for your patience, and please contact us if you have encountered an error.'}
          </p>
          {images && images[0]?.gatsbyImageData ? (
            <GatsbyImage image={images[0]?.gatsbyImageData} alt={title} />
          ) : (
            <Logo />
          )}
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query NotFoundQuery {
    data: contentfulHomeHero(
      id: { eq: "0f3e76e6-d98c-56ad-8c4d-536a32a87eb2" }
    ) {
      title
      subtitle
      images {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`

export default NotFound
