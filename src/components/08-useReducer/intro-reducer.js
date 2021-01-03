const initialState = [
  {
    id: 1,
    todo: 'Lavar la ropa',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'guardar') {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

console.log(todos);

const newTodo = {
  id: 2,
  todo: 'Comprar pan',
  done: false,
};

const todoAction = {
  type: 'guardar',
  payload: newTodo,
};

todos = todoReducer(todos, todoAction);

console.log(todos);
