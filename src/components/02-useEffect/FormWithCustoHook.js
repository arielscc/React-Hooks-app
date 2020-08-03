import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustoHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues

  useEffect(() => {
    console.log( ' email cambió ');
  }, [ email ])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( formValues )
  }

  return (
    <form className="w-9/12 m-auto my-10" onSubmit={ handleSubmit }>
      <h1 className="text-3xl">FormWithCustoHook</h1>
      <hr/>
      <div>
        <input
        type = "text"
        name = "name"
        className = "text-teal-800 py-4 border rounded-lg my-5 px-5 w-full"
        placeholder = "tu nombre"
        autoComplete ="off"
        value = { name }
        onChange = { handleInputChange }
        />

        <input
        type = "text"
        name = "email"
        className = "text-teal-800 py-4 border rounded-lg my-5 px-5 w-full"
        placeholder = "email@email.com"
        autoComplete ="off"
        value = { email }
        onChange = { handleInputChange }
        />

        <input
        type = "password"
        name = "password"
        className = "text-teal-800 py-4 border rounded-lg my-5 px-5 w-full"
        placeholder = "******"
        value = { password }
        onChange = { handleInputChange }
        />
      </div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> enviar </button>
    </form>
  )
}
