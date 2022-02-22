import React from 'react';
import '../../scss/oragnism/Body.scss';
import BodyContent from '../molecule/BodyContent';
import Sidebar from '../molecule/Sidebar';

const Body = () => {
    return (
        <>
            <div className="body">
                <div className="body-container">
                    <div className="body-left">
                        <BodyContent></BodyContent>
                    </div>
                    <div className="body-right">
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;
