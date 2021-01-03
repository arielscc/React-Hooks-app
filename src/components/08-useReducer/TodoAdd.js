import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, resetValues] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 2) return;

    const newTodo = {
      id: new Date().getTime(),
      todo: description,
      done: false,
    };

    handleAdd(newTodo);
    resetValues();
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        name="description"
        className="py-2 px-4 w-1/2 border rounded-md focus:outline-none block"
        autoComplete="off"
        value={description}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="mt-2 py-1 px-3 rounded-md bg-teal-600 font-bold text-white focus:outline-none"
      >
        Add todo
      </button>
    </form>
  );
};
