import React, { useState } from 'react'

export const SimpleTable = () => {
  const initialList = [
    { nombre: 'ariel', edad: 23, nota: 79 },
    { nombre: 'juan', edad: 23, nota: 79 },
    { nombre: 'pedro', edad: 23, nota: 79, faltas: 3 },
    { nombre: 'uriel', edad: 23, nota: 79 },
    { nombre: 'ricardo', edad: 23, nota: 79, obs: 'asd' },
    { nombre: 'eden', edad: 23, nota: 79 },
    { nombre: 'luce', edad: 23, nota: 79 }
  ]

  let headers = new Set()

  initialList.map( el => {
    let item = Object.keys( el )
    item.map( x =>  {
      headers.add( x )
    })
  })
  const titles = Array.from( headers )

  const data =  initialList.map( el => {
    return Object.values( el )
  })

  console.log(data );
  return (
    <div className="w-9/12 m-auto my-10">
      <h1 className="text-3xl">Use Effect</h1>
      <hr/>
      <table className="w-full my-5">
        <thead className="border-b-2">
          <tr>
            {
              titles.map( title => (<th
                className="py-2 bg-gray-100 divide-x divide-gray-400"
                key={ title }>{title}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map( item  => (
              <tr key={ item } className="border bg-teal-200">
                {
                  item.map( x => (<td
                    className="py-2 divide-x text-center"
                    key={ x }>{x}</td>
                    )
                  )
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
