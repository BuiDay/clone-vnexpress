import React from 'react';
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Intro from '../intro/Intro'
import Body from '../body/Body';
import Podcasts from '../podcasts/Podcasts';
import Footer from '../footer/Footer';
import AllMenu from '../allmenu/AllMenu';

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            {/* <Intro />
            <Body />
            <Podcasts />
            <Footer /> */}
            <AllMenu />
        </>
    );
};

export default Home;