import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';

type RedirectIfAuthenticatedProps = {
    children: React.ReactNode;
};

const RedirectIfAuthenticated: React.FC<RedirectIfAuthenticatedProps> = ({ children }) => {
    const { isAuthenticated, isLoading, checkAuthStatus } = useAuth();

    useEffect(() => {
        checkAuthStatus();
    }, [checkAuthStatus]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
};

export default RedirectIfAuthenticated;