import { Box, Button, Card, CardContent, Grid, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { SignUpFormFields } from "../lib/domain/auth/validations/signup.validations";
import { ArrowBack } from "@mui/icons-material";
import { useForm } from "react-hook-form";

export const SignupPage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const { handleSubmit } = useForm<SignUpFormFields>({
        defaultValues: {
            fullname: '',
            email: '',
            username: '',
            password: '',
            confirm_password: '',
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
                    boxShadow: 3,
                    margin: 2,
                }}
            >

                {!isMobile && (
                    <Box
                        sx={{
                            width: '40%',
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
                            Crea una nueva cuenta
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                            Registra tus datos
                        </Typography>
                    </Box>
                )}

                <Box sx={{ width: isMobile ? '100%' : '60%' }}>
                    <CardContent>
                        <form action="POST" onSubmit={handleSubmit(async (data) => {
                            console.log(data);
                        })} noValidate>
                            <Box sx={{ flexGrow: 1 }}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                                        Registrarse
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid size={12}>
                                            <TextField
                                                variant='filled'
                                                name={'fullname'}
                                                label={'Nombre completo'}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <TextField
                                                variant='filled'
                                                name={'username'}
                                                label={'Usuario'}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <TextField
                                                variant='filled'
                                                name={'email'}
                                                label={'Correo electrónico'}
                                                type={'email'}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <TextField
                                                variant='filled'
                                                name={'password'}
                                                label={'Contraseña'}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <TextField
                                                variant='filled'
                                                name={'confirm_password'}
                                                label={'Confirmar Contraseña'}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button variant='contained' type={'submit'}>
                                        Registrarse
                                    </Button>
                                </Stack>
                            </Box>
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
