import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    console.log( 'componente montado' );
    return () => {
      console.log( 'componente desmontado' );
    }
  }, [])

  return (
    <>
      <h3> Hola, esto es un saludo</h3>
    </>
  )
}
