import React from 'react';
import classNames from 'classnames';
import '../../scss/atom/Input.scss';

const Input = ({ name, type, size, color, border, onChange }) => {
    return (
        <>
            <input name={name} type={type} className={classNames('input', size, color, border)} onChange={onChange} />
        </>
    );
};

export default Input;
