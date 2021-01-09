import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHook } from '../../../components/03-Examples/MultipleCustomHook';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHook/>', () => {
  useCounter.mockReturnValue({
    counter: 1,
    increment: () => {},
  });

  test('Debe de mostrarse correctamente, Snapshot', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHook />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de retornar un quote', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Ariel',
          quote: 'Hola a todos',
        },
      ],
      loading: false,
    });

    const wrapper = shallow(<MultipleCustomHook />);
    expect(wrapper.find('ThreeDots').exists()).toBe(false);
    expect(wrapper.find('p').text().trim()).toBe('Hola a todos');
    expect(wrapper.find('footer').text().trim()).toBe('Ariel');
  });

  test('Debe de mostrar el counter en 1', () => {});
});
