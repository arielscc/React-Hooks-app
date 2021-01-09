import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { useForm } from '../../../hooks/useForm';

const handleAdd = jest.fn();

describe('Pruebas en el componente <TodoAdd/>', () => {
  const wrapper = shallow(<TodoAdd handleAdd={handleAdd} />);

  test('Debe de mostrarse correctamente el componente <TodoAdd/>', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe de llamar el habdleAddTodo cuando el value del input no existe', () => {
    // forma 1 de simular el envio de formulario
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });

    expect(handleAdd).toHaveBeenCalledTimes(0);
    // console.log(formSubmit);
  });

  test('Debe de llamar la funcion handleAdd', () => {
    const value = 'Aprender Testing';
    wrapper.find('input').simulate('change', {
      target: {
        name: 'description',
        value,
      },
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });

    // forma 2 de simular el envio de formulario
    // wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      todo: value,
      done: false,
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
