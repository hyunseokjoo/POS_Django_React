import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/oragnism/Nav.scss';
import Logo from '../atom/Logo';
import NavButtonGrp from '../molecule/NavButtonGrp';

const Nav = () => {
    const navigate = useNavigate();

    const onClick = (e) => {
        e.preventDefault();
        navigate('/');
    };
    return (
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div className="nav-logo" to="/">
                        <Logo size="large" color="cyan" onClick={onClick} />
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
