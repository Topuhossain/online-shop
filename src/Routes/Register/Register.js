import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [agree,setAgree]= useState(false)
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const handleSubmit=event=>{
        event.preventDefault()
        const email =event.target.email.value
        const pass =event.target.pass.value
        createUserWithEmailAndPassword(email,pass)
        console.log(email,pass);
    }

    if(error){
        errorElement=error.message
    }
    return (
        <div  className=' mx-auto w-50'>
            <h2>Please create a account here</h2>
            <Form onSubmit={handleSubmit} className='' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='pass' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-primary' :'text-danger'} onClick={()=>setAgree(!agree)} type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                <br />
                <Button disabled={!agree} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New in here<Link className='text-decoration-none ms-2   ' to={'/login'}>LogIn here</Link></p>
            <div>
            <SocialLogIn></SocialLogIn>
            </div>
        </div>
    );
};

export default Register;