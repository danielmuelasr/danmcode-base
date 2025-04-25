import { AuthService } from "../../../services/auth.service";

export const loginHandler = async (
    data: { username: string; password: string },
    setError: (msg: string) => void,
    setOpen: (open: boolean) => void
) => {
    try {
        const loginData = await AuthService.login(data);
        console.log(loginData);
    } catch (error: any) {
        if (error) {
            setError(error.data?.error || error.data?.errors?.[0]?.msg || 'Error desconocido');
            setOpen(true);
        } else {
            setError("Ocurrió un error inesperado. Intenta más tarde.");
        }
    }
};