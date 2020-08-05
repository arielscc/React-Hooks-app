import React, { useState } from 'react'
import { MultipleCustomHook } from '../03-Examples/MultipleCustomHook'

export const RealExampleRef = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="w-4/5 m-auto mt-20 text-gray-800">
      <h1 className="text-3xl text-center font-bold">Real Example Ref</h1>
      <hr/>
      {
        show && <MultipleCustomHook/>
      }
      <button onClick={ () => setShow( !show ) }>ver</button>
    </div>
  )
}
