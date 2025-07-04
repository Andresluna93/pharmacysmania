import { useForm } from "react-hook-form";
import { registerEmbajadorRequest } from "../api/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { TermsModal } from "../components/terminosModal";
import Documento from '../assets/AUTORIZACION DE PARTICIOPACION.pdf' 

const validationSchema = z.object({
  username: z.string().min(8, "numero de caracteres minimos 8"),
  telefono: z.string().min(10, "Celular debe contener 10 digitos"),
  email: z.string().email("correo no valido"),
  colegio: z.string().refine((value) => value !== "selecciona", {
    message: "Debes selecionar un colegio",
  }),
  terminos: z.boolean().refine((value) => value === true, {
    message: "Debes seleccionar los terminos y condiciones",
  }),
});

function EmbajadorPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(validationSchema) });
  const onSubmit = handleSubmit(async (values) => {
    const res = await registerEmbajadorRequest(values);
    console.log(res);
    reset({
      username: "",
      telefono: "",
      email: "",
      colegio: "selecciona",
      terminos: false,
    });
  });

  const termsText = `
  TERMINOS Y CONDICIONES EMBAJADOR SKIN CARE XPERIENCE
1.	– Organizador.
El concurso es organizado por Grupo DIFARE, con domicilio en el Parque Empresarial Colon, en adelante organizador.

2.	– Duración.
Inicio: 01 de agosto 2025.
Cierre: 30 de noviembre de 2025.

3.	– Participantes.
Abierto a todos los estudiantes de las instituciones educativas de la Provincia del Guayas, en adelante participantes.
No podrán participar familiares directos del organizador, ni familiares de las personas involucradas en la organización del concurso.

4.	-Modo de inscripción.
Para poder participar del concurso el estudiante deberá:
a.	Escanear el código QR, que lo redirigirá a un formulario de registro.
b.	Llenar el formulario con la información requerida.
c.	Descargar el documento adjunto, a fin que el representante legal del estudiante firme la autorización para poder participar en el concurso.
d.	Cargar el documento firmado adjuntando copia de cedula del representante legal, a fin de validar la autorización conferida al adolescente.
e.	Aceptar los términos y condiciones del concurso.

5.	-Mecánica y criterios de selección. 
a.	Cada participante deberá publicar foto o video una vez por semana haciendo énfasis en los productos de Skin Care distribuidos por Pharmacy’s en cualquier red social, si publica en las tres redes sociales se multiplicará por dos las probabilidades de ganar recompensas.
b.	Dar like, comentar y compartir todos los posts de Pharmacy’s Manía.
c.	Si un participante olvida publicar su foto o video semanal quedará eliminado automáticamente del concurso.
d.	Se tomará en cuanta el cumplimiento de los literales anteriores sin excepción.
e.	El post más viral será el ganador del concurso. Para ello se tomarán en cuanta el número de reacciones.

6.	-Premios y beneficios.
a.	Un Play Station 5 con licencia de Play Station Plus Essential por 1 año.
b.	1 año de tratamiento de skin care (los productos se los proporcionará cada tres meses, previa evaluación dermatológica).
c.	Ser influencer remunerado de la marca Pharmacy’s por 1 año. 
d.	Opción a renovación para trabajar como embajador de la marca Pharmacy’s.
e.	Recompensas y promociones exclusivas.
f.	Participación de eventos programados por la marca.

7.	-Derechos de propiedad intelectual.
Al participar, cada estudiante cede al organizador los derechos necesarios para: reproducir, difundir y publicar los contenidos en cualquier medio.

8.	-Tratamiento de datos personales.
Al participar del presente concurso se acepta que los datos obtenidos (nombres, fotografías, contacto del tutor) sean usados para gestionar el concurso (información de productos de la marca) y comunicar resultados, de acuerdo con la con la ley de protección de datos personales. Los cuales no serán usados para otros fines sin el consentimiento previo.

9.	-Responsabilidad y Cancelaciones.
Los participantes eximen al Organizador de responsabilidad por fallas técnicas, perdidas o daños que pudieran derivarse de la participación o del premio.
El organizador tampoco será responsable por fallas técnicas en el sistema que impidan la participación del concursante.
El organizador puede modificar, suspender o cancelar el concurso por razones ajenas sin obligación de otorgar compensación alguna. 

10.	–Legislación aplicable y jurisdicción.
Estos términos se regirán por las leyes de la Republica de Ecuador, para cualquier conflicto legal, las partes fijan como domicilio y se someten a los tribunales de la ciudad de guayaquil.

11.	-Aceptación de términos y condiciones.
La participación implica la aceptación integra de las términos y condiciones del concurso.
  `;

  const handleAccept = () => {
    // Lógica tras aceptar: enviar formulario, setState, etc.
    console.log("Usuario aceptó los términos");
  };

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md contenedorform">
      <h1 className="my-2">PharmacysMania Embajador</h1>
      <form onSubmit={onSubmit} className="formregister">
        <input
          type="text"
          {...register("username", { require: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombres"
        ></input>
        {errors.username && <span>{errors.username.message}</span>}
        <input
          type="tel"
          {...register("telefono", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Telefono"
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
        <div>
          <input
            type="checkbox"
            {...register("terminos", { required: true })}
            className="my-2 mx-2"
          ></input>
          <TermsModal text={termsText} onAccept={handleAccept} />
        </div>
        {errors.terminos && <span>{errors.terminos.message}</span>}
        <br />
        <a href={Documento} download={''} className="btnDownload rounded-md bg-zinc-600 hover:bg-indigo-500 px-3 py-1 text-sm">Descargar archivo de Autorizacion</a>
        <br />
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

export default EmbajadorPage;
