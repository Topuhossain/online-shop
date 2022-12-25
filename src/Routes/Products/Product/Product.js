import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Product = ({ data }) => {
    const { _id:id,name, price,seller, category,stock,img,ratings,shipping} = data;
    const navigate=useNavigate()
    const handlebutton=(e)=>{
        navigate(`/orderProceed/${e}`)


    }
    return (
        <div className='col-lg-4 col-sm-12 col-md-6  mb-4 '>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button onClick={()=>handlebutton(id)} variant="primary">Order</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;