import React, { createContext, useState } from 'react';

const UserAppContext = createContext();

const initialUser = {
  id: 1,
  name: 'Luis',
  favoriteMovies: [1, 3],
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  // console.log(localStorage.getItem('favoritos-Luis').split(','));

  const login = () =>
    setUser({
      id: 1,
      name: 'Luis',
      favoriteMovies: localStorage.getItem('favoritos-Luis').split(',') || [],
    });

  const logout = () =>
    setUser({
      id: 0,
      name: '',
      favoriteMovies: [],
    });

  const data = {
    user,
    login,
    logout,
    setUser,
  };

  return (
    <UserAppContext.Provider value={data}>{children}</UserAppContext.Provider>
  );
};

export { UserAppContext, UserProvider };
