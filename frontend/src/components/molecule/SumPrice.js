import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { payItem } from '../../store/selectedItemList'
import '../../scss/molecule/SumPrice.scss';

const SumPrice = () => {
    const alert = useAlert();
    const jwtToken = useSelector((state) => state.jwtReducer.jwtToken);
    const itemList = useSelector((state) => state.selectedItemReducer.itemList);

    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState('');
    const [payData, setPayDate] = useState({});

    useEffect(() =>{
        setTotalPrice(itemList.reduce((prev, cur) => {return prev + (cur.number * cur.price)}, 0));
        setPayDate({itemList});
        console.log(payData);
    }, [itemList]);

    const onClick = () => {
        const data = { itemList };
        Axios.post('http://localhost:8000/payment/payments/', data ,
        { 
            headers: { Authorization: `JWT ${jwtToken}` },
        })
        .then((res) => {
            console.log(res.data);
            payProducts(res.data.id);
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    const payProducts = (id) => {
        const data = { payment_id: id,  itemList };
        Axios.post('http://localhost:8000/payment/paymentlist/', data ,
        { 
            headers: { Authorization: `JWT ${jwtToken}` },
        })
        .then((res) => {
            console.log(res.data);
            dispatch(payItem());
            alert.info('결제 완료')
        })
        .catch((err)=>{
            console.log(err);
        });
    }


    return (
        <>
            <div className='SumPrice'>
                <div className='SumPrice-container'>
                    <div className='SumPrice-left'>
                        합계 : 
                    </div>
                    <div className='SumPrice-right'>
                         {totalPrice} 원
                         <button className='SumPrice-button' onClick={onClick}>
                             결제
                         </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SumPrice;