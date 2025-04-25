import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FilledInput, FormControl, FormHelperText, InputAdornment, InputLabel } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface InputPasswordProps<T extends FieldValues> {
    control: Control<T>;
    label: string;
    id: string;
    name: Path<T>;
}

export const InputPassword = <T extends FieldValues>(props: InputPasswordProps<T>) => {
    const { label, id, name, control } = props;

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormControl variant="filled" error={!!error} required>
                    <InputLabel>{label}</InputLabel>
                    <FilledInput
                        id={id}
                        {...field}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                </FormControl>
            )}
        />
    );
};