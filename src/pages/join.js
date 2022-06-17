import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ContactInformations from '../components/contact-informations'
import BoardApplicationBlob from '../components/board-application-blob'
import Board from '../components/board'

const Join = ({ data }) => {
  const { hero, contacts, board, boardMeta, boardApplicationsOpen } = data
  return (
    <Layout>
      <Hero
        hero={hero}
        popup={
          boardApplicationsOpen.active ? (
            <BoardApplicationBlob meta={boardApplicationsOpen} />
          ) : null
        }
      />
      <ContactInformations contacts={contacts.nodes} />
      <Board board={board.nodes} meta={boardMeta} />
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
        title
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
    boardMeta: contentfulGenericBlock(
      id: { eq: "afc5a0f9-02e9-542c-a61f-c34bcaf178be" }
    ) {
      title
      description {
        raw
      }
    }
    boardApplicationsOpen: contentfulToggleableContent(
      id: { eq: "88801233-bffd-559f-b204-2b4f6cc856cc" }
    ) {
      active
      title
      applicationLink {
        applicationLink
      }
      positionDescriptionLink {
        positionDescriptionLink
      }
      description {
        raw
      }
    }
  }
`
