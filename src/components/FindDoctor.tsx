import React, { useState } from 'react'
import TextInput from './common/TextInput'

const FindDoctor = () => {
 const [isAvailable, setisAvailable] = useState(true)
 const toggle=()=>{
setisAvailable(!isAvailable)
 }
  return (
      <section className="w-full">
          <div className="w-full  md:container mx-auto mt-4 bg-white p-6 rounded">
              <div className="mb-3">
                  <h2 className="text-2xl capitalize">
                      find a doctor
                  </h2>
              </div>
              <div className="flex justify-between items-center flex-wrap gap-2 lg:gap-0 ">
                  <TextInput placeholder='Name' />
                  <TextInput placeholder='Speciality' />
                  <TextInput  testID="switch" type='checkbox' lableName='Available' checked={isAvailable} toggle={toggle} />
                  <button className="button-login !font-normal !font-DM_Sans">Search</button>
              </div>
          </div>
      </section>
  )
}

export default FindDoctor