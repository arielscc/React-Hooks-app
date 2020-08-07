import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('me volví a generar');
  return (
    <button
    className="rounded-lg bg-teal-500 text-white font-semibold m2-2 py-1 px-6"
    onClick={ increment }>
      incrementar
    </button>
  )
})