import React, { useEffect, useRef, useState } from 'react';

export const RenderApp = () => {
  const [text, setText] = useState('');
  const renderRef = useRef(1); //

  useEffect(() => {
    renderRef.current += 1;
    return () => {
      // cleanup
    };
  });
  return (
    <div className="p-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-teal-700"
      />
      <h1>renders: {renderRef.current}</h1>
    </div>
  );
};
