import React, { useState } from 'react';

import { useCounter } from '../../hooks/useCounter';

import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [toggle, setToggle] = useState(true);

  return (
    <div className="w-4/5 m-auto mt-20 text-gray-800">
      <h1 className="text-3xl text-center font-bold">useMemo</h1>
      <p className="text-lg text-center">
        Memo es una funcion que permite grabar un componente y evita que se
        vuelva a renderizar cuando el componente padre sufre cambios. <br /> En
        este ejemplo el componente que renderiza el contador esta implementado
        usando memo y por eso no se vuelve a llamar cuando el boton show/hide es
        activado.
      </p>

      <hr />
      <button
        className="rounded-lg bg-indigo-500 text-white font-semibold m-2 py-1 px-6"
        onClick={increment}
      >
        +1
      </button>

      <button
        className="rounded-lg bg-teal-500 text-white font-semibold m2-2 py-1 px-6"
        onClick={() => setToggle(!toggle)}
      >
        {' '}
        show/hide {JSON.stringify(toggle)}
      </button>
      <p className="text-xl">
        Counter : <Small value={counter} />{' '}
      </p>
    </div>
  );
};
