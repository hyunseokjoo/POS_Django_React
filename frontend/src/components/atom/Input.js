import React from 'react'
import classNames from 'classnames';
import '../../scss/atom/Input.scss';


const Input = ({ name, size, color, border}) => {
    return (
        <>
            <input 
            name={name}
            className={classNames('input', size, color, border)}/>
        </>
    );
};

export default Input;
