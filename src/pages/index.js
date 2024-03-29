import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import HeroButton from '../components/hero-button'
import HomeBlob from '../components/home-blob'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from '../components/container'

import * as styles from '../pages-css/index.module.css'

class RootIndex extends React.Component {
  render() {
    const blobs = get(this, 'props.data.allContentfulHomeBlob.nodes')
    const hero = get(this, 'props.data.contentfulPageHero')
    const footerText = get(this, 'props.data.footerText')
    return (
      <Layout>
        <Hero hero={hero}>
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
        {footerText.description?.raw && (
          <Container className={styles.footer}>
            {renderRichText(footerText.description)}
          </Container>
        )}
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
    contentfulPageHero(id: { eq: "5b07114c-e021-5c74-92f3-284aeb432a04" }) {
      title
      subtitle
      description: longDescription {
        raw
      }
      linkText
      linkSlug
      images {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        title
      }
    }
    footerText: contentfulGenericBlock(
      id: { eq: "bcfaac8d-ad76-5c92-869f-2386269741ab" }
    ) {
      description {
        raw
      }
    }
  }
`
