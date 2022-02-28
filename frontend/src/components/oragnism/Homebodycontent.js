import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import '../../scss/oragnism/Homebodycontent.scss';

const Homebodycontent = () => {
    const dispatch = useDispatch();
    const jwtToken = useSelector((state) => state.jwtReducer.jwtToken);
    //const headers = { Authorization: jwtToken };

    useEffect(() => {
        console.log(jwtToken);
        Axios.get('http://localhost:8000/menu/categories/', { headers: { Authorization: `Bearer ${jwtToken}` } })
            .then((res) => {
                console.log(1);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    });
    return (
        <>
            <div className="homebodycontent">BodyContent</div>
        </>
    );
};

export default Homebodycontent;
