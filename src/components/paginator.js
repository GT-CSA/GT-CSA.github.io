import { Link } from 'gatsby'
import React from 'react'

import * as styles from './paginator.module.css'

const Paginator = ({ currPage = 1, numPages = 0, base = '/', style }) => {
  const PAGINATOR_PAGE_LIMIT = 5
  const pages = Array.from(
    {
      length: Math.min(PAGINATOR_PAGE_LIMIT, numPages),
    },
    (_, i) => i + Math.max(1, currPage - 2)
  )

  return (
    <ul className={styles.numbers} style={style}>
      {currPage === 1 ? (
        <li className={`${styles.disabled} ${styles.button}`}>Prev</li>
      ) : (
        <PageNumber
          num={currPage - 1}
          base={base}
          text="Prev"
          className={styles.button}
        />
      )}
      {currPage - 2 > 1 && <PageNumber num={1} base={base} />}
      {currPage - 3 > 1 && <li>...</li>}
      {pages.map((i) => (
        <PageNumber
          num={i}
          base={base}
          className={i === currPage ? styles.active : ''}
        />
      ))}
      {currPage + 3 < numPages && <li>...</li>}
      {currPage + 2 < numPages && <PageNumber num={numPages} base={base} />}
      {currPage === numPages ? (
        <li className={`${styles.disabled} ${styles.button}`}>Next</li>
      ) : (
        <PageNumber
          num={currPage + 1}
          base={base}
          text="Next"
          className={styles.button}
        />
      )}
    </ul>
  )
}

const PageNumber = ({ num, base, text, className }) => (
  <Link to={num === 1 ? base : `${base}/${num}`}>
    <li className={className}>{text ? text : num}</li>
  </Link>
)

export default Paginator
