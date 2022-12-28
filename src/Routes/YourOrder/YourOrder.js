import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'
import axiosPrivate from '../../api/axiosPrivate';

import auth from '../../firebase.init';

const YourOrder = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const navigate = useNavigate()
    const [order, setOrder] = useState([])
    const [user] = useAuthState(auth)
    //    console.log(user);
    useEffect(() => {
        const run = async () => {
            const email = user.email;
            // console.log(email);
            const url = `http://localhost:5000/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setOrder(data)
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    navigate('/login')
                    signOut(auth)
                    
                }

            }



        }
        run()
    }, [user])
    return (
        <div>
            <h2>this is your order:{order.length}</h2>
        </div>
    );
};

export default YourOrder;