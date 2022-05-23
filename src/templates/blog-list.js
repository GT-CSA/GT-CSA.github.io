import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogList = ({ data, pageContext }) => {
  const { posts } = data
  return (
    <Layout>
      Test {posts.nodes[0].title} {pageContext.currentPage}{' '}
      {pageContext.numPages}
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
