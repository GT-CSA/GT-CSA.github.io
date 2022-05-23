import React from 'react'
import * as styles from './events-calendar.module.css'

const EventsCalendar = () => (
  <div style={{ textAlign: 'center' }}>
    <h2 className={styles.title}>Events Calendar</h2>
    <iframe
      src="https://calendar.google.com/calendar/embed?src=csa.gatech%40gmail.com&ctz=America%2FNew_York&showTitle=0"
      title="CSA Calendar"
      style={{ border: 0 }}
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
)

export default EventsCalendar
