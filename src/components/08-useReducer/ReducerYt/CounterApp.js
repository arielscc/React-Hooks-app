import React, { useReducer } from 'react';

const types = {
  increment: 'increment',
  decrement: 'decrement',
  reset: 'reset',
};
console.log(types);

const countReducer = (state, action) => {
  switch (action.type) {
    case types.increment:
      return state + 1;

    case types.decrement:
      return state - 1;

    case types.reset:
      return 0;

    default:
      return state;
  }
};

export const CounterApp = () => {
  const [counter, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <h1>Contador {counter}</h1>
      <button
        onClick={() => dispatch({ type: types.increment })}
        className="border-4 border-light-blue-500 border-opacity-100 border-blue-600 rounded-md py-1 px-2 hover:bg-blue-600 mt-4 mr-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: types.decrement })}
        className="border-4 border-light-blue-500 border-opacity-100 border-blue-600 rounded-md py-1 px-2 hover:bg-blue-600 mt-4 mr-2"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: types.reset })}
        className="border-4 border-light-blue-500 border-opacity-100 border-blue-600 rounded-md py-1 px-2 hover:bg-blue-600 mt-4 mr-2"
      >
        Reset
      </button>
    </div>
  );
};
