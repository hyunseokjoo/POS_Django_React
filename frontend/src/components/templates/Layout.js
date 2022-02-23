import React from 'react';
import Nav from '../oragnism/Nav';
import Footer from '../oragnism/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
