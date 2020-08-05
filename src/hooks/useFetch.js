import { useState, useEffect, useRef } from 'react'

export const useFetch = ( url ) => {

  const initialState = {
    data: null,
    loading: true,
    error: null
  }
  //
  const isMounted = useRef( true );
  useEffect(() => {

    return () => {
      isMounted.current = false
    }

  }, []);

  const [state, setState] = useState( initialState );

  useEffect(() => {
    setState( initialState )
    fetch( url )
    .then( resp => resp.json())
    .then( data => {
      if (isMounted.current) {
        setState({
          loading: false,
          error: null,
          data
        })
      }
    })
  }, [ url ]);


  return state
}
