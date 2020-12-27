import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { getPost } from '../../helpers/getPost';
import { Card } from './Card';
import { TailSpin } from 'svg-loaders-react';

export const LoadingApp = () => {
  const [mostrar, setMostrar] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const isMountedRef = useRef(true);

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    };
  });

  const updatePost = () => {
    getPost().then((data) => {
      if (isMountedRef.current) {
        setPosts(data);
        setLoading(false);
      }
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="w-full text-center my-4 text-2xl font-bold text-gray-700">
          CARDS
        </h1>
        <button
          onClick={() => setMostrar(!mostrar)}
          className="w-32 py-2 px-4 rounded bg-gray-700 text-white font-bold focus:outline-none self-center"
        >
          {mostrar ? 'ocultar' : 'mostrar'}
        </button>
      </div>
      {mostrar && (
        <div
          className="my-24 px-16 grid
        xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center"
        >
          {loading ? (
            <TailSpin stroke="teal" />
          ) : (
            posts.map((post) => {
              return <Card key={post.id} {...post} />;
            })
          )}
        </div>
      )}
    </>
  );
};
