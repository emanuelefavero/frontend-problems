import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Page from './page'

describe('Homepage', () => {
  it('renders a heading', () => {
    render(<Page />)

    const item = screen.getByRole('heading', {
      level: 1,
    })

    expect(item).toBeDefined()
    expect(item.textContent).toBe('Home')
  })
})
