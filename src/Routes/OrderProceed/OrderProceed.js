import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const OrderProceed = () => {

    const {locate}=useParams()
    const [product,setProduct]=useState([])
    const [user]=useAuthState(auth)
    useEffect(()=>{
        axios.get(`http://localhost:5000/product/${locate}`)
        .then(res=>{
            const data =res;
            // console.log(data);
            setProduct(data.data);

        })
    },[])

    const  handlesubmit=event=>{
        event.preventDefault()
        const email =event.target.email.value
        const product =event.target.product.value
        const address =event.target.address.value
        const mobile =event.target.mobile.value
        const data={email,product,address,mobile};
        // console.log(data);

        axios.post('http://localhost:5000/order',data)
        .then(res=>{
            const {data}=res
            console.log(data);
            if(data.insertedId){
                alert('order proceed success')
                event.target.reset()
            }
        })
    }
    return (
        <div>
            <h1>Your order is under proceed:{product.name}</h1>
            <form onSubmit={handlesubmit} className='text-center'>
                <input className='mt-3 w-50' type="email" name="email" placeholder='email' readOnly value={user?.email} id=""/>
                <br />
                <input className='mt-3 w-50' type="text" name="address" placeholder='address'  id="" />
                <br />
                <input className='mt-3 w-50' type="text" name='product' readOnly value={product?.name} id="" />
                <br />
                <input className='mt-3 w-50' type="number" name='mobile' placeholder='mobile' id="" />
                <br />

                <button  className='mt-3 ' type="submit">place Order</button>
            </form>
        </div>
    );
};

export default OrderProceed;