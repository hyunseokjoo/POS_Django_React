import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Axios from 'axios';
import Input from '../atom/Input';
import Button from '../atom/Button';
import classNames from 'classnames';
import Label from '../atom/Lable';
import '../../scss/molecule/Signupform.scss';

const Signupform = () => {
    const navigate = useNavigate();
    const alert = useAlert();
    const [signupData, setSignupData] = useState({});

    const fn_signup = (e) => {
        e.preventDefault();
        const data = signupData;
        console.log(data);
        if (signupData.password === signupData.password_con) {
            Axios.post('http://localhost:8000/accounts/signup/', data)
                .then((res) => {
                    console.log(res.data);
                    alert.info('회원가입 성공');
                    navigate('/accounts/login');
                })
                .catch((err) => {
                    console.log(err);
                    console.log(err.response.data);
                    const { username, password } = err.response.data;
                    alert.error(username, password);
                });
        } else {
            alert.error('비밀번호가 서로 맞지 않습니다.');
        }
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setSignupData(
            (prevstate) => ({
                ...prevstate,
                [name]: value,
            }),
            console.log(signupData)
        );
    };

    const onBack = (e) => {
        navigate(-1);
    };

    return (
        <form className={classNames('Signupform')}>
            <div className="container">
                <div className="header">
                    회원가입
                    <hr />
                </div>
                <div className="sect">
                    <Label color="cyan">ID</Label>
                    <Input name="username" color="cyan" onChange={onChange} />
                </div>
                <div className="sect">
                    <Label color="cyan">Password</Label>
                    <Input type="password" name="password" color="cyan" onChange={onChange} />
                </div>
                <div className="sect">
                    <Label color="cyan">Password_Con</Label>
                    <Input type="password" name="password_con" color="cyan" onChange={onChange} />
                    {signupData.password === signupData.password_con ? (
                        ''
                    ) : (
                        <Label size="small" color="danger">
                            비밀번호가 일치하지 않습니다.
                        </Label>
                    )}
                </div>
                <div className="sect-button">
                    <Button type="button" size="small" color="cyan" border="true" onClick={onBack}>
                        뒤로가기
                    </Button>
                    <Button type="submit" size="small" color="cyan" onClick={fn_signup}>
                        회원가입
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Signupform;
