import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
   const { nombre, email, odontologo, sintomas, turno, id } = paciente;

   const handleEliminar = () => {
      const respuesta = confirm('Deseas eliminar este paciente?');
      if (respuesta) {
         eliminarPaciente(id);
      }
   }

   return (
      <div className='bg-white shadow-md mx-5 my-10 px-5 py-10 rounded-xl'>
         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {''}

            <span className='font-normal normal-case'>{nombre}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {''}

            <span className='font-normal normal-case'>{email}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha turno: {''}

            <span className='font-normal normal-case'>{turno}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Odontólogo: {''}

            <span className='font-normal normal-case'>{odontologo}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>
            Síntomas: {''}

            <span className='font-normal normal-case'>{sintomas}</span>
         </p>

         <div className='flex justify-between mt-10'>
            <button
               type='button'
               className='py-2 px-10 bg-indigo-600 text-white rounded-lg uppercase font-bold'
               onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button
               type='button'
               className='py-2 px-10 bg-red-600 text-white rounded-lg uppercase font-bold'
               onClick={handleEliminar}
            >Eliminar</button>
         </div>

      </div>
   )
}

export default Paciente