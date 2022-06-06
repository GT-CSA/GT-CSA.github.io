import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './events-preview.module.css'
import Container from './container'

const EventsPreview = ({ events = [] }) => {
  if (!Array.isArray(events)) return null

  return (
    <Container>
      <div className={styles.container}>
        <h2 className={styles.title}>Upcoming CSA Events</h2>
        <ul className={styles.eventList}>
          {events.map((event) => {
            return (
              <li key={event.title}>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <EventMeta
                  startDate={event.startDate}
                  endDate={event.endDate}
                  at={event.locationSlug}
                  coordinates={event.location}
                  link={
                    event.locationLink ? event.locationLink.locationLink : null
                  }
                />
                <div className={styles.description}>
                  {event.description?.raw && renderRichText(event.description)}
                </div>
                <GatsbyImage
                  alt={event.title}
                  image={event.banner.gatsbyImageData}
                  className={styles.banner}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

const EventMeta = ({ startDate, endDate, at, coordinates, link }) => {
  const [startDayOfWeek, startDay, startYear, startTime] = startDate.split(', ')
  const [endDayOfWeek, endDay, endYear, endTime] = endDate.split(', ')
  let eventTime = `${startDayOfWeek} ${startDay}`
  if (startDay === endDay && startYear === endYear)
    eventTime = `${eventTime} ${startYear}, ${startTime} - ${endTime}`
  else {
    if (startYear === endYear)
      eventTime = `${eventTime} - ${endDayOfWeek} ${endDay} ${endYear}, ${startTime} - ${endTime}`
    else
      eventTime = `${eventTime} ${startYear} - ${endDayOfWeek} ${endDay} ${endYear}, ${startTime} - ${endTime}`
  }
  return (
    <h3 className={styles.meta}>
      {eventTime}{' '}
      <a
        href={
          link
            ? link
            : `https://www.google.com/maps/search/?api=1&query=${coordinates.lat}%2C${coordinates.lon}`
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        {at}
      </a>
    </h3>
  )
}

export default EventsPreview
