import React from 'react'
import classNames from 'classnames';
import '../../scss/atom/ProductItem.scss';

const ProductItem = ({id, name, price, color, onClick}) => {
    return (
        <div type='button' 
        className={classNames('ProductItem', color)} 
        id={id}
        onClick={onClick} >
            <div className={classNames('pro-container', color)} id={id}>
                <div id={id}>
                    {name}
                    <hr/>
                    {price}원
                </div>
            </div>
        </div>
    )
}

export default ProductItem;