import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en el useForm', () => {
  const initialForm = {
    nombre: 'ariel',
    apellido: 'chura',
    edad: 28,
  };
  test('debe de retornar las funciones y valores', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Debe de cambiar el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'nombre',
          value: 'Juanito',
        },
      });
    });
    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, nombre: 'Juanito' });
  });

  test('Debe de resetear el valor al initialForm ', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, resetValues] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'nombre',
          value: 'Pepito',
        },
      });
      resetValues();
    });

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
