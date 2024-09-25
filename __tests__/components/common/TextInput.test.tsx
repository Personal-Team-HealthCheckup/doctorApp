import '@testing-library/jest-dom'
import {  render, screen } from '@testing-library/react'
import TextInput from '../../../src/components/common/TextInput'
 const mockScreenProps = {
    type : "checkbox"
 }
describe('Page', () => {
  it('renders a heading', () => {
    render(<TextInput  {...mockScreenProps}/>)
    expect(screen).toBeDefined()
  })
})