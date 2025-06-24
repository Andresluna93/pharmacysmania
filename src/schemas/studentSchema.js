import {z} from 'zod'

export const studentSchema = z.object({
    username: z.string({required_error:'Nombre de estudiante es requerido'}),
    telefono: z.string({required_error:'Numero de celular requerido'}).regex(/^\d{10}$/,{message: "El número de teléfono debe tener exactamente 10 dígitos"}),
    email: z.string({required_error:'email es requerido'}).email({message:'email invalido'}),
    colegio: z.string({required_error:'colegio es requerido'}),
})