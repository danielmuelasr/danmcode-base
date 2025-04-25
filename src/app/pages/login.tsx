import { Box, Button, Card, CardContent, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputPassword } from "../components/form/input.password";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidations } from "../lib/domain/auth/validations/login.validations";

export const LoginPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f4f8',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: 900,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    boxShadow: 2,
                    margin: 2,
                }}
            >
                {!isMobile && (
                    <Box
                        sx={{
                            width: '50%',
                            backgroundColor: '#009688',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                            flexDirection: 'column',
                            padding: 4,
                        }}
                    >
                        <Typography variant="h4" fontWeight={700}>
                            Bienvenido de nuevo
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                            Inicia sesión para acceder a tu dashboard
                        </Typography>
                    </Box>
                )}

                <Box sx={{ width: isMobile ? '100%' : '50%' }}>
                    <CardContent>
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                console.log(data);
                            })}
                            noValidate
                        >
                            <Stack spacing={2}>
                                <Typography variant="h6">Iniciar sesión</Typography>

                                <TextField
                                    variant="filled"
                                    name="username"
                                    label="Usuario"
                                    fullWidth
                                    required
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
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};