import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import CharacterItem from './CharacterItem'

describe('CharacterItem', () => {
  test('should draw a character', () => {
    const character = buildCharacter()

    render(<CharacterItem { ...character } />)

    expect(screen.getByRole('img').getAttribute('src')).toContain(character.avatar)
    expect(screen.getByTitle(character.name)).toBeDefined()
  })
})

const buildCharacter = () => {
  return {
    avatar: 'some-guy.gif',
    name: 'Some Guy',
  }
}
