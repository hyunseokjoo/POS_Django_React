import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../store/jwt';
import Button from '../atom/Button';

const NavButtonGrp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const is_logined = useSelector(state=> state.jwtReducer.is_logined)

    const onClickLogin = (e) => {
        navigate('/accounts/login');
    };

    const onClickLogout = (e) => {
        console.log('logout');
        dispatch(removeToken());
        //navigate('/accounts/login');
    };

    const onClickSignup = (e) => {
        navigate('/accounts/signup');
    };

    return (
        <>
            {is_logined ? 
            <Button size="small" type="button" color="gray" border="true" onClick={onClickLogout}>
                Log out
            </Button>
            :<Button size="small" type="button" color="cyan" border="true" onClick={onClickLogin}>
                Log in
            </Button>
            
            }
            
            <Button size="small" color="cyan" onClick={onClickSignup}>
                SignUp
            </Button>
        </>
    );
};

export default NavButtonGrp;
