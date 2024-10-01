import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Contact from '../src/pages/Contact'

describe('Contact Page', () => {
  it('renders the Contact form and allows input', () => {
    render(<Contact />)
    
    // Ensure the screen is defined
    expect(screen).toBeDefined()

    // Testing the First Name Input
    const txtInputFname = screen.getByTestId("txtInputFname")as HTMLInputElement;
    fireEvent.change(txtInputFname, { target: { name: "fname", value: "John" } })
    expect(txtInputFname.value).toBe("John")

    // Testing the Last Name Input
    const txtInputLname = screen.getByTestId("txtInputLname")as HTMLInputElement;
    fireEvent.change(txtInputLname, { target: { name: "lname", value: "Doe" } })
    expect(txtInputLname.value).toBe("Doe")

    // Testing the Email Input
    const txtInputEmail = screen.getByTestId("txtInputEmail") as HTMLInputElement;
    fireEvent.change(txtInputEmail, { target: { name: "email", value: "john.doe@example.com" } })
    expect(txtInputEmail.value).toBe("john.doe@example.com")

    // Testing the Phone Input
    const txtInputPhone = screen.getByTestId("txtInputPhone") as  HTMLInputElement;
    fireEvent.change(txtInputPhone, { target: { name: "phone", value: "1234567890" } })
    expect(txtInputPhone.value).toBe("1234567890")

    // Testing the Message Input
    const txtInputMessage = screen.getByTestId("txtInputMessage")as HTMLInputElement;
    fireEvent.change(txtInputMessage, { target: { name: "message", value: "Hello, this is a test message" } })
    expect(txtInputMessage.value).toBe("Hello, this is a test message")
  })
})
