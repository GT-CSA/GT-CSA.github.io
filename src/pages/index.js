import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import HeroButton from '../components/hero-button'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const hero = get(this, 'props.data.contentfulHomeHero')
    console.log(hero)

    return (
      <Layout location={this.props.location}>
        <Hero
          image={hero.images[0].gatsbyImageData}
          title={hero.title}
          subtitle={hero.subtitle}
          content={<HeroButton link={hero.linkSlug} text={hero.linkText} />}
        />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
    contentfulHomeHero {
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
