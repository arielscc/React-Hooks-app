import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ThreeDots } from 'svg-loaders-react'
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {
  const { counter , increment } = useCounter()

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const pTag = useRef()
  const [box, setBox] = useState({})
  const { author, quote } = !!data && data[0];

  
  useLayoutEffect(() => {
    setBox(pTag.current.getBoundingClientRect())
    console.log(pTag.current.getBoundingClientRect());
  }, [])


  return (
    <div className="w-4/5 m-auto text-gray-700">
      <h1 className="text-center text-4xl font-bold ">Layout Effect</h1>
      <hr/>
      <div className="w-10/12 md:px-10 p-3 bg-indigo-200 mx-auto mt-5 rounded-lg md:h-24 text-lg italic flex items-center justify-center md:font-semibold">

        <p ref={ pTag }>{ quote }</p>

      </div>
      <blockquote className="flex justify-end flex-col text-right w-11/12">
      <footer className="italic font-thin text-gray-600">- {author}</footer>
      </blockquote>
      <button onClick={ increment }> siguiente </button>

      <pre>
        { JSON.stringify( box, null, 3) }
      </pre>
    </div>
  )
}
