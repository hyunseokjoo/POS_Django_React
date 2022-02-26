import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atom/Button';

const NavButtonGrp = () => {
    const navigate = useNavigate();

    const onClickLogin = (e) => {
        navigate('/accounts/login');
    };

    const onClickSignup = (e) => {
        navigate('/accounts/signup');
    };

    return (
        <>
            <Button size="small" type="button" color="cyan" border="true" onClick={onClickLogin}>
                Log in
            </Button>
            <Button size="small" color="cyan" onClick={onClickSignup}>
                SignUp
            </Button>
        </>
    );
};

export default NavButtonGrp;
