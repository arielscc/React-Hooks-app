import '@testing-library/jest-dom';

import { renderHook, act } from '@testing-library/react-hooks';
// import { act } from 'react-dom/test-utils';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en el hook Counter', () => {
  test('Debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter } = result.current;
    expect(counter).toBe(10);
  });

  test('Debe de incrementar el counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;

    expect(counter).toBe(101);
  });

  test('Debe de decrementar el counter', () => {
    const { result } = renderHook(() => useCounter(200));
    const { decrement } = result.current;

    act(() => decrement());

    const { counter } = result.current;
    expect(counter).toBe(199);
  });

  test('Debe de resetear el counter', () => {
    const { result } = renderHook(() => useCounter(12));

    const { increment, reset } = result.current;

    act(() => {
      increment();
    });

    act(() => {
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(12);
  });
});
