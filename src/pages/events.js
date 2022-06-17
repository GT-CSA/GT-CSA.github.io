import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import EventsPreview from '../components/events-preview'
import Seo from '../components/seo'
import IFrameContainer from '../components/iframe-container'

import * as styles from '../pages-css/events.module.css'
import Container from '../components/container'
import Carousel from '../components/carousel'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const Events = ({ data }) => {
  const { hero, events, photos, calendar, eventsTitleDescription } = data
  // const today = new Date()
  // const eventsAfterToday = events.nodes.filter(
  //   (event) => new Date(event.endDateTs) > today
  // )

  return (
    <Layout>
      <Seo title="CSA Events" />
      <Hero hero={hero} />
      <EventsPreview
        events={events.nodes}
        title={eventsTitleDescription.title}
        description={eventsTitleDescription.description}
      />
      <Container className={styles.photos}>
        <h1>{photos.title}</h1>
        <div className={styles.carousel}>
          <Carousel images={photos.images} />
        </div>
        <div>{renderRichText(photos.description)}</div>
      </Container>
      <div className={styles.month}>
        <IFrameContainer
          containerTitle={calendar.title}
          containerDescription={calendar.description}
          src="https://calendar.google.com/calendar/embed?src=csa.gatech%40gmail.com&ctz=America%2FNew_York&showTitle=0"
          title="CSA Calendar"
          style={{ border: 0 }}
          frameBorder="0"
          scrolling="no"
        />
      </div>
      <div className={styles.agenda}>
        <IFrameContainer
          containerTitle="Events Calendar"
          src="https://calendar.google.com/calendar/embed?src=csa.gatech%40gmail.com&ctz=America%2FNew_York&showTitle=0&mode=AGENDA"
          title="CSA Calendar"
          style={{ border: 0 }}
          frameBorder="0"
          scrolling="no"
          className={styles.agendaFrame}
        />
      </div>
    </Layout>
  )
}

export default Events

export const pageQuery = graphql`
  query EventsQuery {
    hero: contentfulPageHero(
      id: { eq: "9fad5883-7ef0-5b03-a110-b1f9c41abc74" }
    ) {
      title
      subtitle
      description: longDescription {
        raw
      }
      images {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        title
      }
    }
    events: allContentfulEventPreview(
      filter: { active: { eq: true } }
      sort: { fields: endDate, order: ASC }
    ) {
      nodes {
        title
        description {
          raw
        }
        startDate(formatString: "dddd, MMMM Do, YYYY, h:mm a")
        endDate(formatString: "dddd, MMMM Do, YYYY, h:mm a")
        endDateTs
        locationSlug
        location {
          lat
          lon
        }
        locationLink {
          locationLink
        }
        banner {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 4.0)
        }
        tags
      }
    }
    photos: contentfulGenericBlock(
      id: { eq: "a3740379-a69c-555e-a1fa-47d0eb5073f8" }
    ) {
      title
      description {
        raw
      }
      images {
        gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.777)
        title
      }
    }
    calendar: contentfulGenericBlock(
      id: { eq: "e089890e-231d-515e-9bb6-d249a0e5d116" }
    ) {
      title
      description {
        raw
      }
    }
    eventsTitleDescription: contentfulGenericBlock(
      id: { eq: "8b7b7907-e2a3-570c-8814-16a39ed6958e" }
    ) {
      title
      description {
        raw
      }
    }
  }
`
