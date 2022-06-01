import React from 'react'
import Container from './container'

import * as styles from './iframe-container.module.css'

const IFrameContainer = ({ containerTitle, title, ...props }) => {
  return (
    <Container className={styles.container}>
      <h1>{containerTitle ? containerTitle : 'Title'}</h1>
      <div className={styles.frameContainer}>
        <iframe className={styles.frame} title={title} {...props}></iframe>
      </div>
    </Container>
  )
}

export default IFrameContainer
