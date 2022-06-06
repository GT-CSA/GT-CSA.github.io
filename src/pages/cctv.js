import React from 'react'
import { graphql, Link } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Container from '../components/container'
import IFrameContainer from '../components/iframe-container'
import GenericBlock from '../components/generic-block'

const BlogIndex = ({ data }) => {
  const { posts, hero, convo } = data

  return (
    <Layout>
      <Seo title="CCTV" />
      <Hero hero={hero} />
      <IFrameContainer
        containerTitle="See Our Latest Video Here"
        src="https://www.youtube.com/embed/videoseries?list=PLUmMiMpeUbtBc2U2RKD5efE293nPwiud1"
        title="CSA Youtube Full Playlist"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <Container>
        <h1 style={{ color: 'var(--primary)', textAlign: 'center' }}>
          From Our Blog
        </h1>
        <p style={{ textAlign: 'center' }}>
          <Link to="/cctv/blog">Click here to see all of our posts!</Link>
        </p>
        <ArticlePreview posts={posts.nodes} />
      </Container>
      <GenericBlock
        title={convo.title}
        description={convo.description}
        imageData={convo.images[0].gatsbyImageData}
      />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query CctvQuery {
    posts: allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 2
    ) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    hero: contentfulPageHero(
      id: { eq: "8e652a71-62b4-55e0-bd86-304c96abe3b5" }
    ) {
      title
      subtitle
      description: longDescription {
        raw
      }
      images {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        title
      }
    }
    convo: contentfulGenericBlock(
      id: { eq: "8845209a-f7fe-5891-9195-f8c48b54554f" }
    ) {
      title
      description {
        raw
      }
      images {
        gatsbyImageData
      }
    }
  }
`
