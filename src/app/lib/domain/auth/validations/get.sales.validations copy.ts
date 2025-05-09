import { z } from 'zod';


export const GetSalesValidations = z
    .object({
        vendor: z.string()
            .nonempty('El nombre de usuario es requerido')
            .min(3, 'El nombre de usuario debe tener al menos 6 caracteres'),

        start_date: z.date()
            .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
                message: 'La fecha de inicio es requerida',
            }),
        end_date: z.date()
            .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
                message: 'La fecha de fin es requerida',
            }),
    })
