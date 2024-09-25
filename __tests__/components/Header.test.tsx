import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Header />)
    expect(screen).toBeDefined()
  })
})