import React from 'react'
import PaymentItem from '../atom/PaymentItem';
import '../../scss/molecule/Payments.scss';

const Payments = ({paymentHistory}) => {
    const onClick = (e) => {
        console.log(e.target.id);
    };

    const paymentList = paymentHistory.map((payment, index) => (
        <div className='Paymentsform'>
            <PaymentItem 
            key={index} 
            id={payment.id} 
            amount={payment.amount}
            onClick={onClick} />
         </div>
    ));
    
    return paymentList
}

export default Payments;