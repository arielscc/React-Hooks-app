import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

  const {state, increment, decrement, reset } = useCounter( 1 );

  return (
    <div className="w-4/5 mx-auto my-12">
      <h1 className="text-3xl">Counter with hook: {state}</h1>
      <hr/>
      <button className="border-2 hover:bg-teal-100  w-24 rounded hover:border-teal-600 focus:outline-none my-2"
        onClick={ () => increment(3) }
      >+1</button>

      <button className="border-2 hover:bg-teal-100  w-24 rounded hover:border-teal-600 focus:outline-none my-2"
        onClick={ reset }
      >reset</button>

      <button className="border-2 hover:bg-teal-100  w-24 rounded hover:border-teal-600 focus:outline-none my-2"
        onClick={ () => decrement(3) }
      >-1</button>
    </div>
  )
}
