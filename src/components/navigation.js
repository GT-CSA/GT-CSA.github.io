import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import Logo from '../images/Logo.inline.svg'

const Navigation = () => {
  const navs = [
    { name: 'Home', slug: '' },
    { name: 'CSA Events', slug: 'events' },
    { name: 'China Care', slug: 'chinacare' },
    { name: 'CCTV', slug: 'cctv' },
    { name: 'Get Involved', slug: 'board' },
    { name: 'Contact Us', slug: 'contact' },
  ]

  const [dropped, setDropped] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const checkScroll = (e) => {
      if (e.target === document) {
        const navMax = parseInt(
          getComputedStyle(document.documentElement, null).getPropertyValue(
            '--size-max-nav'
          ),
          10
        )
        const navSmall = parseInt(
          getComputedStyle(document.documentElement, null).getPropertyValue(
            '--size-small-nav'
          ),
          10
        )
        if (
          window &&
          !isNaN(navSmall) &&
          !isNaN(navMax) &&
          window.scrollY > navMax - navSmall
        )
          setScrolled(true)
        else setScrolled(false)
      }
    }
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <div className={styles.shadow}>
      <nav
        role="navigation"
        className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}
        aria-label="Main"
      >
        <Link to="/" className={styles.logoLink}>
          <div
            className={`${styles.logoWrapper} ${
              scrolled ? styles.scrolled : ''
            }`}
          >
            <Logo className={styles.logo} />
          </div>
          {scrolled ? (
            <span className={`${styles.navigationItem} ${styles.scrolled}`}>
              <span className={styles.title}>GT&nbsp;</span>
              <span className={styles.subtitle}>
                Chinese Student Association
              </span>
            </span>
          ) : (
            <span className={styles.navigationItem}>
              <span className={styles.title}>Georgia Tech</span>
              <span className={styles.subtitle}>
                Chinese
                <br />
                Student
                <br />
                Association
              </span>
            </span>
          )}
        </Link>
        <button
          className={styles.hamburger}
          onClick={() => setDropped(!dropped)}
          role="menu"
        >
          hamburger
        </button>
        <ul
          className={`${styles.navigation} ${dropped ? styles.dropped : ''} ${
            scrolled ? styles.scrolled : ''
          }`}
        >
          {navs.map((nav, i) => (
            <NavButton
              key={nav.slug}
              name={nav.name}
              slug={nav.slug}
              start={i === 0}
              end={i === navs.length - 1}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}

const NavButton = ({ name, slug, start, end }) => {
  return (
    <Link
      to={`/${slug}`}
      activeClassName={`${styles.active} active`}
      partiallyActive={slug !== ''}
      className={`${styles.navigationItem} ${styles.navigationTube} ${
        start ? styles.navStart : ''
      } ${end ? styles.navEnd : ''}`}
    >
      <li className={styles.emboldenedItem} data-text={name}>
        {name}
      </li>
    </Link>
  )
}

export default Navigation
