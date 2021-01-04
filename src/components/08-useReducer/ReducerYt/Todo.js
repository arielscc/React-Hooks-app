import React, { useRef, useState } from 'react';
import { useReducer } from 'react';

const types = {
  add: 'add',
  delete: 'delete',
  update: 'update',
};

const initialState = [
  {
    id: 1,
    todo: 'Trabajar',
  },
  {
    id: 2,
    todo: 'Estudiar',
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];

    case types.delete:
      return state.filter((todo) => todo.id !== action.payload);

    case types.update:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

    default:
      return state;
  }
};

export const Todo = () => {
  const initialText = { id: '', todo: '' };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState(initialText);

  const handleDelete = (id) => {
    // console.log(id);

    const action = {
      type: 'delete',
      payload: id,
    };
    dispatch(action);
  };

  const inputRef = useRef();

  const handleUpdate = (todoId) => {
    const todoToUpdate = state.find((todo) => todo.id === todoId);
    inputRef.current.select();

    setText(todoToUpdate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.id === '') {
      const newTodo = {
        id: Date.now(),
        todo: text.todo,
      };
      const action = {
        type: 'add',
        payload: newTodo,
      };
      dispatch(action);
    } else {
      const toUpdateTodo = {
        id: text.id,
        todo: text.todo,
      };
      const action = {
        type: 'update',
        payload: toUpdateTodo,
      };
      dispatch(action);
    }
    setText(initialText);
  };

  return (
    <div>
      <ul>
        {state.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => handleDelete(todo.id)} className="mx-2">
                delete
              </button>
              <button onClick={() => handleUpdate(todo.id)}>update</button>
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={text.todo}
          onChange={(e) => setText({ ...text, todo: e.target.value })}
          type="text"
          className="border-2 rouded"
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};
