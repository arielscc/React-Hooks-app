import { shallow } from 'enzyme';
import React from 'react';
import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

const handleToggle = jest.fn();
const handleDelete = jest.fn();

describe('Pruebas en el componente TodoList', () => {
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener 2 <TodoItem/>', () => {
    expect(wrapper.find('TodoItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
  });
});
