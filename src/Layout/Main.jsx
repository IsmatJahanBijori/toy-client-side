// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../pages/Shared/Navbar/NAvbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;