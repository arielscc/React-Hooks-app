import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (e, value = 1) => {
    return setCounter(counter + value);
  };
  const decrement = (e, value = 1) => {
    return setCounter(counter - value);
  };

  const reset = () => {
    return setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
