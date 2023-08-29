import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Image from './Image'

describe('Image', () => {
  test('should draw an image', () => {
    const image = buildImage()

    render(<Image { ...image } />)

    expect(screen.getByRole('img').getAttribute('alt')).toEqual(image.alt)
    expect(screen.getByRole('img').getAttribute('src')).toContain(image.src)
    expect(screen.getByRole('img').getAttribute('title')).toEqual(image.title)
  })
})

const buildImage = () => {
  return {
    alt: 'Some Image',
    src: 'some-image.png',
    title: 'Some Image',
  }
}
