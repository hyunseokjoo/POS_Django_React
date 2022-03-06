import React from 'react'
import classNames from 'classnames';
import '../../scss/atom/PaymentItem.scss';

const PaymentItem = ({id, amount, onClick}) => {
    return (
        <>
            <div id={id} className={classNames('PaymentItem')} onClick={onClick} >
                <div className='PaymentItem_left'>
                    결제번호 : {id}
                </div>
                <div className='PaymentItem_center'>
                    결제날짜 : {id}
                </div>
                <div className='PaymentItem_right'>
                    결제금액 : {amount}
                </div>
            </div>
        </>
    )
}

export default PaymentItem;