import React, { useState } from 'react'

export const CounterApp = () => {

  const [state, setstate] = useState({
    valor1: 10,
    valor2: 20,
    valor3: 30,
  })

  const { valor1, valor2 } = state;

  return (
    <div className="w-4/5 mx-auto">
      <h1>valor 1 { valor1 }</h1>
      <h1>valor 1 { valor2 }</h1>
      <hr/>

      <button className="border-2 hover:bg-teal-100  w-24 rounded hover:border-teal-600 focus:outline-none"
        onClick={ () => {
          setstate(lastState => ({
            ...lastState,
            valor1 : valor1+1
          }))
        }}
      >+1</button>
    </div>
  )
}
