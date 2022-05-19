import React from 'react'
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

  return (
    <div className={styles.shadow}>
      <nav role="navigation" className={styles.container} aria-label="Main">
        <Link to="/" className={styles.logoLink}>
          <Logo />
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
        </Link>
        <ul className={styles.navigation}>
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
    <li
      className={`${styles.navigationItem} ${styles.navigationTube} ${
        start ? styles.navStart : ''
      } ${end ? styles.navEnd : ''}`}
      data-text={name}
    >
      <Link
        to={`/${slug}`}
        activeClassName="active"
        partiallyActive={slug !== ''}
      >
        {name}
      </Link>
    </li>
  )
}

export default Navigation
