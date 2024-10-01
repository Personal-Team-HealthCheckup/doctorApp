import React, { useState } from 'react'

function Contact() {
  const [inputValue, setInputValue] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
  })
const handleChangeInput = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=> {
setInputValue({...inputValue,[event.target.name]:event.target.value})
}
  return (<div>
    <div className="w-full  mx-auto px-4 bg-local bg-cover bg-center h-[100vh]	bg-serviceBackImage	">
    </div>

    <div className=' pt-10 flex justify-center items-center flex-col gap-10'>
      <h3 >Get In Touch</h3>
      <h1 className='uppercase font-bold text-4xl'>contact us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>


    <div className='h-auto md:h-[864px] flex justify-center items-center w-full'>
      <form className='flex mt-[2%] flex-wrap p-5 md:p-8  rounded-lg max-w-[1024px] w-full'>

        <div className='flex flex-col w-full md:w-[48%] md:mr-[4%] mb-6'>
          <label className='text-gray-800  font-semibold mb-2'>First Name</label>
          <input
            data-testid="txtInputFname"
            className='border border-[#007E85] p-3 rounded-md bg-transparent'
            placeholder='Enter your first name'
            type='text'
            name='fname'
            value={inputValue['fname']}
            onChange={(event)=>handleChangeInput(event)}
            required
          />
        </div>


        <div className='flex flex-col w-full md:w-[48%] mb-6'>
          <label className='text-gray-800 font-semibold mb-2'>Last Name</label>
          <input
            data-testid="txtInputLname"
            className='border border-[#007E85] p-3 rounded-md bg-transparent'
            placeholder='Enter your last name'
            type='text'
            name='lname'
            value={inputValue['lname']}
            onChange={(event)=>handleChangeInput(event)}
            required
          />
        </div>


        <div className='flex flex-col w-full md:w-[48%] md:mr-[4%] mb-6'>
          <label className='text-gray-800 font-semibold mb-2'>Email</label>
          <input 
            data-testid="txtInputEmail"
            className='border border-[#007E85] p-3 rounded-md  bg-transparent '
            placeholder='Enter your email'
            type='email'
            name='email'
            value={inputValue['email']}
            onChange={(event)=>handleChangeInput(event)}
            required
          />
        </div>

        <div className='flex flex-col w-full md:w-[48%] mb-6'>
          <label className='text-gray-800 font-semibold mb-2'>Phone Number</label>
          <input
            className='border border-[#007E85] p-3 rounded-md bg-transparent'
            placeholder='Enter your phone number'
            data-testid="txtInputPhone"
            maxLength={10}
            type='tel'
            name='phone'
            value={inputValue['phone']}
            onChange={(event)=>handleChangeInput(event)}
            required
          />
        </div>


        <div className='flex flex-col w-full mb-6'>
          <label className='text-gray-800 font-semibold mb-2'>Choose a Topic</label>
          <select name='message'
            defaultValue={""}
            className='border border-[#007E85] p-3 rounded-md'
            required
          >
            <option value="" disabled selected>Select one</option>
            <option value="hello">Hello</option>
            <option value="hi">Hi</option>
            <option value="bye">Bye</option>
            <option value="t">T</option>
          </select>
        </div>


        <div className='flex flex-col w-full mb-6'>
          <label className='text-gray-800 font-semibold mb-2'>Message</label>
          <textarea
           name='message'
           data-testid="txtInputMessage"
           value={inputValue['message']}
           onChange={(event)=>handleChangeInput(event)}
            className='border border-[#007E85] p-3 rounded-md bg-transparent'
            placeholder='Enter your message'
            rows={4}
          ></textarea>
        </div>


        <div className='flex items-center w-full mb-6'>
          <input
            type='checkbox'
            className='mr-2 focus:ring-[#007E85] accent-[#007E85] '
            required
          />
          <label className='text-gray-800'>I agree to the Terms and Conditions</label>
        </div>


        <div className='flex justify-center w-full'>
          <button
            className='px-12 py-3 rounded-md bg-[#007E85] text-white font-semibold hover:bg-[#006b73] shadow-md transition-transform duration-300 transform hover:scale-105'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>


  </div>

  )
}

export default Contact
