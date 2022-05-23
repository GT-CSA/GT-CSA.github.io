import React from 'react'
import { graphql, Link } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import YouTubePreview from '../components/youtube-preview'
import Container from '../components/container'

const BlogIndex = ({ data }) => {
  const { posts, hero } = data

  return (
    <Layout>
      <Seo title="CCTV" />
      <Hero hero={hero} />
      <YouTubePreview />
      <Container>
        <h1 style={{ color: 'var(--primary)', textAlign: 'center' }}>
          From Our Blog
        </h1>
        <ArticlePreview posts={posts.nodes} />
        <Link to="/cctv/blog">Click here to see all of our posts!</Link>
      </Container>
      <Container>
        <h1 style={{ color: 'var(--primary)', textAlign: 'center' }}>
          Chinese Convo!
        </h1>
      </Container>
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
      }
    }
  }
`
