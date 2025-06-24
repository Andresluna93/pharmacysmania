import {useForm} from 'react-hook-form'
import {registerEmbajadorRequest} from '../api/auth'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const validationSchema = z.object({
    username: z.string().min(8,'numero de caracteres minimos 8'),
    telefono: z.string().min(10,'Celular debe contener 10 digitos'),
    email: z.string().email("correo no valido"),
    colegio:z.string()
    .refine((value)=>value!=='selecciona',{message:"Debes selecionar un colegio"}),
    terminos:z.boolean()
    .refine((value)=>value===true,{message:'Debes seleccionar los terminos y condiciones'}),
})

function EmbajadorPage(){
        const {register, handleSubmit,formState: { errors },reset} = useForm({resolver:zodResolver(validationSchema)}) 
        const onSubmit = handleSubmit(async (values)=>{
                    const res = await registerEmbajadorRequest(values)
                    console.log(res)
                     reset({
                    username:"",
                    telefono:"",
                    email:"", 
                    colegio:"selecciona",
                    terminos: false
                })
            })

    return(
        <div className='bg-zinc-800 max-w-md p-10 rounded-md contenedorform'>
            <h1 className='my-2'>PharmacysMania Embajador</h1>
            <form onSubmit={onSubmit} className='formregister'>
                <input type="text" {...register("username",{require:true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Nombres'></input>
                {errors.username && <span>{errors.username.message}</span>}
                <input type='tel' {...register("telefono",{required:true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Telefono'></input>
                {errors.telefono && <span>{errors.telefono.message}</span>}
                <input type="email" {...register("email",{require:true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Correo'></input>
                {errors.email && <span>{errors.email.message}</span>}
                <br />
                <label htmlFor='colegio'>Colegio</label>
			    <select {...register("colegio",{require:true})} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>
				<option value='selecciona'>Selecciona..</option>
				<option value='Logos'>Logos</option>
				<option value='Americano'>Americano</option>
				<option value='Copol'>Copol</option>
			     </select>
                 {errors.colegio && <span>{errors.colegio.message}</span>}
                 <br />
                 <div>
                    <input type='checkbox' {...register("terminos",{required:true})} className='my-2 mx-2'></input>
                    <label htmlFor='terminos'>Terminos y Condiciones</label>
                 </div>
                 {errors.terminos && <span>{errors.terminos.message}</span>}
                 <br />
                 <button type='submit' className='rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2'>
                    Enviar
                 </button>
            </form>
        </div>
    )
}

export default EmbajadorPage