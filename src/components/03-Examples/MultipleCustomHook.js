import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ThreeDots } from 'svg-loaders-react'

export const MultipleCustomHook = () => {

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

  const { author, quote } = !!data && data[0];

  console.log(data);
  return (
    <div className="w-4/5 m-auto text-gray-700">
      <h1 className="text-center text-4xl font-bold ">Braking Bad Coutes</h1>
      <hr/>
      <div className="w-10/12 px-10 bg-indigo-200 mx-auto mt-5 rounded-lg h-20 text-lg italic flex items-center justify-center font-semibold">
        {
          loading?
            <ThreeDots fill="#5A67D8" className="h-4"/>
            :
            <p>{ quote }</p>
        }
      </div>
      <blockquote className="flex justify-end flex-col text-right w-11/12">
      <footer className="italic font-thin text-gray-600">- {author}</footer>
      </blockquote>

    </div>
  )
}
