import { Autocomplete, FormControl, FormHelperText, TextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface AutocompleteInputProps<
    T extends FieldValues,
    Option,
    Multiple extends boolean = false,
    DisableClearable extends boolean = false,
    FreeSolo extends boolean = false
> {
    control: Control<T>;
    label: string;
    id: string;
    name: Path<T>;
    options: Option[];
    getOptionLabel: (option: Option) => string;
    getOptionValue?: (option: Option) => string;
    isOptionEqualToValue?: (option: Option, value: Option) => boolean;
    multiple?: Multiple;
    disableClearable?: DisableClearable;
    freeSolo?: FreeSolo;
    placeholder?: string;
}

export const AutocompleteInput = <
    T extends FieldValues,
    Option,
    Multiple extends boolean = false,
    DisableClearable extends boolean = false,
    FreeSolo extends boolean = false
>
    (
        props: AutocompleteInputProps<T, Option, Multiple, DisableClearable, FreeSolo>
    ) => {

    const {
        label,
        id,
        name,
        control,
        options,
        getOptionLabel,
        getOptionValue,
        isOptionEqualToValue,
        multiple = false as Multiple,
        disableClearable = false as DisableClearable,
        freeSolo = false as FreeSolo,
        placeholder,
    } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ref, ...field }, fieldState: { error } }) => (
                <FormControl error={!!error} required fullWidth>
                    <Autocomplete
                        id={id}
                        options={options}
                        getOptionLabel={(option) =>
                            typeof option === "string" ? option : getOptionLabel(option)
                        }
                        isOptionEqualToValue={isOptionEqualToValue}
                        value={value}
                        onChange={(_, data: any) => {
                            const processedValue = getOptionValue
                                ? (data ? getOptionValue(data) : '')
                                : (data ? getOptionLabel(data) : '');
                            onChange(processedValue);
                        }}
                        multiple={multiple}
                        disableClearable={disableClearable}
                        freeSolo={freeSolo}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={label}
                                error={!!error}
                                placeholder={placeholder}
                                variant="filled"
                                inputRef={ref}
                                value={typeof value === 'object' && value !== null
                                    ? getOptionLabel(value)
                                    : (value || '')}
                                {...field}
                            />
                        )}
                    />
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                </FormControl>
            )}
        />
    );
};