import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate,useLocation,Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Looding from '../Looding/Looding';

const RequiredAuth = ({children}) => {
    const navigate = useNavigate()
    const location= useLocation()
    const [user,loading]=useAuthState(auth)
    if(loading){
        return <Looding></Looding>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
  }
    

    
    return children;
       
};

export default RequiredAuth;