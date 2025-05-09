import { IToken } from "../domain/interfaces/token.interface";

export class TokenService {

    static getToken(): IToken | null {
        const tokenString = localStorage.getItem('tokens');

        if (!tokenString) return null;

        try {
            const token: IToken = JSON.parse(tokenString);
            return token;
        } catch (error) {
            console.error('Error parsing token from localStorage', error);
            localStorage.removeItem('tokens');
            return null;
        }
    }

    static setTokens(tokens: IToken): void {
        localStorage.setItem('tokens', JSON.stringify(tokens));
    }

    static clearTokens(): void {
        localStorage.removeItem('tokens');
        localStorage.removeItem('user');
    }

    static isTokenExpired(token: string | undefined | null): boolean {
        if (!token) return true;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));

            if (!payload.exp) return false;

            return payload.exp * 1000 < Date.now();
        } catch (e) {
            return true;
        }
    }

    static tokenTimeRemaining(token: string | undefined | null): number {
        if (!token) return 0;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (!payload.exp) return Infinity;

            return Math.max(0, payload.exp * 1000 - Date.now()) / 1000;
        } catch (e) {
            return 0;
        }
    }

    static getTokenExpiry(token: string): Date | null {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload.exp) {
                return new Date(payload.exp * 1000);
            }
            return null;
        } catch (e) {
            return null;
        }
    }
}