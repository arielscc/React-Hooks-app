import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../../../components/08-useReducer/TodoItem';
import { demoTodos } from '../../fixtures/demoTodos';
import '@testing-library/jest-dom';

const handleDelete = jest.fn();
const handleToggle = jest.fn();

describe('Pruebas del componente TodoItem', () => {
  const wrapper = shallow(
    <TodoItem
      todo={demoTodos[1]}
      index={1}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('Debe hacer match con el snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamar la funcion handleDelete', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id);
  });

  test('Debe de llamar la funcion handleToggle', () => {
    wrapper.find('li').simulate('click');
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
  });

  test('Debe de Mostrar el texto del parrafo correctamente', () => {
    expect(wrapper.find('p').text().trim()).toBe(demoTodos[1].todo);
  });

  test('Debe de cambiar el estilo del todo cuando se le hace click', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoItem
        todo={todo}
        index={1}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    wrapper.find('li').simulate('click');

    const todoLi = wrapper.hasClass('line-through');
    expect(todoLi).toBe(true);
  });
});
