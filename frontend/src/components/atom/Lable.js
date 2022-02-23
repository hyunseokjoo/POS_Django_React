import React from 'react'
import classNames from 'classnames';
import '../../scss/atom/Label.scss';

const Label = ({children, size, color}) => {
    return (
        <label className={classNames('Label', size, color)}>{children}</label>
    )
}

export default Label;