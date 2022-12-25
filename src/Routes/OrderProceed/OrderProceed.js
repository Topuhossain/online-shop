import React from 'react';
import {useParams} from 'react-router-dom';

const OrderProceed = () => {
    const {locate}=useParams()
    return (
        <div>
            <h1>Your order is under proceed:{locate}</h1>
        </div>
    );
};

export default OrderProceed;