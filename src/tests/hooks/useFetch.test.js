import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
  const URL = 'https://www.breakingbadapi.com/api/quotes/1';

  test('Debe de retornar la informacón por defecto', () => {
    const { result } = renderHook(() => useFetch(URL));

    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Debe de tener la infor deseada loading -> false, error -> null', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(URL));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('Debe de manejar el error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/apid/users?page=2')
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');
  });
});
