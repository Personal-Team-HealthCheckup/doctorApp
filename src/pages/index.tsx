import Head from 'next/head';
import React from 'react'
import Banner from '../components/Banner';
import FindDoctor from '../components/FindDoctor';
import ResultNumber from '../components/ResultNumber';
import Image from 'next/image';
import { searviceImage } from '@/public/images/assets';
interface HomePageProps {

}

interface HomePageState {

}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<>
            <Head>
                <title>Doctor App - Dashboard</title>
                <meta
                    name="description"
                    content="Doctor App - Dashboard."
                ></meta>
            </Head>
            <main className='w-full'>
                <Banner />
                <FindDoctor />
                <ResultNumber />
                <section className="w-full py-5 my-5 px-4">
            <div className="container mx-auto  flex  justify-between items-center flex-wrap">
                <div className="flex flex-col gap-4 w-full sm:w-[90%] md:w-[40%] lg:w-[40%] my-5 ">
                    <h2 className="text-primary font-DM_Sans font-bold text-4xl">
                    You have lots of reasons to choose us
                    </h2>
                    <p className="!font-DM_Sans !font-normal !text-[1.13rem]">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
                    </p>
                    <div className="flex justify-start gap-x-7">
                        <button className="button-primary">Get Started</button>
                        <button className="button-primary-hover">Talk to sales</button>
                    </div>
                </div>
               <div className="">
               <Image src={searviceImage} alt='searvice banner image'  className='imagebannerService'/>
               </div>
            </div>
        </section>
            </main>
        </>);
    }
}

export default HomePage;