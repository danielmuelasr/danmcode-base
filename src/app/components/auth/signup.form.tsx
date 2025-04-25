import { useForm } from "react-hook-form";
import { signupValidations } from "../../lib/domain/auth/validations/signup.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Input } from "../form/input";
import { InputPassword } from "../form/input.password";


export const SignupForm = () => {

    const {
        control,
        handleSubmit,
    } = useForm({
        resolver: zodResolver(signupValidations),
        mode: 'onChange',
        defaultValues: {
            fullname: '',
            email: '',
            username: '',
            password: '',
            confirm_password: '',
        },
    });

    return (
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
                            <Input
                                id="fullname"
                                label="Nombre completo"
                                name="fullname"
                                control={control}
                            />
                        </Grid>
                        <Grid size={6}>
                            <Input
                                id="username"
                                label="Usuario"
                                name="username"
                                control={control}
                            />
                        </Grid>
                        <Grid size={6}>
                            <Input
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                control={control}
                            />
                        </Grid>
                        <Grid size={6}>
                            <InputPassword
                                id="password"
                                label="Contraseña"
                                name="password"
                                control={control}
                            />
                        </Grid>
                        <Grid size={6}>
                            <InputPassword
                                id="confirm_password"
                                label="Confirmar contraseña"
                                name="confirm_password"
                                control={control}
                            />
                        </Grid>
                    </Grid>
                    <Button variant='contained' type={'submit'}>
                        Registrarse
                    </Button>
                </Stack>
            </Box>
        </form>
    );
}