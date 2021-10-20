import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceHome from '../ServiceHome/ServiceHome';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceHome />
        </div>
    );
};

export default Home;