import { z } from 'zod';


export const loginValidations = z
    .object({
        username: z.string()
            .nonempty('El nombre de usuario es requerido')
            .min(3, 'El nombre de usuario debe tener al menos 6 caracteres'),

        password: z.string()
            .nonempty('La contraseña es requerida')
            .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    })
