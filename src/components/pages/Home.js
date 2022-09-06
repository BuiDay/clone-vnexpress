import React from 'react';
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Intro from '../intro/Intro'
import Body from '../body/Body';
import Body2 from '../body2/body2';
import Podcasts from '../podcasts/Podcasts';
import Footer from '../footer/Footer';


const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Intro />
            <Body />
            <Body />
            <Podcasts />
            <Body2 />
            <Footer />
        </>
    );
};

export default Home;