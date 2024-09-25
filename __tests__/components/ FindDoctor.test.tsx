import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import FindDoctor from '../../src/components/FindDoctor'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<FindDoctor />)
    expect(screen).toBeDefined()
  })
  it('I change the value of availble to unaivalable', () => {
   const findDoctorWrapper =  render(<FindDoctor />)
    const switchBtn = findDoctorWrapper.getByTestId("switch");
    fireEvent.change(switchBtn)

    const availabilityCheckbox = screen.getByTestId('switch');

    fireEvent.click(availabilityCheckbox);
    
  })
})