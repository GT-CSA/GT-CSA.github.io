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
  console.log(contact)
  return (
    <div className={styles.contact}>
      <a className={styles.icon} href={contact.link.link}>
        <GatsbyImage
          alt={contact.platform}
          image={contact.icon.gatsbyImageData}
        />
      </a>
      <div>
        <h3>{contact.platform}</h3>
        {renderRichText(contact.description)}
      </div>
    </div>
  )
}

export default ContactInformations
