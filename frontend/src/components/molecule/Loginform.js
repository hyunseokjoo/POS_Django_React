import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Axios from 'axios';
import Input from '../atom/Input';
import Button from '../atom/Button';
import classNames from 'classnames';
import Label from '../atom/Lable';
import '../../scss/molecule/Loginform.scss';
import { setToken } from '../../store/jwt';
import { useDispatch, useSelector } from 'react-redux';

const Loginform = () => {
    const fn_set_Token = (token) =>{
        dispatch(setToken(token));
    }

    const state = useSelector(state => state);

    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const [loginData, setLoginData]= useState({});

    const fn_login = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/accounts/login/",loginData)
        .then((res) => {
            console.log(res.data);
            fn_set_Token(res.data.token);
            alert.success('환영합니다.');
            //navigate('/');
            
        })
        .catch((err) => {
            console.log(err.response.data);
        });
    }

    const fn_check = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const onChange= (e) => {
        const { name, value } = e.target;
        setLoginData(
            (prevstate) => ({
                ...prevstate,
                [name]: value,
            }),
            console.log(loginData)
        );
    }

    const onBack = (e) =>{
        navigate(-1)
    }
    return (
        <form className={classNames('Loginform')}>
            <div className="container">
                <div className="header">
                    로그인
                    <hr/>
                </div>
                <div className="sect">
                    <Label color="cyan">ID</Label>
                    <Input name="username" color="cyan" onChange={onChange} />
                </div>
                <div className="sect">
                    <Label color="cyan">Password</Label>
                    <Input type="password" name="password" color="cyan" onChange={onChange} />
                </div>
                <div className="sect-button">
                    <Button type="button" size="small" color="cyan" border="true" onClick={onBack}>
                        뒤로가기
                    </Button>
                    <Button type="submit" size="small" color="cyan" onClick={fn_login}>
                        로그인
                    </Button>
                    <Button type="submit" size="small" color="cyan" onClick={fn_check}>
                        로그인2
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Loginform;
