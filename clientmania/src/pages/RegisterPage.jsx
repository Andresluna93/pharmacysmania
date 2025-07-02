import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const validationSchema = z.object({
  username: z.string().min(8, "numero de caracteres minimos 8"),
  telefono: z.string().min(10, "Celular debe contener 10 digitos"),
  email: z.string().email("correo no valido"),
  colegio: z
    .string()
    .refine((value) => value !== "selecciona", {
      message: "Debes selecionar un colegio",
    }),
});

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(validationSchema) });
  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
    reset({
      username: "",
      telefono: "",
      email: "",
      colegio: "selecciona",
    });
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md contenedorform">
      <h1 className="my-2">PharmacysMania</h1>
      <form onSubmit={onSubmit} className="formregister">
        <input
          type="text"
          {...register("username", { require: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombres Completos"
        ></input>
        {errors.username && <span>{errors.username.message}</span>}
        <input
          type="tel"
          {...register("telefono", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Celular"
        ></input>
        {errors.telefono && <span>{errors.telefono.message}</span>}
        <input
          type="email"
          {...register("email", { require: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Correo"
        ></input>
        {errors.email && <span>{errors.email.message}</span>}
        <br />
        <div className="sm:col-span-3">
          <label htmlFor="colegio" className="block text-sm/6 font-medium">
            Colegio
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select
              {...register("colegio", { required: true })}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-zinc-700 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option value="selecciona">Selecciona</option>
              <option value="Logos">Logos</option>
              <option value="Americano">Americano</option>
              <option value="Copol">Copol</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
          {errors.colegio && <span>{errors.colegio.message}</span>}
          <br />
        </div>
        <button
          type="submit"
          className="rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
