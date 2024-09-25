import { profileImg, videoIconImg } from '@/public/images/assets'
import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <section className='w-full'>
            <div className="w-full  md:container  mx-auto px-4">
                <div className="grid grid-cols-12 gap-4 justify-center">
                    <div className="col-span-12 md:col-span-6  flex flex-col justify-center items-center ">
                        <h1 className="text-[40px] font-lato font-semibold text-black-300">
                            Providing Quality <span className='text-primary'>Healthcare</span> for a <span className='text-secondary'>Brighter</span> and <span className='text-secondary'>Healthy</span> Future
                        </h1>
                        <p className="sm my-5 font-lato font-normal text-xl text-ifno">At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>
                        <div className="flex mt-10 justify-between items-center w-full flex-wrap gap-2">
                            <button className="button !bg-primary !text-white hover:!bg-transparent hover:!text-primary ">
                                Appointment
                            </button>
                            
                            <button className="button flex justify-between items-center gap-4 ">
                            <div className="p-3 bg-primary rounded-[50%] grid justify-center items-center">
                            <Image src={videoIconImg} alt='video icon'  /> 
                            </div>
                               
                               <span > Watch video</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6  flex justify-center items-center m-auto">
                        <div className="banner-box-2 p-4">
                            <Image src={profileImg} className='h-[60%] flex self-center w-auto object-cover' alt='profile image doctor app' priority={true}  />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner