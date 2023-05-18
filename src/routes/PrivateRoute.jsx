// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    let location = useLocation();
    if (loading) {
        return <progress className="progress progress-primary w-56" value="100" max="100"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;