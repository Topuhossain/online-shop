import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import {useNavigate,useLocation} from 'react-router-dom'

const LogIn = () => {
    const emailref =useRef()
    const passref =useRef()
    const navigate=useNavigate()
    const location = useLocation()
    let errorElement
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit=event=>{
        event.preventDefault()
        const email = emailref.current.value
        const pass = passref.current.value
        signInWithEmailAndPassword(email,pass)
        console.log(email,pass);
    }
    const from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }

    if(error){
        errorElement =error.message
    }
    return (
        <div className=' mx-auto w-50'  >
            <h1>Please logIn here</h1>
            <Form className=''  onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailref} type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passref} type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{errorElement}</p>
                <br />
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>New in here<Link className='text-decoration-none ms-2   ' to={'/register'}>create a account</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default LogIn;