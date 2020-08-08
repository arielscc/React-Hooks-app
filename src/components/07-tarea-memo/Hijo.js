import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
      <button
      className="rounded-lg bg-indigo-500 text-white font-semibold m-2 py-1 px-6"
        onClick={() => incrementar(numero)}
      >
        {numero}
      </button>
    );
})