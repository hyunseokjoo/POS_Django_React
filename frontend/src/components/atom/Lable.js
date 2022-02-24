import React from 'react';
import classNames from 'classnames';
import '../../scss/atom/Label.scss';

const Label = ({ name, children, size, color }) => {
    return (
        <label name={name} className={classNames('Label', size, color)}>
            {children}
        </label>
    );
};

export default Label;
