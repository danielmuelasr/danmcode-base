import { FilledInput, FormControl, FormHelperText, InputLabel } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    control: Control<T>;
    label: string;
    type?: string;
    id: string;
    name: Path<T>;
    placeholder?: string;
}

// Type guard for Date
function isValidDate(value: unknown): value is Date {
    return value instanceof Date && !isNaN(value.getTime());
}

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
    const {
        label,
        id,
        name,
        control,
        type = 'text',
        placeholder
    } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
                <FormControl variant="filled" error={!!error} required fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <FilledInput
                        id={id}
                        type={type}
                        onChange={(e) => {
                            if (type === 'date') {

                                const dateValue = e.target.value
                                    ? new Date(e.target.value)
                                    : null;
                                onChange(dateValue);
                            } else {
                                onChange(e);
                            }
                        }}
                        value={
                            type === 'date' && isValidDate(value)
                                ? value.toISOString().split('T')[0]
                                : (value || '')
                        }
                        placeholder={placeholder}
                        {...field}
                    />
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                </FormControl>
            )}
        />
    );
};