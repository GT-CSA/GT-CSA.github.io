import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import Logo from '../images/Logo.inline.svg'
import Hamburger from '../images/Hamburger.inline.svg'

export const NAVS = [
  { name: 'Home', slug: '' },
  { name: 'CSA Events', slug: 'events' },
  { name: 'China Care', slug: 'chinacare' },
  { name: 'CCTV', slug: 'cctv' },
  { name: 'Get Involved', slug: 'join' },
  { name: 'Contact Us', slug: 'contact' },
]

const Navigation = () => {
  const [dropped, setDropped] = useState(false)

  const toggleOverflow = (isDropped) => {
    const style = document.getElementsByTagName('body')[0].style
    if (!style) return
    if (isDropped) style.overflow = 'hidden'
    else style.overflow = 'auto'
  }

  useEffect(() => {
    const resetDropped = () => {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      setDropped(false)
    }
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
    window.addEventListener('resize', resetDropped)
    return () => window.removeEventListener('resize', resetDropped)
  }, [])

  return (
    <div className={styles.shadow}>
      <nav
        role="navigation"
        className={`${styles.container}  ${dropped ? styles.dropped : ''}`}
        aria-label="Main"
      >
        <div className={styles.bar}>
          <HomeIcon />
        </div>
        <div className={styles.hamburgerContainer}>
          <button
            className={`${styles.hamburger} ${dropped ? styles.dropped : ''}`}
            onClick={() => {
              setDropped(!dropped)
              toggleOverflow(!dropped)
            }}
            role="menu"
          >
            <Hamburger />
          </button>
        </div>
        <ul className={`${styles.navigation} ${dropped ? styles.dropped : ''}`}>
          <li className={styles.container}>
            <HomeIcon />
          </li>
          {NAVS.map((nav, i) => (
            <NavButton key={nav.slug} name={nav.name} slug={nav.slug} />
          ))}
        </ul>
      </nav>
      <div className={`${styles.gradient} ${dropped ? styles.dropped : ''}`} />
    </div>
  )
}

export const HomeIcon = ({ logo = true, big = false }) => (
  <Link to="/" className={`${styles.logoLink}`}>
    {logo && (
      <div className={`${styles.logoWrapper} `}>
        <Logo className={styles.logo} />
      </div>
    )}
    <span className={styles.navigationItem}>
      <span className={`${styles.title} ${big ? styles.big : ''}`}>
        Georgia Tech
      </span>
      <span className={`${styles.subtitle} ${big ? styles.big : ''}`}>
        Chinese
        <br />
        Student
        <br />
        Association
      </span>
    </span>
  </Link>
)

const NavButton = ({ name, slug }) => {
  return (
    <Link
      to={`/${slug}`}
      activeClassName={`${styles.active} active`}
      partiallyActive={slug !== ''}
      className={`${styles.navigationItem}`}
    >
      <li className={styles.emboldenedItem} data-text={name}>
        {name}
      </li>
    </Link>
  )
}

export default Navigation
