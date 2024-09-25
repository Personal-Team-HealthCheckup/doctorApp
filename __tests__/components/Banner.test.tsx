import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Banner from '../../src/components/Banner'
 
describe('Page', () => {
  it('renders a Banner', () => {
    render(<Banner />)
    expect(screen).toBeDefined()
  })
})