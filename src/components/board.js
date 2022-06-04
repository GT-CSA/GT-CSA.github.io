import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import Container from './container'

const Board = ({ board }) => {
  console.log(board)
  return (
    <Container>
      <h1>Meet Our Board</h1>
      <div>
        {board.map((member) => (
          <BoardCard person={member} key={member.name} />
        ))}
      </div>
    </Container>
  )
}

const BoardCard = ({ person }) => (
  <div>
    <h2>{person.name}</h2>
    <h3>{person.position}</h3>
    {renderRichText(person.description)}
  </div>
)

export default Board
