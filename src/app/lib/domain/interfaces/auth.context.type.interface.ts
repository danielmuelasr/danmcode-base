import { User } from "../models/user.model";
import { IToken } from "./token.interface";

export interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
    error: string;
    logout: () => void;
    resetPassword: (email: string) => Promise<any>;
    refreshToken: (refreshToken: string) => Promise<IToken>;
    isAuthenticated: boolean;
}
