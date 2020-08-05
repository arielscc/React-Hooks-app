import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select()
  }
  return (
    <div className="w-4/5 m-auto mt-20 text-gray-800">
      <h1 className="text-3xl text-center font-bold">Focus Screen</h1>
      <hr/>
      <input
        ref={ inputRef }
        className=" w-full my-2 rounded-lg border py-2 px-5 shadow-sm"
        placeholder="Nombre"
      />
      <button
        className="rounded-lg bg-indigo-500 text-white font-semibold  py-1 px-6"
        onClick={ handleClick }
      >Focus</button>
    </div>
  )
}
