import Head from 'next/head';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import FindDoctor from '../components/FindDoctor';
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
                <Header />
                <Banner />
                <FindDoctor />
            </main>
        </>);
    }
}

export default HomePage;