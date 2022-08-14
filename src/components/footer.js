import { Link } from 'gatsby'
import React from 'react'
import Container from './container'
import Instagram from '../images/instagram.inline.svg'
import YouTube from '../images/youtube.inline.svg'
import Facebook from '../images/facebook.inline.svg'
import Venmo from '../images/venmo.inline.svg'
import GitHub from '../images/github.inline.svg'

import * as styles from './footer.module.css'
import { HomeIcon, NAVS } from './navigation'

const SOCIALS = [
  {
    key: 'instagram',
    link: 'https://www.instagram.com/csa_gatech/',
    icon: () => <Instagram />,
  },
  {
    key: 'youtube',
    link: 'https://www.youtube.com/channel/UCrEkC7eF2nj04VaGGVDJI8A',
    icon: () => <YouTube />,
  },
  {
    key: 'facebook',
    link: 'https://www.facebook.com/gatechcsa',
    icon: () => <Facebook />,
  },
  {
    key: 'venmo',
    link: 'https://venmo.com/yw_yuqing',
    icon: () => <Venmo />,
  },
  {
    key: 'github',
    link: 'https://github.com/GT-CSA/GT-CSA.github.io',
    icon: () => <GitHub />,
  },
]

export const FooterContent = ({ sitemap = true }) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <HomeIcon logo={false} big />
    </div>
    <div className={styles.content}>
      {sitemap && (
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
      )}
      <div className={styles.misc}>
        <div>
          <h3>Email Us</h3>
          <a href="mailto: csa.gatech@gmail.com">csa.gatech@gmail.com</a>
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul>
            {SOCIALS.map((social) => (
              <li key={social.key}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.icon()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const Footer = () => (
  <footer>
    <Container>
      <FooterContent />
    </Container>
  </footer>
)

export default Footer
