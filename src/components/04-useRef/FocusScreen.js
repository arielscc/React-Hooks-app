import React, { useRef, useState } from 'react';

export const FocusScreen = () => {
  const initialState = {
    value: '',
    copy: false,
  };
  const [state, setState] = useState(initialState);
  const inputRef = useRef();

  const { value, copy } = state;

  const handleClick = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand('copy');
    setState({
      ...state,
      copy: true,
    });
    setTimeout(() => {
      setState({
        ...state,
        copy: false,
      });
    }, 500);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };
  return (
    <div className="w-4/5 m-auto mt-20 text-gray-800">
      <h1 className="text-3xl text-center font-bold">Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        className=" w-full my-2 rounded-lg border py-2 px-5 shadow-sm"
        placeholder="Nombre"
      />
      <button
        className="rounded-lg bg-indigo-500 text-white font-semibold  py-1 px-6"
        onClick={handleClick}
      >
        Focus
      </button>
      {copy && <p>Copied!</p>}
    </div>
  );
};
