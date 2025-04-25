import { postResource } from "../infraesctructure/api.endponits";


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

    private static handleError(error: any): void {
        throw error;
    }
}