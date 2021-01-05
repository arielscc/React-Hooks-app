import React from 'react';
import { UserProvider } from './contexts/UserAppContext';
import { MovieList } from './MovieList';
import { NavBar } from './NavBar';

export const MoviesApp = () => {
  return (
    <div>
      <UserProvider>
        <NavBar />
        <MovieList />
      </UserProvider>
    </div>
  );
};
