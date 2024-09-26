import { TeamMembersData } from '@/src/utils/data'
import Image from 'next/image'
import React from 'react'

function ResponsiveCard({ profileImage, name: title, designation, description, links, id }:  Readonly<TeamMembersData>) {
  return (
    <div key={id} className="w-full max-w-sm bg-white border border-white-500 rounded-lg shadow px-4 pt-5 ">
    <div className="flex flex-col items-center  gap-2 pb-10">
        <Image className="w-24 h-24 mb-3 rounded-full object-cover shadow-lg" src={profileImage} alt="Bonnie image" />
        <h3 className="mb-1 text-[1.75rem] font-DM_Sans font-bold text-primary dark:text-primary">{title}</h3>
        <span className="text-[1.15rem] font-DM_Sans font-bold text-black-300 uppercase">{designation}</span>
        <p className='text-[1.15rem] font-DM_Sans font-normal text-black-500 text-center'>{description}</p>
        <div className="flex mt-4 md:mt-6 justify-center gap-3 items-center">
            {links.map(item => <a key={item.id} href={item.link} className="icon-button"><Image src={item.icon} className='w-4 h-4 object-contain' alt={item.name} /></a>)}
        </div>
    </div>
</div>
  )
}

export default ResponsiveCard