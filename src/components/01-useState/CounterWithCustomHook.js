import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div className="w-4/5 mx-auto my-12">
      <h1 className="text-3xl">Counter with hook: {counter}</h1>
      <hr />
      <button
        className="border-2 hover:bg-teal-100  w-24 rounded hover:border-teal-600 focus:outline-none my-2"
        onClick={increment}
      >
        +1
      </button>

      <button
        className="border-2 hover:bg-teal-100  w-24 rounded hover:border-teal-600 focus:outline-none my-2"
        onClick={reset}
      >
        reset
      </button>

      <button
        className="border-2 hover:bg-teal-100  w-24 rounded hover:border-teal-600 focus:outline-none my-2"
        onClick={decrement}
      >
        -1
      </button>
    </div>
  );
};
