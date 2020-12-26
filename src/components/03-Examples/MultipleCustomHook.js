import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ThreeDots } from 'svg-loaders-react';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHook = (_) => {
  const { counter, increment } = useCounter();

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div className="w-4/5 m-auto text-gray-700">
      <h1 className="text-center text-4xl font-bold ">Braking Bad Quotes</h1>
      <hr />
      <div className="w-10/12 md:px-10 p-3  mx-auto mt-5 rounded-lg md:h-24 text-lg text-white italic flex items-center justify-center md:font-semibold bg-gradient-to-r from-teal-400 to-indigo-500 ">
        {loading ? (
          <ThreeDots fill="#5A67D8" className="h-4" />
        ) : (
          <p>{quote}</p>
        )}
      </div>
      <blockquote className="flex justify-end flex-col text-right w-11/12">
        <footer className="italic font-thin text-gray-600">{author}</footer>
      </blockquote>
      <button
        onClick={increment}
        className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 text-white px-4 py-2 rounded-md"
      >
        siguiente
      </button>
    </div>
  );
};
