import React from 'react'

import * as styles from './hero.module.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from './container'
import Carousel from './carousel'

const Hero = ({ hero, popup, children }) => {
  const { images, title, subtitle, description } = hero
  const image = images[0].gatsbyImageData
  return (
    <div>
      <div className={`${styles.hero} ${popup ? styles.popped : ''}`}>
        {image && (
          <Carousel
            imageClass={styles.image}
            images={images}
            imgStyle={{ objectPosition: 'bottom' }}
          />
        )}
        <div className={styles.backgroundShade} />
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            {children}
          </div>
        </div>
      </div>
      {popup && popup}
      {description && (
        <Container className={styles.description}>
          {renderRichText(description)}
        </Container>
      )}
    </div>
  )
}

export default Hero
