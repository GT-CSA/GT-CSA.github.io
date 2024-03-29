import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React, { useRef, useState } from 'react'
import Container from './container'
import Logo from '../images/Logo.inline.svg'

import * as styles from './board.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const Board = ({ board, meta }) => {
  let i = 0
  for (; i < board.length; i++) {
    if (!board[i].exec) break
  }
  const exec = board.slice(0, i)
  const members = board.slice(i)
  return (
    <Container>
      <h1 style={{ textAlign: 'center', color: 'var(--primary)' }}>
        {meta.title ? meta.title : 'Meet Our Board'}
      </h1>
      {meta.description?.raw && <div>{renderRichText(meta.description)}</div>}
      <div>
        <BoardArray list={exec} />
        <div className={styles.divider} />
        <BoardArray list={members} />
      </div>
    </Container>
  )
}

const BoardArray = ({ list }) => (
  <div className={styles.cardContainer}>
    {list.map((member) => (
      <BoardCard person={member} key={member.name} />
    ))}
  </div>
)

const BoardCard = ({ person }) => {
  const [clicked, setClicked] = useState(false)
  const cardRef = useRef(null)

  const flipCard = () => {
    setClicked(!clicked)
    cardRef.current.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button
      className={`${styles.card} ${clicked ? styles.clicked : ''}`}
      onClick={flipCard}
    >
      <div className={`${styles.backgroundImage}`}>
        {person.image ? (
          <GatsbyImage alt={person.name} image={person.image.gatsbyImageData} />
        ) : (
          <Logo style={{ padding: 10 }} />
        )}
      </div>
      <div className={`${styles.shade}  ${clicked ? styles.clicked : ''}`} />
      <div
        ref={cardRef}
        className={`${styles.overflow} ${clicked ? styles.clicked : ''}`}
      >
        <div className={styles.content}>
          <h3 className={styles.heading}>{person.name}</h3>
          <h4 className={styles.heading}>{person.position}</h4>
          {person.description?.raw && (
            <div className={styles.description}>
              {renderRichText(person.description)}
            </div>
          )}
        </div>
      </div>
    </button>
  )
}

export default Board
