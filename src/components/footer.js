import { Link } from 'gatsby'
import React from 'react'
import Container from './container'
import Instagram from '../images/instagram.inline.svg'
import YouTube from '../images/youtube.inline.svg'
import Facebook from '../images/facebook.inline.svg'
import Venmo from '../images/venmo.inline.svg'

import * as styles from './footer.module.css'
import { HomeIcon, NAVS } from './navigation'

const Footer = () => (
  <footer>
    <Container>
      <div className={styles.container}>
        <div className={styles.logo}>
          <HomeIcon logo={false} big />
        </div>
        <div className={styles.content}>
          <ul>
            {NAVS.map((nav) => (
              <li key={nav.slug}>
                <Link to={`/${nav.slug}`}>{nav.name}</Link>
                {nav.slug === `cctv` && (
                  <ul>
                    <li>
                      <Link to={'/cctv/blog'}>Blog</Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.misc}>
            <div>
              <h3>Email Us</h3>
              <a href="mailto: csa.gatech@gmail.com">csa.gatech@gmail.com</a>
            </div>
            <div>
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/csa_gatech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCrEkC7eF2nj04VaGGVDJI8A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/gatechcsa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://venmo.com/yw_yuqing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Venmo />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
