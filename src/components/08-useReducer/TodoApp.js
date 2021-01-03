import React, { useCallback, useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // console.log(todos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = useCallback(
    (todoId) => {
      const action = {
        type: 'delete',
        payload: todoId,
      };

      dispatch(action);
    },
    [dispatch]
  );

  const handleToggle = useCallback((todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId,
    };
    dispatch(action);
  }, []);

  const handleAdd = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return (
    <div className="p-20">
      <p className="flex gap-2 items-center text-gray-700 mb-4">
        <svg
          className="w-6 h-6 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <span className="text-lg font-bold">todo app {todos.length}</span>
      </p>
      <hr className="w-1/2" />

      <TodoAdd handleAdd={handleAdd} />

      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
};
