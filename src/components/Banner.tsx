import { profileImg } from '@/public/images/assets'
import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 justify-center">
                    <div className="col-span-6 ">
                        <h2 className="text-2xl">
                            Providing Quality Healthcare for a Brighter and Healthy Future
                        </h2>
                        <p className="sm">At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>
                        <div className="flex justify-between">
                            <button className="button">
                                Appointment
                            </button>
                            <button className="button">
                                Watch video
                            </button>
                        </div>
                    </div>
                    <div className="col-span-6 ">
                        <div className="banner-box-2">
                            <Image src={profileImg} className='h-screen object-cover' alt='profile image doctor app' />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner