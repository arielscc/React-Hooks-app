import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const newProps = {
    id: 10,
    user: 'Ariel',
  };

  return (
    <div>
      <h1>LoginScreen</h1>

      <button onClick={() => setUser(newProps)}>cambio</button>
    </div>
  );
};
