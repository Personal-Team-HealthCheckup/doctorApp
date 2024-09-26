import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TeamMember from '../../src/components/TeamMember'
 
describe('Page', () => {
  it('renders a TeamMember', () => {
    render(<TeamMember />)
    expect(screen).toBeDefined()
  })
})