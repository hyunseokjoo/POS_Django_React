import React from 'react'
import classNames from 'classnames';
import '../../scss/atom/PayItem.scss';
import { useDispatch } from 'react-redux';
import { plusItem, minusItem, removeItem } from '../../store/selectedItemList'

const PayItem = ({id, category, name, price, number}) => {
    const dispatch = useDispatch();

    const onClick = (e) => {
        const {id} = e.target;
        const list = id.split("/");
        const product = {id : parseInt(list[0]), category: parseInt(list[1])}
        if(list[2] === '+'){
            dispatch(plusItem(product));
        }else {
            dispatch(minusItem(product));
        }
    };

    const onRemove = (e) => {
        const {id} = e.target;
        const list = id.split("/");
        const product = {id : parseInt(list[0]), category: parseInt(list[1])}
        dispatch(removeItem(product));
    }

    return (
        <>
            <div  className={classNames('PayItem')} >
                <div className='payItem_left'>
                    {name}
                </div>
                <div className='payItem_center'>
                    {price * number}
                </div>
                <div className='payItem_right'>
                    <button className='payItem-button'
                    id={id +"/"+ category + "/+"}
                    onClick={onClick}
                    >+</button>

                    <div className='number'>{number}</div>
                    <button className='payItem-button'
                    id={id +"/"+ category + "/-"}
                    onClick={onClick}
                    >-</button>
                    <button className='payItem-button'
                    id={id +"/"+ category}
                    onClick={onRemove}
                    >삭제</button>
                </div>
            </div>
        </>
    )
}

export default PayItem;