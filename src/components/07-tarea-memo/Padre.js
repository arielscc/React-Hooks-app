import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
      ( num ) => {
        setValor( lastValue => lastValue + num )
      },
      [setValor],
    )

    return (
      <div className="w-4/5 m-auto mt-20 text-gray-800">
        <h1 className="text-3xl font-bold">Padre</h1>
        <p> Total: {valor} </p>

        <hr />

        {numeros.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
        {/* <Hijo /> */}
      </div>
    );
}
