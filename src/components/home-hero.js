import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './home-hero.module.css'

const HomeHero = ({ image, title, subtitle, children }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage
        className={styles.image}
        alt={title}
        image={image}
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
)

export default HomeHero
