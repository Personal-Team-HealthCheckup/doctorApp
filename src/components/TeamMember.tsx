import React from 'react'
import { teamMembersdata } from '../utils/data'
import ResponsiveCard from './common/ResponsiveCard'

function TeamMember() {
  return (
    <section className="w-full py-5 my-10 px-4">
    <div className="container mx-auto  flex  flex-col justify-between items-center flex-wrap gap-8 ">
        <h2 className="text-primary font-DM_Sans font-bold text-4xl !text-center">
            Meet our team members
        </h2>

        <p className="!font-DM_Sans !font-normal !text-[1.13rem] text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer nam.
        </p>


        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-10">
            {teamMembersdata.map(member => <div key={member.id}>
                <ResponsiveCard {...member} />
            </div>

            )

            }
        </div>

    </div>
</section>
  )
}

export default TeamMember