import React from 'react'
import Container from './container'

import * as styles from './iframe-container.module.css'

const IFrameContainer = ({ containerTitle, title, className, ...props }) => {
  return (
    <Container>
      <h1>{containerTitle ? containerTitle : 'Title'}</h1>
      <div className={`${styles.frameContainer} ${className}`}>
        <iframe className={styles.frame} title={title} {...props}></iframe>
      </div>
    </Container>
  )
}

export default IFrameContainer
