import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import Container from './container'

import * as styles from './contact-information.module.css'

const ContactInformations = ({ contacts }) => (
  <Container>
    <div className={styles.container}>
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.platform} />
      ))}
    </div>
  </Container>
)

const Contact = ({ contact }) => {
  return (
    <div className={styles.contact}>
      <a
        className={styles.icon}
        href={contact.link.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GatsbyImage
          alt={contact.platform}
          image={contact.icon.gatsbyImageData}
        />
      </a>
      <div>
        <h3>
          <a href={contact.link.link} target="_blank" rel="noopener noreferrer">
            {contact.platform}
          </a>
        </h3>
        {contact.description?.raw ? renderRichText(contact.description) : ''}
      </div>
    </div>
  )
}

export default ContactInformations
