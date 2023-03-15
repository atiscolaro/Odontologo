import React, { useEffect, useState } from 'react'
import Error from './Error';


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

   const [nombre, setNombre] = useState('');
   const [email, setEmail] = useState('');
   const [turno, setTurno] = useState('');
   const [odontologo, setOdontologo] = useState('');
   const [sintomas, setSintomas] = useState('');

   const [error, setError] = useState(false);

   useEffect(() => {
     if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setEmail(paciente.email);
      setTurno(paciente.turno);
      setOdontologo(paciente.odontologo);
      setSintomas(paciente.sintomas);
     }
   
   }, [paciente])
   
   

   const generarId = () => {
      const random = Math.random().toString(36).slice(2,-1);
      const fecha = Date.now().toString(36);
      return fecha + random;
   }


   const handleSubmit = (e) => {
      e.preventDefault();

      // Validación del Formulario
      if ([nombre, email, turno, odontologo, sintomas].includes('')) {
         console.log('Hay algunos campos vacios');
         setError(true);
         return;
      }
      setError(false);

      // Objeto de pacientes
      const objetoPaciente = {
         nombre,
         email,
         turno,
         odontologo,
         sintomas
      }

      if(paciente.id ){
         // Editando el registro
         objetoPaciente.id = paciente.id;
         const pacientesActualizados = pacientes.map (pacienteState => pacienteState.id ===
         paciente.id ? objetoPaciente : pacienteState);

         setPacientes(pacientesActualizados);
         setPaciente({})

      } else{
         // Agregando un paciente
         objetoPaciente.id = generarId();
         // ...hacer una copia de lo que habia en el state y le paso el nuevo objeto
         // crea un nuevo array INMUTABILIDAD DE OBJETOS
         setPacientes([...pacientes, objetoPaciente]);
      }

      // Reiniciar el form
      setNombre('');
      setEmail('');
      setTurno('');
      setOdontologo('');
      setSintomas('');
   }

return (
   <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center'>
         Añade pacientes y {''}
         <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>

      <form
         onSubmit={handleSubmit}
         className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' action=""
      >
         {error &&   <Error 
                     mensaje='*Todos los campos son obligatorios'
                     /> }
         <div className='mb-5'>
            <label htmlFor='nombre' className='text-gray-700 uppercase font-bold block'>
               Nombre Paciente
            </label>
            <input
               id='nombre'
               type="text"
               placeholder="Nombre paciente"
               className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
               value={nombre}
               onChange={(e) => setNombre(e.target.value)}
            />
         </div>
         <div className='mb-5'>
            <label htmlFor='email' className='text-gray-700 uppercase font-bold block'>
               Email
            </label>
            <input
               id='email'
               type="email"
               placeholder="Email contacto"
               className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </div>
         <div className='mb-5'>
            <label htmlFor='turno' className='text-gray-700 uppercase font-bold block'>
               Fecha del turno
            </label>
            <input
               id='turno'
               type="date"
               className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
               value={turno}
               onChange={(e) => setTurno(e.target.value)}
            />
         </div>
         <div className='mb-5'>
            <label htmlFor='odontologo' className='text-gray-700 uppercase font-bold block'>
               Nombre del Odontólogo
            </label>
            <input
               id='odontologo'
               type="text"
               placeholder="Nombre odontologo"
               className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
               value={odontologo}
               onChange={(e) => setOdontologo(e.target.value)}
            />
         </div>
         <div className='mb-5'>
            <label htmlFor='sintomas' className='text-gray-700 uppercase font-bold block'>
               Síntomas
            </label>
            <textarea
               id='sintomas'
               className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
               placeholder='Describe los síntomas'
               value={sintomas}
               onChange={(e) => setSintomas(e.target.value)}
            />
         </div>

         <input
            type="submit"
            className='bg-indigo-600 w-full p-3 text-white font-bold uppercase
                hover:bg-indigo-800 cursor-pointer transition-colors'
            value={paciente.id ? 'Guardar cambios' : 'Agregar paciente'}
         />
      </form>

   </div>
)
}

export default Formulario;