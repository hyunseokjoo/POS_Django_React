import classNames from 'classnames';
import React from 'react';
import '../../scss/atom/Logo.scss';

const Logo = ({ size, color, border, onClick }) => {
    return (
        <div className={classNames('logo', size, color, border)} onClick={onClick}>
            Logo
        </div>
    );
};

Logo.defaultProps = {
    size: 'small',
    color: 'cyan',
};

export default Logo;
