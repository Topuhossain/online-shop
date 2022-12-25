import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const handlesubmit = () => {
    //     signInWithGoogle()
    // }
    return (
        <div>
            <div className=' d-flex' >
                <div style={{ height: "1px" }} className='w-50 bg-primary mt-3'></div>
                <p className='m-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary mt-3'></div>
            </div>
            <div className='text-center'>
                <button className=' w-75 p-1 ' onClick={()=>signInWithGoogle()}>GoogleSignIn</button>
            </div>
        </div>
    );
};

export default SocialLogIn;