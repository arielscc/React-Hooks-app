import React, { useEffect } from 'react';
import { Item } from './Item';

export const List = React.memo(({ users }) => {
  useEffect(() => {
    // console.log('List Render');
  });

  return (
    <ul>
      {users.map((user) => {
        return <Item key={user.id} user={user} />;
      })}
    </ul>
  );
});
