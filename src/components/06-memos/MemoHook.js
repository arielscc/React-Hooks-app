import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [toggle, setToggle] = useState(true);

  const RecursoGrande = (iterations) => {
    for (let i = 0; i < iterations; i++) {
      console.log(`se ejecutaron: ${iterations} veces`);
    }
    return `se ejecutaron: ${iterations} veces`;
  };

  const memoRecursoGrande = useMemo(() => RecursoGrande(counter), [counter]);

  return (
    <div className="w-4/5 m-auto mt-20 text-gray-800">
      <h1 className="text-3xl text-center font-bold">
        Use Memo Hook : {counter}
      </h1>
      <hr />
      <p>{memoRecursoGrande}</p>
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
    </div>
  );
};
