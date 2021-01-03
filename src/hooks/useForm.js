import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  console.log('useform');
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const resetValues = () => setValues(initialState);

  return [values, handleInputChange, resetValues];
};
