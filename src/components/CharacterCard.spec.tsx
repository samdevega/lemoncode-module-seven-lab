import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {
  test('should show a character information', () => {
    const character = buildCharacter()

    render(<CharacterCard { ...character } />)

    expect(screen.getByRole('img').getAttribute('src')).toContain(character.sprite)
    expect(screen.getByText(character.name)).toBeDefined()
    expect(screen.getByText(character.description)).toBeDefined()
    expect(screen.getByText(character.moves.special[0].name)).toBeDefined()
    expect(screen.getByText(character.moves.special[0].buttons, { exact: false })).toBeDefined()
    expect(screen.getByText(character.moves.finishing[0].name)).toBeDefined()
    expect(screen.getByText(character.moves.finishing[0].buttons, { exact: false })).toBeDefined()
  })
})

const buildCharacter = () => {
  return {
    description: 'Some random description',
    moves: {
      finishing: [
        {
          buttons: 'Back, Back, Forward, Low Kick',
          name: 'Fatality'
        }
      ],
      special: [
        {
          buttons: 'Down, Forward, High Punch',
          name: 'Special #1'
        }
      ]
    },
    name: 'Some Guy',
    sprite: 'some-guy.png'
  }
}
