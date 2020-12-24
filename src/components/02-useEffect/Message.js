import React, { useEffect } from 'react';

export const Message = () => {
  const mouseMove = (e) => {
    const coods = { x: e.x, y: e.y };
    console.log(coods);
  };
  window.addEventListener('mousemove', mouseMove);

  useEffect(() => {
    // console.log( 'componente montado' );

    return () => {
      // console.log( 'componente desmontado' );
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <h3> Hola, esto es un saludo</h3>
    </>
  );
};
