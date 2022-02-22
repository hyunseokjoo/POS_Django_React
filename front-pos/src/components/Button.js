import classNames from 'classnames';
import React from 'react';
import '../scss/components/Button.scss';

const Button = ({ children, size, color, border }) => {
    if (border) {
        return <button className={classNames('Button-border', size, color, border)}>{children}</button>;
    } else {
        return <button className={classNames('Button', size, color, border)}>{children}</button>;
    }
};

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};

export default Button;
