import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Container from '../components/container'
import Paginator from '../components/paginator'

const BlogList = ({ data, pageContext }) => {
  const { posts } = data
  return (
    <Layout>
      <Container>
        <h1 style={{ color: 'var(--primary)', textAlign: 'center' }}>
          Page {pageContext.currentPage}
        </h1>
        <Paginator
          currPage={pageContext.currentPage}
          numPages={pageContext.numPages}
          base={'/cctv/blog'}
          style={{ marginBottom: 'var(--space-3xl)' }}
        />
        <ArticlePreview posts={posts.nodes} />
        <Paginator
          currPage={pageContext.currentPage}
          numPages={pageContext.numPages}
          base={'/cctv/blog'}
          style={{ marginTop: 'var(--space-3xl)' }}
        />
      </Container>
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    posts: allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
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
  }
`
