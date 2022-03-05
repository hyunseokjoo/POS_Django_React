import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from '../components/templates/Layout';
import Accounts from './accounts/';
import { useSelector } from 'react-redux';

const PageIndex = () => {
    const is_logined = useSelector(state=> state.jwtReducer.is_logined)

    return (
        <>
            <Layout>
                <Routes>
                    {is_logined ?<Route path="/" element={<Home />} />: 
                    <Route path="/" element={<Navigate replace to="/accounts/login" />} />}
                    <Route path="accounts/*" element={<Accounts />} />
                </Routes>
            </Layout>
        </>
    );
};

export default PageIndex;
