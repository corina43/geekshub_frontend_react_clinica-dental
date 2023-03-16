import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navigator = ({ruta, destino}) => {
    const navigate = useNavigate ();
  return (
    
    <div className='navigatorDesign' onClick={() => navigate(destino)}>
        {ruta}
    </div>
  )
}
