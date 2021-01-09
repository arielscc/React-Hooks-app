import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = React.memo(({ todo, index, handleToggle, handleDelete }) => {
  return (
    <li
      key={todo.id}
      onClick={() => handleToggle(todo.id)}
      className={`flex justify-between items-center mt-2 w-1/2 p-3 rounded-md cursor-pointer box-content  ${
        index % 2 === 0 && 'bg-gray-200'
      } ${
        todo.done &&
        'line-through bg-gradient-to-r from-indigo-500 to-indigo-300'
      }`}
    >
      <p>{todo.todo}</p>
      <button
        onClick={() => handleDelete(todo.id)}
        className="py-1 px-2 rounded-md bg-red-600 font-bold text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </li>
  );
});

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
