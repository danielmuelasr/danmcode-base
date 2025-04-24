import { UseFormGetValues } from 'react-hook-form';

export interface SignUpFormFields {
    fullname: string;
    email: string;
    username: string;
    password: string;
    confirm_password: string;
}

export const signupValidationRules = (getValues: UseFormGetValues<SignUpFormFields>) => ({
    fullname: {
        required: 'El nombre completo es obligatorio',
        minLength: {
            value: 3,
            message: 'El nombre completo debe tener al menos 3 caracteres',
        },
    },
    username: {
        required: 'El nombre de usuario es obligatorio',
        minLength: {
            value: 3,
            message: 'El nombre de usuario debe tener al menos 3 caracteres',
        },
    },
    email: {
        required: 'El correo electrónico es obligatorio',
        minLength: {
            value: 3,
            message: 'El correo debe tener al menos 3 caracteres',
        },
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Ingresa un correo electrónico válido',
        },
    },
    password: {
        required: 'La contraseña es obligatoria',
        minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres',
        },
    },
    confirm_password: {
        required: 'Por favor confirma la contraseña',
        minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres',
        },
        validate: (value: string) =>
            value === getValues('password') || 'Las contraseñas no coinciden',
    },
});
