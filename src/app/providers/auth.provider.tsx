import { ReactNode, useEffect, useState } from "react";
import { User } from "../lib/domain/models/user.model";
import { AuthContext } from "../contexts/auth.context";
import { AuthService } from "../lib/services/auth.service";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const token = sessionStorage.getItem('auth_token');

            if (token) {
                try {
                    const userData = await AuthService.refreshToken(token);
                    console.log('userData', userData);
                } catch (err) {
                    // Token is invalid, clear the storage
                    sessionStorage.removeItem('auth_token');
                    sessionStorage.removeItem('user_data');
                }
            }

            setIsLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (username: string, password: string): Promise<boolean> => {
        setError(null);
        setIsLoading(true);

        try {
            const { user, token } = await AuthService.login({ username, password });

            sessionStorage.setItem('auth_token', token);
            sessionStorage.setItem('user_data', JSON.stringify(user));

            setUser(user);
            setIsLoading(false);
            return true;
        } catch (err: any) {
            console.error();
            setError(err.data.errors[0].msg || 'Login failed');
            setIsLoading(false);
            return false;
        }
    };

    const logout = async () => {
        try {
            const token = sessionStorage.getItem('auth_token');
            if (token) {
                AuthService.logout();
            }
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            sessionStorage.removeItem('auth_token');
            sessionStorage.removeItem('user_data');
            setUser(null);
        }
    };

    const value = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        error,
    };

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
};