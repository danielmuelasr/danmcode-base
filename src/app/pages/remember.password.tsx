import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

export const RememberPassword = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { handleSubmit } = useForm({
        defaultValues: {
            username: '',
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
                        <Typography variant="h4" sx={{ textAlign: 'center' }} fontWeight={700}>
                            ¿Olvidaste tu contraseña?
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                            Tranquilo, ingresa tu nombre de usuario y la recuperaremos
                        </Typography>
                    </Box>
                )}

                <Box sx={{ width: isMobile ? '100%' : '50%' }}>
                    <CardContent >
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                console.log(data);
                            })}
                            noValidate
                        >
                            <Stack spacing={2}>
                                <Typography variant="h6">Recordar contraseña</Typography>

                                <TextField
                                    variant="filled"
                                    name="username"
                                    label="Usuario"
                                    fullWidth
                                    required
                                />

                                <Button variant="contained" type="submit">
                                    Recuperar contraseña
                                </Button>


                            </Stack>
                        </form>
                    </CardContent>
                    <Box sx={{
                        mb: 2,
                        width: '100%',
                        maxWidth: 900,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        pr: 2
                    }}>
                        <Button
                            variant="text"
                            startIcon={<ArrowBack />}
                            onClick={() => window.history.back()}
                        >
                            Regresar
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}
