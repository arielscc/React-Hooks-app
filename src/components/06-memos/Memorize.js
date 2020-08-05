import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';
export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [toggle, setToggle] = useState(true)
  return (
    <div className="w-4/5 m-auto mt-20 text-gray-800">
      <h1
        className="text-3xl text-center font-bold"
      >Counter : <Small value= { counter }/> </h1>
      <hr/>
      <button
        className="rounded-lg bg-indigo-500 text-white font-semibold m-2 py-1 px-6"
        onClick={ increment }
      >Focus</button>

      <button
        className="rounded-lg bg-teal-500 text-white font-semibold m2-2 py-1 px-6"
        onClick={ () => setToggle( !toggle ) }
      > show/hide { JSON.stringify( toggle ) }
      </button>
    </div>
  )
}
