import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/home-hero'
import HeroButton from '../components/hero-button'
import HomeBlob from '../components/home-blob'

class RootIndex extends React.Component {
  render() {
    const blobs = get(this, 'props.data.allContentfulHomeBlob.nodes')
    const hero = get(this, 'props.data.contentfulHomeHero')
    return (
      <Layout location={this.props.location}>
        <Hero
          image={hero.images[0].gatsbyImageData}
          title={hero.title}
          subtitle={hero.subtitle}
        >
          <HeroButton link={hero.linkSlug} text={hero.linkText} />
        </Hero>
        {blobs.map((blob) => (
          <HomeBlob
            key={blob.title}
            title={blob.title}
            description={blob.description}
            slug={blob.slug}
            path={blob.blobPath.blobPath}
            image={blob.image.file.url}
            blobOnLeft={blob.blobOnLeft}
          />
        ))}
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomeBlob(sort: { fields: [order], order: ASC }) {
      nodes {
        title
        description {
          raw
        }
        slug
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          file {
            url
          }
        }
        blobPath {
          blobPath
        }
        blobOnLeft
      }
    }
    contentfulHomeHero(id: { eq: "5b07114c-e021-5c74-92f3-284aeb432a04" }) {
      title
      subtitle
      linkText
      linkSlug
      images {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`
