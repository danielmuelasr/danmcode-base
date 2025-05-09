import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { loginValidations } from "../../lib/domain/auth/validations/login.validations";
import { Input } from "../form/input";
import { InputPassword } from "../form/input.password";
import { useState } from "react";
import { CustomAlert } from "../alerts/custom.alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

export const LoginForm = () => {

    const [loginError, setLoginError] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const {
        control,
        handleSubmit,
    } = useForm({
        resolver: zodResolver(loginValidations),
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: '',
        },
    });


    return (
        <>
            <CustomAlert
                message={loginError ?? ''}
                title="Error iniciando sesión"
                severity="error"
                isOpen={open}
                onClose={() => {
                    setOpen(false);
                    setLoginError(null);
                }}
            />

            <form
                onSubmit={handleSubmit(async (data) => {
                    try {
                        if (await login(data.username, data.password)) {
                            navigate('/dashboard');
                        }
                    } catch (error: any) {
                        console.error('error', error);
                        setLoginError(error.data?.error || error.data?.errors?.[0]?.msg || 'Error desconocido');
                        setOpen(true);
                    }
                })}
                noValidate
            >
                <Stack spacing={2}>
                    <Typography variant="h6">Iniciar sesión</Typography>

                    <Input
                        id="username"
                        label="Usuario"
                        name="username"
                        control={control}
                    />

                    <InputPassword
                        id="password"
                        label="Contraseña"
                        name="password"
                        control={control}
                    />

                    <Box sx={{
                        mb: 1,
                        width: '100%',
                        maxWidth: 900,
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}>
                        <Button
                            href={'/remember-password'}
                            variant="text"
                            sx={{
                                textTransform: 'initial',
                                padding: 0
                            }}
                        >
                            ¿Olvidó su contraseña?
                        </Button>
                    </Box>

                    <Button variant="contained" type="submit">
                        Iniciar sesión
                    </Button>

                    <Box sx={{
                        mb: 1,
                        width: '100%',
                        maxWidth: 900,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Button
                            variant="text"
                            sx={{
                                textTransform: 'initial',
                                padding: 0
                            }}
                            href={'/signup'}
                        >
                            ¿No tienes cuenta aún? Registrate
                        </Button>
                    </Box>

                </Stack>
            </form>
        </>

    );

}