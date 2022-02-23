import React from 'react'
import Input from '../atom/Input';
import Button from '../atom/Button';
import classNames from 'classnames';
import '../../scss/molecule/Signupform.scss';
import Label from '../atom/Lable';

const Signupform = ({size, color}) => {
    return (
        <form className={classNames('Signupform', size, color)}>
            <div className='container'>
                <div className='sect'>
                    <Label color="cyan">ID</Label>
                    <Input color="cyan"/>
                </div>
                <div className='sect'>
                    <Label  color="cyan">Password</Label>
                    <Input color="cyan"/>
                </div>
                <div className='sect-button'>
                    <Button size="small" color="cyan" border="true">뒤로가기</Button>
                    <Button size="small" color="cyan">회원가입</Button>
                </div>
            </div>
        </form>
    );
};

export default Signupform;