import React from 'react';
import '../../scss/molecule/Sidebar.scss';
import Button from '../atom/Button';

const NavButtonGrp = () => {
    return (
        <>
            <Button size="small" color="cyan" border="true">
                Log in
            </Button>
            <Button size="small" color="cyan">
                SignUp
            </Button>
        </>
    );
};

export default NavButtonGrp;
