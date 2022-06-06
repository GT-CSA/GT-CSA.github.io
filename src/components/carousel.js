import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'

import * as styles from './carousel.module.css'

const Carousel = ({ images, imgStyle, imageClass, manual = false }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    if (!manual) {
      const flip = setTimeout(
        () => setActiveIndex((activeIndex + 1) % images.length),
        7000
      )
      return () => clearTimeout(flip)
    }
  }, [activeIndex, images.length, manual])
  return (
    <div className={styles.container}>
      {images.map((i, idx) => (
        <GatsbyImage
          key={i.title}
          alt={i.title ? i.title : 'CSA Gatech'}
          image={i.gatsbyImageData}
          className={`${activeIndex === idx ? styles.active : ''} ${
            styles.image
          } ${imageClass ? imageClass : ''}`}
          imgStyle={imgStyle}
        />
      ))}
    </div>
  )
}

export default Carousel
