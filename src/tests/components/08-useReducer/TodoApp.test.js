import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en componente todoApp', () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn();

  test('Debe de mostrarse correctmanete', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de agregar un todo', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[1]);
    });

    expect(wrapper.find('span').text().trim()).toBe('todo app 2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    // expect(localStorage.setItem).toHaveBeenCalledWith({});
  });

  test('debe de elimiarse un todo', () => {
    wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    expect(wrapper.find('span').text().trim()).toBe('todo app 0');
  });
});
