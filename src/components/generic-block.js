import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import Container from './container'

import * as styles from './generic-block.module.css'

const GenericBlock = ({ title, description, imageData }) => (
  <Container>
    <h1 className={styles.header}>{title}</h1>
    <div className={styles.content}>
      <div className={styles.image}>
        <GatsbyImage alt={title} image={imageData} />
      </div>
      {description?.raw && <div>{renderRichText(description)}</div>}
    </div>
  </Container>
)

export default GenericBlock
