import React, { useState, useEffect } from 'react'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState

  useEffect( () => {
    console.log('hey..!!!');
  }, []);

  const handleInputChange = ({ target }) => {
    console.log(target.name);
    setFormState( {
      ...formState,
      [target.name]: target.value
    } )
  }
  return (
    <div className="w-9/12 m-auto my-10">
      <h1 className="text-3xl">Use Effect</h1>
      <hr/>
      <div>
        <input
        type = "text"
        name = "name"
        className = "w-64 text-teal-800 py-4 border rounded-lg m-5"
        placeholder = "tu nombre"
        autoComplete ="off"
        value = { name }
        onChange = { handleInputChange }
        />

        <input
        type = "text"
        name = "email"
        className = "w-64 text-teal-800 py-4 border rounded-lg m-5"
        placeholder = "email@email.com"
        autoComplete ="off"
        value = { email }
        onChange = { handleInputChange }
        />
      </div>
    </div>
  )
}
