import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import MoveList from './MoveList'

describe('MoveList', () => {
  test('should show a list of moves', () => {
    const moveList = buildMoveList()

    render(<MoveList { ...moveList } />)

    expect(screen.getByRole('heading').textContent).toBe(moveList.title)
    screen.getAllByRole('listitem').forEach((move, index) => {
      expect(move.textContent).toContain(moveList.moves[index].buttons)
      expect(move.textContent).toContain(moveList.moves[index].name)
    })
  })
})

const buildMoveList = () => {
  return {
    moves: [
      {
        buttons: 'Back, Back, Forward, Low Kick',
        name: 'Move #1'
      },
      {
        buttons: 'Down, Forward, High Punch',
        name: 'Move #2'
      }
    ],
    title: 'Some Title'
  }
}
