import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en componente LoginScreen', () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamarse el setUser con el argumento de newProps ', () => {
    wrapper.find('button').simulate('click');

    expect(setUser).toHaveBeenCalledWith({
      id: 10,
      user: 'Ariel',
    });
  });
});
