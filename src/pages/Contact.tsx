import React, { useState } from 'react'

function Contact() {
    const [inputValue,setInputValue] =  useState({
        fname: '',
        lname:'',
        email: '',
        phone: '',
        message: '',
    })
    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value })
    }

  return (<>
  <div className="w-full md:container mx-auto px-4 bg-local bg-cover bg-center h-[722px]	bg-serviceBackImage	">
    </div>

    <div className=' pt-10 flex justify-center items-center flex-col gap-10'>
        <h3 >Get In Touch</h3>
        <h1 className='uppercase font-bold text-4xl'>contact us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
    
{/* form */}

    <div className='h-auto md:h-[864px] flex justify-center items-center w-full'>
  <form  className='flex mt-[2%] flex-wrap p-5 md:p-8  rounded-lg max-w-[1024px] w-full'>

    <div className='flex flex-col w-full md:w-[48%] md:mr-[4%] mb-6'>
      <label className='text-gray-800  font-semibold mb-2'>First Name</label>
      <input  name='fname' value={inputValue.fname}
        className='border border-[#007E85] p-3 rounded-md bg-transparent'
        placeholder='Enter your first name' 
        type='text' 
        required
      />
    </div>


    <div className='flex flex-col w-full md:w-[48%] mb-6'>
      <label className='text-gray-800 font-semibold mb-2'>Last Name</label>
      <input name='lname' value={inputValue.lname}
        className='border border-[#007E85] p-3 rounded-md bg-transparent'
        placeholder='Enter your last name' 
        type='text' 
        
        required 
      />
    </div>


    <div className='flex flex-col w-full md:w-[48%] md:mr-[4%] mb-6'>
      <label className='text-gray-800 font-semibold mb-2'>Email</label>
      <input name='email' value={inputValue.email}
        className='border border-[#007E85] p-3 rounded-md  bg-transparent '
        placeholder='Enter your email'
        type='email' 
        required
      />
    </div>

    <div className='flex flex-col w-full md:w-[48%] mb-6'>
      <label className='text-gray-800 font-semibold mb-2'>Phone Number</label>
      <input name='phone' value={inputValue.phone}
        className='border border-[#007E85] p-3 rounded-md bg-transparent'
        placeholder='Enter your phone number' 
        maxLength={10} 
        type='tel' 
        required
      />
    </div>


    <div className='flex flex-col w-full mb-6'>
      <label className='text-gray-800 font-semibold mb-2'>Choose a Topic</label>
      <select name='message' value={inputValue.message}
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


  </>
    
  )
}

export default Contact
