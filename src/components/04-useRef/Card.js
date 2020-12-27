import React from 'react';

export const Card = ({ id, title, body }) => {
  return (
    <div className="w-64 p-6 border shadow-xl bg-white rounded-lg self-center justify-self-center">
      <h1 className="font-bold text-lg uppercase text-center mb-2">{title}</h1>
      <hr />
      <p className="mt-2 font-thin">{body}</p>
    </div>
  );
};
