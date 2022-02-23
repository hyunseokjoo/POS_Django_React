import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from '../components/templates/Layout';
import Accounts from './accounts/';

const index = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="accounts/*" element={<Accounts />} />
                </Routes>
            </Layout>
        </>
    );
};

export default index;
