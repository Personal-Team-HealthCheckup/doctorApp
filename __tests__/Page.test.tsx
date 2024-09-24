import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/pages/index'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
    expect(screen).toBeDefined()
  })
})