import { z } from 'zod';

export const signupValidations = z
    .object({
        fullname: z
            .string()
            .nonempty('El nombre completo es obligatorio')
            .min(3, 'El nombre completo debe tener al menos 3 caracteres')
            .max(100, 'El nombre completo no debe exceder los 100 caracteres'),
        username: z
            .string()
            .nonempty('El nombre de usuario es obligatorio')
            .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
            .max(20, 'El nombre de usuario no debe exceder los 20 caracteres'),
        email: z
            .string()
            .nonempty('El correo electrónico es obligatorio')
            .min(3, 'El correo electrónico debe tener al menos 3 caracteres')
            .max(100, 'El correo electrónico no debe exceder los 100 caracteres')
            .email('Ingresa un correo electrónico válido'),
        password: z
            .string()
            .nonempty('La contraseña es obligatoria')
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(100, 'La contraseña no debe exceder los 100 caracteres')
            .regex(/[a-z]/, "La contraseña debe tener al menos una letra minúscula")
            .regex(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
            .regex(/\d/, "La contraseña debe tener al menos un número")
            .regex(/[@$!%*?&#]/, "La contraseña debe tener al menos un símbolo especial"),
        confirm_password: z
            .string()
            .nonempty('Por favor confirma la contraseña')
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
    }).refine((data) => data.password === data.confirm_password, {
    message: "Las contraseñas deben coincidir",
    path: ["confirm_password"],
  });
