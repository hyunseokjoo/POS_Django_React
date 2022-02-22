import React from 'react';
import Logo from '../atom/Logo';
import '../../scss/oragnism/Nav.scss';
import NavButtonGrp from '../molecule/NavButtonGrp';

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <Logo size="large" color="cyan"></Logo>
                    </div>
                    <div className="nav-menu">
                        <NavButtonGrp />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
