import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Container from './container'

import * as styles from './bamboo-footer.module.css'

const BambooFooter = ({ children }) => (
  <Container className={styles.container}>
    {/* <div className={styles.imageContainer}>
      <StaticImage src="../images/Bamboo.png" alt="bamboo" />
    </div> */}
    {children}
  </Container>
)

export default BambooFooter
