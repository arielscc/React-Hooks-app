import React from 'react';

import { shallow } from 'enzyme';
import HookApp from '../HookApp';

import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';

describe('Probando el primer componente', () => {
  test('Debe hacer match con el snapshot', () => {
    const wrapper = shallow(<HookApp />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
