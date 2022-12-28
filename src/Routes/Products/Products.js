import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [product,setProduct]=useState([])
    const [count,setCount]=useState(0)
    const [page ,setPage]=useState(0)
    const[size,setSize]=useState(10)
    useEffect(()=>{
        axios.get('http://localhost:5000/count')
        .then(res=>{
            const {data}=res
            console.log(data);
            const ct = data.result
            const value = Math.ceil(ct/10)
            setCount(value)
        })
    },[])

    useEffect(()=>{
       axios.get(`http://localhost:5000/product?size=${size}&page=${page}`)
       .then(res=>{
        const{data}=res
        setProduct(data)
       })
        // const url =''
        // fetch('data.json')
        // .then(res=>res.json())
        // .then(data=>setProduct(data))
        // setProduct(data)
    },[size,page ])
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
           {
            [...Array(count).keys()].map(e=><button className={page===e?'bg-primary':''} onClick={()=>setPage(e)}>{e+1}</button>)
           }
           {size}

           <select onChange={e=>setSize(e.target.value)} name="" id="">
            <option value="15">15</option>
            <option value="12">12</option>
            <option value="5">5</option>
           </select>
        </div>
    );
};

export default Products;