import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CharacterList from './CharacterList'

describe('CharacterList', () => {
  test('should show a list of characters', () => {
    const characterList = buildCharacterList()

    render(<MemoryRouter><CharacterList { ...characterList } /></MemoryRouter>)

    screen.getAllByRole('img').forEach((element, index) => {
      expect(element.getAttribute('src')).toContain(characterList.characters[index].avatar)
    })
    screen.getAllByRole('link').forEach((element, index) => {
      expect(element.getAttribute('href')).toContain(characterList.characters[index].slug)
    })
    characterList.characters.forEach(character => {
      expect(screen.getByTitle(character.name)).toBeDefined()
    })
  })
})

const buildCharacterList = () => {
  return {
    characters: [
      {
        avatar: 'some-girl.gif',
        name: 'Some Girl',
        slug: 'some-girl'
      },
      {
        avatar: 'some-guy.gif',
        name: 'Some Guy',
        slug: 'some-guy'
      }
    ]
  }
}
