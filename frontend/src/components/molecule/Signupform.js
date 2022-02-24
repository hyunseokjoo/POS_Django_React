import React, { useState } from 'react';
import Input from '../atom/Input';
import Button from '../atom/Button';
import classNames from 'classnames';
import '../../scss/molecule/Signupform.scss';
import Label from '../atom/Lable';

const Signupform = ({ size, color }) => {
    const [signupData, setSignupData] = useState({});

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

    return (
        <form className={classNames('Signupform', size, color)}>
            <div className="container">
                <div className="sect">
                    <Label color="cyan">ID</Label>
                    <Input name="username" color="cyan" onChange={onChange} />
                </div>
                <div className="sect">
                    <Label color="cyan">Password</Label>
                    <Input type="password" name="password" color="cyan" onChange={onChange} />
                </div>
                <div className="sect-button">
                    <Button type="button" size="small" color="cyan" border="true">
                        뒤로가기
                    </Button>
                    <Button type="submit" size="small" color="cyan">
                        회원가입
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Signupform;
