import React, { useContext, useEffect } from 'react';
import { UserAppContext } from './contexts/UserAppContext';

export const Movie = ({ movie }) => {
  const { user, setUser } = useContext(UserAppContext);
  const { favoriteMovies, name } = user;

  //Registra al local storage
  useEffect(() => {
    localStorage.setItem(`favoritos-${name}`, favoriteMovies.join(','));
  }, [favoriteMovies, name]);

  // pinta el boton si la movie esta en favoritos
  const favorites = (movieId) => {
    return favoriteMovies.includes(movieId) ? 'currentColor' : 'none';
  };

  // Adicionar y retirar favorito
  const handleFavorite = (movieId) => {
    favoriteMovies.includes(movieId)
      ? setUser({
          ...user,
          favoriteMovies: favoriteMovies.filter((id) => id !== movieId),
        })
      : setUser({ ...user, favoriteMovies: [...favoriteMovies, movieId] });
  };
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt={movie.title}
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={movie.imageUrl}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {movie.title}
          </h2>
          <h3 className="text-gray-500 mb-3">UI Developer</h3>
          <div className="flex gap-4 items-start">
            <p className="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
            <button
              onClick={() => handleFavorite(movie.id)}
              className="mr-2 mt-2"
            >
              <svg
                className="w-6 h-6 text-yellow-600 hover:text-yellow-700"
                fill={favorites(movie.id)}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
