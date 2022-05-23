import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/home-hero'
import EventsPreview from '../components/events-preview'
import EventsCalendar from '../components/events-calendar'
import BambooFooter from '../components/bamboo-footer'

const Events = ({ data }) => {
  const { hero, events } = data
  const today = new Date()
  const eventsAfterToday = events.nodes.filter(
    (event) => new Date(event.endDateTs) > today
  )

  return (
    <Layout>
      <Hero
        image={hero.images[0].gatsbyImageData}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.longDescription}
      />
      <EventsPreview events={eventsAfterToday} />
      <EventsCalendar />
      <BambooFooter>
        <p>
          Looking for past events? See event recap posts{' '}
          <Link to="/cctv">at our blog here!</Link>
        </p>
      </BambooFooter>
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
      longDescription {
        raw
      }
      images {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    events: allContentfulEventPreview(filter: { isAfterToday: { eq: true } }) {
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
          gatsbyImageData(width: 500, height: 125, layout: FIXED)
        }
      }
    }
  }
`
