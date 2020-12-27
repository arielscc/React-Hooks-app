import React, { useEffect, useRef, useState } from 'react';

export const ScrollAnimation = () => {
  const [background, setBackground] = useState('tomato');
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      y > 10 ? setBackground('tomato') : setBackground('teal');
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{ height: '180vh', background }}>
      <div className="h-24"></div>
      <div ref={divRef}>
        <p>Hola</p>
      </div>
    </div>
  );
};
