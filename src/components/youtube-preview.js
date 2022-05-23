import React from 'react'
import Container from './container'

import * as styles from './youtube-preview.module.css'

const YouTubePreview = () => {
  return (
    <Container className={styles.container}>
      <h1>CSA YouTube</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLUmMiMpeUbtBc2U2RKD5efE293nPwiud1"
        title="CSA Youtube Full Playlist"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  )
}

export default YouTubePreview
