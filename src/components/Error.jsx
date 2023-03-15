import React, { useEffect, useState } from 'react'

const Error = ({mensaje}) => {

   return (
      <div className='bg-red-700 text-white p-3 font-bold mb-3 rounded text-center uppercase'>
         <p>{mensaje}</p>
      </div>
      
   )
}

export default Error