import { ReactNode, useCallback, useEffect, useState } from "react";
import { User } from "../lib/domain/models/user.model";
import { AuthContext } from "../contexts/auth.context";
import { AuthService } from "../lib/services/auth.service";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const checkAuthStatus = useCallback(() => {
        setIsLoading(true);
        try {
            const token = sessionStorage.getItem('auth_token');

            if (token) {
                setIsAuthenticated(true);
                const userData = sessionStorage.getItem('user_data');
                if (userData) {
                    setUser(JSON.parse(userData));
                }
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        checkAuthStatus();
    }, [checkAuthStatus]);


    const login = async (username: string, password: string): Promise<boolean> => {
        setError(null);
        setIsLoading(true);

        try {
            const { user, tokens } = await AuthService.login({ username, password });

            sessionStorage.setItem('auth_token', tokens.token);
            sessionStorage.setItem('user_data', JSON.stringify(user));

            setUser(user);
            setIsLoading(false);
            return true;
        } catch (err: any) {
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
        isAuthenticated,
        isLoading,
        login,
        logout,
        checkAuthStatus,
        error,
    };

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
};