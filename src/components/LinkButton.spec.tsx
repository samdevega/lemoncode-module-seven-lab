import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LinkButton from './LinkButton'

describe('LinkButton', () => {
  test('should render a link to some url', () => {
    const text = 'Some Text'
    const url = 'some-url'

    render(<MemoryRouter><LinkButton href={url}>{text}</LinkButton></MemoryRouter>)

    expect(screen.getByText(text)).toBeDefined
    expect(screen.getByRole('link').getAttribute('href')).toContain(url)
  })
})
