import React from 'react'

import { Link } from 'gatsby'
import * as styles from './hero-button.module.css'

const HeroButton = ({ text, link }) => (
  <Link to={link}>
    <div className={styles.button}>{text}</div>
  </Link>
)

export default HeroButton
