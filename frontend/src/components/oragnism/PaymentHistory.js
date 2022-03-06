import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import '../../scss/oragnism/PaymentHistory.scss';
import Payments from '../molecule/Payments';
import { useSelector } from 'react-redux';

const PaymentHistory =() => {
    const jwtToken = useSelector((state) => state.jwtReducer.jwtToken);
    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() =>{
        Axios.get('http://localhost:8000/payment/payments/',
        { 
            headers: { Authorization: `JWT ${jwtToken}` },
        })
        .then((res)=> {
            console.log(res.data);
            setPaymentHistory(res.data);
        })
        .catch(()=> {
        });
    }, []);

    return(
        <>
            <div className='PaymentHistory-content'>
                <Payments paymentHistory={paymentHistory}/>
            </div>
        </>
    )
}

export default PaymentHistory;


