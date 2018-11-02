import React from 'react';
import { Item } from 'semantic-ui-react';

export default ({ children, items = [] }) => {
  return (
    <Item.Group divided>
      {items.map((item: any) => <Item key={item.id}>{children(item)}</Item>)}
    </Item.Group>
  );
};
