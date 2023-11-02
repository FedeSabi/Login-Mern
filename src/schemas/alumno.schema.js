import {z} from 'zod'

export const createAlumnoSchema = z.object({
    nombre: z.string({
        required_error: 'Nombre is required'
    }),
    apellido: z.string({
        required_error: 'Apellido is required'
    }),
    genero: z.string({
        required_error: 'Genero is required'
    }),
    nacimiento: z.string({
        required_error: 'Nacimiento is required'
    }),
    nivel: z.string({
        required_error: 'Nivel is required'
    }),
    telefono: z.number({
        required_error: 'Telefono is required'
    }),
    email: z.string({
        required_error: 'Nombre is required'
    }),
})