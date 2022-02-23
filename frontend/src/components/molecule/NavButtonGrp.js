import React from 'react';
import Button from '../atom/Button';

const NavButtonGrp = () => {
    const onClickLogin = (e) => {
        console.log("1")
        window.location.href= "/accounts/login"
    }

    const onClickSignup = (e) => {
        console.log("1")
        window.location.href= "/accounts/signup"
    }
    return (
        <>
            <Button size="small" type="button" color="cyan" border="true"
                    onClick={onClickLogin}>
                Log in
            </Button>
            <Button size="small" color="cyan"
                    onClick={onClickSignup}>
                SignUp
            </Button>
        </>
    );
};

export default NavButtonGrp;
