import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ContactInformations from '../components/contact-informations'
import Board from '../components/board'

const Join = ({ data }) => {
  const { hero, contacts, board } = data
  return (
    <Layout>
      <Hero hero={hero} />
      <ContactInformations contacts={contacts.nodes} />
      <Board board={board.nodes} />
    </Layout>
  )
}

export default Join

export const pageQuery = graphql`
  query JoinQuery {
    hero: contentfulPageHero(
      id: { eq: "d7d2eff6-cfee-5512-91d4-6c093068739e" }
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
    contacts: allContentfulContactInformation {
      nodes {
        icon {
          gatsbyImageData(aspectRatio: 1, layout: FIXED, height: 60, width: 60)
        }
        platform
        link {
          link
        }
        description {
          raw
        }
      }
    }
    board: allContentfulBoardMember(sort: { fields: exec, order: DESC }) {
      nodes {
        name
        description {
          raw
        }
        position
        exec
        image {
          gatsbyImageData(aspectRatio: 0.78125, layout: CONSTRAINED)
        }
      }
    }
  }
`
