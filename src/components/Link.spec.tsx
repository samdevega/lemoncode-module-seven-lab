import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Link from './Link'

describe('Link', () => {
  test('should render a link to some url', () => {
    const text = 'Some Text'
    const url = 'some-url'

    render(<MemoryRouter><Link to={url}>{text}</Link></MemoryRouter>)

    expect(screen.getByText(text)).toBeDefined
    expect(screen.getByRole('link').getAttribute('href')).toContain(url)
  })
})
