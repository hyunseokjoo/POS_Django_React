import React from 'react';
import '../../scss/templates/Homebody.scss';
import Homebodycontent from '../oragnism/Homebodycontent';
import Homesidebar from '../oragnism/Homesidebar';

const Homebody = ({ bodyContent, sidebar }) => {
    return (
        <>
            <div className="homebody">
                <div className="homebody-container">
                    <div className="homebody-left">
                        <Homebodycontent />
                    </div>
                    <div className="homebody-right">
                        <Homesidebar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homebody;
