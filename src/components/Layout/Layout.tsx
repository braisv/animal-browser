import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='app-container'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
