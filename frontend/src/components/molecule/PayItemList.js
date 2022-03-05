import React from 'react'
import { useSelector } from 'react-redux';
import PayItem from '../atom/PayItem';

const PayItemList = () => {
    const itemList = useSelector((state) => state.selectedItemReducer.itemList);

    const payItemList = itemList.map(item => (
            <PayItem
            key={item.id}
            id={item.id}
            category={item.category}
            name={item.name}
            price={item.price}  
            number={item.number}
            />
    ));
    return payItemList
}

export default PayItemList;