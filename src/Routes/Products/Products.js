import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        // setProduct(data)
    },[])
    return (
        <div className='container'>
            <h2>this is your product: {product.length}</h2>
           <div className='row'>
           {
                product.map(pro=><Product
                key={pro._id}
                data={pro}></Product>)
            }
           </div>
        </div>
    );
};

export default Products;