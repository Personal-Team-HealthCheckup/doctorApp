import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ResultNumber from '../src/components/ResultNumber'
 
describe('Page', () => {
  it('renders a ResultNumber', () => {
    render(<ResultNumber />)
    expect(screen).toBeDefined()
  })
})