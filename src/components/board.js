import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React, { useState } from 'react'
import Container from './container'
import Logo from '../images/Logo.inline.svg'

import * as styles from './board.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const Board = ({ board }) => {
  let i = 0
  for (; i < board.length; i++) {
    if (!board[i].exec) break
  }
  const exec = board.splice(0, i)
  return (
    <Container>
      <h1 style={{ textAlign: 'center', color: 'var(--primary)' }}>
        Meet Our Board
      </h1>
      <div>
        <BoardArray list={exec} />
        <div className={styles.divider} />
        <BoardArray list={board} />
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
  return (
    <button
      className={`${styles.card} ${clicked ? styles.clicked : ''}`}
      onClick={() => setClicked(!clicked)}
    >
      <div className={`${styles.backgroundImage}`}>
        {person.image ? (
          <GatsbyImage alt={person.name} image={person.image.gatsbyImageData} />
        ) : (
          <Logo style={{ padding: 10 }} />
        )}
      </div>
      <div className={`${styles.shade}  ${clicked ? styles.clicked : ''}`} />
      <div className={`${styles.overflow} ${clicked ? styles.clicked : ''}`}>
        <h3 className={styles.heading}>{person.name}</h3>
        <h4 className={styles.heading}>{person.position}</h4>
        <div className={styles.description}>
          {renderRichText(person.description)}
        </div>
      </div>
    </button>
  )
}

export default Board
