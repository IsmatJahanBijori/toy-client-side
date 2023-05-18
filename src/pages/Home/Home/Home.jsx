// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SaleSection from '../SaleSection/SaleSection';
import Trending from '../Trending/Trending';
import TabContainer from '../TabContainer/TabContainer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <TabContainer/>
            <SaleSection/>
            <Trending/>
        </div>
    );
};

export default Home;