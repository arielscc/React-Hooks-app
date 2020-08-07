import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

  const [counter, setCounter] = useState( 10 )

  // const increment = () => {
  //   setCounter( counter +1 )
  // }

const increment =  useCallback(
    () => {
      setCounter( c => c + 1 )
    },
    [ setCounter ],
  )

  return (
<div className="w-4/5 m-auto mt-20 text-gray-800">
      <h1 className="text-3xl text-center font-bold">Use Callback : { counter }</h1>
      <hr/>

      <ShowIncrement increment={ increment }/>
    </div>
  )
}
