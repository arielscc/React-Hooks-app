import React, { useEffect, useMemo, useState } from 'react';
import { List } from './List';

export const App = () => {
  const initialUsers = [
    { id: 1, name: 'Jose' },
    { id: 2, name: 'Maria' },
  ];
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('App render');
  });

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
    setText('');
  };

  const handleSearch = () => {
    setSearch(text);
  };

  // Funcion a ser memorizada, porque se llama cada vez que el componente se carga
  const filteredUsers = () =>
    users.filter((user) => {
      console.log('me volví a llamar :(');
      return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });

  const memoFileredUsers = useMemo(() => filteredUsers(), [search, users]);
  return (
    <div className="m-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-teal-600 rounded py-1 px-2"
      />

      <button
        onClick={handleSearch}
        className="ml-8 py-1 px-2 border rounded bg-green-400 shadow"
      >
        Search
      </button>

      <button
        onClick={handleAdd}
        className="ml-2 py-1 px-2 border rounded bg-indigo-400 shadow"
      >
        add user
      </button>
      <List users={memoFileredUsers} />
    </div>
  );
};
