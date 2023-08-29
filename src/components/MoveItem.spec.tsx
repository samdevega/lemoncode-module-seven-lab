import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import MoveItem from './MoveItem'

describe('MoveItem', () => {
  test('should show a move information', () => {
    const move = buildMove()

    render(<MoveItem { ...move } />)

    expect(screen.getByText(move.name)).toBeDefined()
    expect(screen.getByText(move.buttons, { exact: false })).toBeDefined()
  })
})

const buildMove = () => {
  return {
    buttons: 'Back, Back, Forward, Low Kick',
    name: 'Fatality'
  }
}
