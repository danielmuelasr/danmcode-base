import { useAuth } from "../../../../contexts/auth.context";

export const loginHandler = async (
    username: string,
    password: string,
    setError: (msg: string) => void,
    setOpen: (open: boolean) => void,
) => {
    const { login } = useAuth();

    try {
        if (await login(username, password)) {
        }
    } catch (error: any) {
        if (error) {
            setError(error.data?.error || error.data?.errors?.[0]?.msg || 'Error desconocido');
            setOpen(true);
        } else {
            setError("Ocurrió un error inesperado. Intenta más tarde.");
        }
    }
};