import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { rememberPasswordValidations } from "../../lib/domain/auth/validations/remember.password.validations";
import { Input } from "../form/input";

export const RememberPasswordForm = () => {

    const {
        control,
        handleSubmit,
    } = useForm({
        resolver: zodResolver(rememberPasswordValidations),
        mode: 'onChange',
        defaultValues: {
            username: '',
        },
    });

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                console.log(data);
            })}
            noValidate
        >
            <Stack spacing={2}>
                <Typography variant="h6">Recordar contraseña</Typography>

                <Input
                    id="username"
                    label="Usuario"
                    name="username"
                    control={control}
                />

                <Button variant="contained" type="submit">
                    Recuperar contraseña
                </Button>


            </Stack>
        </form>
    );

}