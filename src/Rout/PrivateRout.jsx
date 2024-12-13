import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../AuthProvider/AuthContext';

const PrivateRout = ({children}) => {
      console.log(children)                        
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate to="/signin" state={location?.pathname}></Navigate>
};

export default PrivateRout;