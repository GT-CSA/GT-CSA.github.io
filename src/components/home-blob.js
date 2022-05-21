import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as styles from './home-blob.module.css'

const HomeBlob = ({ title, description, slug, image, path, blobOnLeft }) => {
  return (
    <div className={`${styles.container} ${blobOnLeft ? styles.onLeft : ''}`}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        {description && (
          <div className={styles.description}>
            {renderRichText(description)}
          </div>
        )}
        <Link to={slug} className={styles.link}>
          More Info
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Blob path={path} image={image} title={title} />
      </div>
    </div>
  )
}

const Blob = ({ path, image, title }) => {
  const [viewBox, setViewBox] = useState('0 0 0 0')
  const pathElement = useRef(null)

  useEffect(() => {
    const { x, y, width, height } = pathElement.current.getBBox()
    setViewBox(`${x} ${y} ${width} ${height}`)
  }, [])

  return (
    <svg
      className={styles.image}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={`clip-path-${title}`} clipPathUnits="userSpaceOnUse">
          <path fill="#FF0066" d={path} ref={pathElement} />
        </clipPath>
      </defs>

      <image
        width="100%"
        height="100%"
        preserveAspectRatio="xMinYMin slice"
        xlinkHref={image}
        clipPath={`url('#clip-path-${title}')`}
      />
    </svg>
  )
}

export default HomeBlob
