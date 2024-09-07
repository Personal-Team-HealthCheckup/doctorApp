import Head from 'next/head';
import React from 'react'
import Header from '../components/Header';
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
            <main className='flex min-h-screen min-w-max bg-[#ECECEC] lg:pb-24'>
                <Header />
            </main>
        </>);
    }
}

export default HomePage;