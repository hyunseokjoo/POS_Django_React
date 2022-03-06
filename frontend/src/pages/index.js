import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from '../components/templates/Layout';
import Accounts from './accounts/';
import Payment from './payment/';
import { useSelector } from 'react-redux';

const PageIndex = () => {
    const is_logined = useSelector(state=> state.jwtReducer.is_logined)

    return (
        <>
            <Layout>
                <Routes>
                    {is_logined ?<Route path="/" element={<Home />} /> 
                    :<Route path="/" element={<Navigate replace to="/accounts/login" />} />}
                    <Route path="accounts/*" element={<Accounts />} />
                    {is_logined ?<Route path="payment/*" element={<Payment />} /> 
                    :<Route path="payment/*" element={<Navigate replace to="/accounts/login" />} />}
                    
                </Routes>
            </Layout>
        </>
    );
};

export default PageIndex;
