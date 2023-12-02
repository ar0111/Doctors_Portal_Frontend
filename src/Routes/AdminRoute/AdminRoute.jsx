import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
   
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default AdminRoute;