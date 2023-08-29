import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('should show a logo and title', () => {
    render(<Header />)

    expect(screen.getByRole('img')).toBeDefined()
    expect(screen.getByRole('heading')).toBeDefined()
  })
})
