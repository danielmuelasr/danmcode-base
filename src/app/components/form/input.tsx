import { FilledInput, FormControl, FormHelperText, InputLabel } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    control: Control<T>;
    label: string;
    type?: string;
    id: string;
    name: Path<T>;
}

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
    const { label, id, name, control, type = 'text' } = props;


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
                        type={type}
                    />
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                </FormControl>
            )}
        />
    );
};