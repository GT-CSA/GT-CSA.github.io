import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'

import * as styles from '../pages-css/contact.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const Contact = ({ data }) => {
  //https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
  const { hero } = data
  const { description, ...rest } = hero
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.mobileHero}>
          <Hero hero={rest} collapsible />
        </div>
        <div className={`${styles.desktopHero} ${styles.imageContainer}`}>
          <GatsbyImage
            image={hero.images[0].gatsbyImageData}
            alt={'contact'}
            className={styles.image}
          />
          <div className={styles.shade} />
        </div>
        <div>
          <h1 className={`${styles.desktopHero}`}>{hero.title}</h1>
          <div>{renderRichText(description)}</div>
          <form className={styles.form}>
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    hero: contentfulPageHero(
      id: { eq: "837eb7f5-b484-51a8-b73b-9d10751382a2" }
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
  }
`
