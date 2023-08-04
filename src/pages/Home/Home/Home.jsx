// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SaleSection from '../SaleSection/SaleSection';
import Trending from '../Trending/Trending';
import TabContainer from '../TabContainer/TabContainer';
import Description from '../Description/Description';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stat from '../Stat/Stat';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 }); 
    }, []);

    return (
        <div>
            <Banner/>
            <Gallery/>
            <TabContainer/>
            <SaleSection/>
            <Trending/>
            <Description/>
            <Stat/>
        </div>
    );
};

export default Home;