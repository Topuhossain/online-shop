import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate,useLocation,Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequiredAuth = ({children}) => {
    const navigate = useNavigate()
    const location= useLocation()
    const [user]=useAuthState(auth)

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
  }
    

    
    return children;
       
};

export default RequiredAuth;