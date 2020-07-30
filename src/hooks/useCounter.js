import { useState } from 'react'

export const useCounter = (initialState = 100) => {
  const [state, setstate] = useState(initialState);

  const increment = (value = 1) => {
    return setstate( state + value )
  }
  const decrement = (value = 1) => {
    return setstate( state - value )
  }

  const reset = () => {
    return setstate( initialState )
  }

  return {
    state,
    increment,
    decrement,
    reset
  }
}
