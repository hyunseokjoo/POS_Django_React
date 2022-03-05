import React from 'react';
import { useSelector } from 'react-redux';
import '../../scss/oragnism/Homesidebar.scss';
import PayItemList from '../molecule/PayItemList';
import SumPrice from '../molecule/SumPrice';

const Homesidebar = () => {
    
 
    return (
        <div className="homesidebar">           
            <div className='homesidebar_container'>
                <div className='homesidebar_upside'>
                    <PayItemList/>
                </div>
                <div className='homesidebar_bottomside'>
                    asda
                </div>
            </div>
           
        </div>
    );
};

export default Homesidebar;
