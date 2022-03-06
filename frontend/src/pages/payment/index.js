import React from 'react';
import { Route, Routes } from 'react-router-dom';
import History from './History';

const AccountsRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/history" element={<History />} />
            </Routes>
        </>
    );
};

export default AccountsRoutes;
