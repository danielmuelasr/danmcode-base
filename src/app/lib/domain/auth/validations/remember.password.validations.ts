import {z} from 'zod';


export const rememberPasswordValidations = z
.object({
username: z
    .string()
    .nonempty('El nombre de usuario es obligatorio')
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
    .max(20, 'El nombre de usuario no debe exceder los 20 caracteres'),
})
