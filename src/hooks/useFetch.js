import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  };

  const isMounted = useRef(true);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState(initialState);
    fetchData();
  }, [url]);

  const fetchData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setState({
              data,
              loading: false,
              error: null,
            });
          }
        }, 500);
      });
  };

  return state;
};
