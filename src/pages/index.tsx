import Head from 'next/head';
import React from 'react'
import "../styles/globals.css";
import Header from '../components/Header';
import Banner from '../components/Banner';
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
            <main>
                <Header />
                <Banner />
            </main>
        </>);
    }
}

export default HomePage;