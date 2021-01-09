import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el todoReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('Debe de agregar un TODO', () => {
    const newTodo = { id: 3, todo: 'Aprender testing', done: false };
    const state = todoReducer(demoTodos, { type: 'add', payload: newTodo });

    expect(state.length).toBe(demoTodos.length + 1);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('Debe eliminar un TODO', () => {
    const todoId = 1;
    const state = todoReducer(demoTodos, { type: 'delete', payload: todoId });

    expect(state.length).toBe(1);
  });

  test('Debe cambiar el done de: false <-> true ', () => {
    const todoId = 1;
    const state = todoReducer(demoTodos, { type: 'toggle', payload: todoId });

    const newState = state.find((item) => item.done === true);
    expect(typeof newState).toBe('object');

    expect(state[0].done).toBe(true);
  });
});
