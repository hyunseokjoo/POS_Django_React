import React from 'react'
import classNames from 'classnames';
import '../../scss/atom/CategoryItem.scss';

const CategoryItem = ({id, name, color, onClick}) => {
    return (
        <div type='button' 
        className={classNames('CategoryItem', color)} 
        id={id}
        onClick={onClick} >
            <div className={classNames('cate-container', color)} id={id}>
                <div id={id}>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default CategoryItem;