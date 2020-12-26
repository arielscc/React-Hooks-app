import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  const mouseMove = (e) => {
    const coods = { x: e.x, y: e.y };
    setCoords(coods);
  };

  useEffect(() => {
    console.log('componente montado');
    window.addEventListener('mousemove', mouseMove);

    return () => {
      console.log('componente desmontado');
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <h3> Hola, esto es un saludo</h3>
      <p>Coordenada x: {x}</p>
      <p>Coordenada y: {y}</p>
    </>
  );
};
