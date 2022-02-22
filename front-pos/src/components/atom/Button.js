import classNames from 'classnames';
import React from 'react';
import '../../scss/atom/Button.scss';

const Button = ({ children, size, color, border, onClick }) => {
    if (border) {
        //Border 형식
        return (
            <button className={classNames('Button-border', size, color, border)} onClick={onClick}>
                {children}
            </button>
        );
    } else {
        // 기본 형식
        return (
            <button className={classNames('Button', size, color, border)} onClick={onClick}>
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    size: 'samll',
    color: 'cyan',
};

export default Button;
