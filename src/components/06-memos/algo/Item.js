import React, { useEffect } from 'react';

export const Item = React.memo(({ user }) => {
  useEffect(() => {
    // console.log('Item Render');
  });
  return <li>{user.name}</li>;
});
