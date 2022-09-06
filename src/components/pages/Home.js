import React from 'react';
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Intro from '../intro/Intro'
import Body from '../body/Body';

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Intro />
            <Body />
        </>
    );
};

export default Home;