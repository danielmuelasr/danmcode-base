import { IToken } from "../domain/interfaces/token.interface";
import { User } from "../domain/models/user.model";
import { postResource } from "../infraesctructure/api.endponits";
import { TokenService } from "./token.service";


export class AuthService {

    static async login(data: {}): Promise<any | null> {
        try {
            const response = await postResource('auth/login', data);
            return response;
        } catch (error) {
            AuthService.handleError(error);
            return [];
        }
    }

    static logout(): void {
        TokenService.clearTokens();
    }

    static async refreshToken(refreshToken: string): Promise<IToken> {
        try {
            const response = await postResource('auth/refresh-token', { refreshToken });
            const data = await response.json();

            if (!response.ok) {
                throw new Error((data as any).message || 'Failed to refresh token');
            }

            const { tokens } = data.result;

            const storedTokens = TokenService.getToken() || {};

            TokenService.setTokens({
                ...storedTokens,
                ...tokens
            });

            return tokens;
        } catch (err: any) {
            throw err;
        }
    }

    static async resetPassword(email: string): Promise<any> {
        try {
            const response = await postResource('auth/reset-password', { email });
            const data = await response.json();

            if (!response.ok) {
                throw new Error((data as any).message || 'Failed to reset password');
            }

            return data;
        } catch (err: any) {
            throw err;
        }
    }

    static getCurrentUser(): User | null {

        const userString = localStorage.getItem('user');
        if (!userString) return null;

        try {
            const userJson = JSON.parse(userString);
            const user = new User(userJson);
            return user;
        } catch (e) {
            localStorage.removeItem('user');
            return null;
        }
    }

    private static handleError(error: any): void {
        throw error;
    }
}