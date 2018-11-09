import React, { StatelessComponent } from 'react';
import { Item } from 'semantic-ui-react';

interface IProps {
  children: (item: any) => any;
  items: any[];
}

const Locations: StatelessComponent<IProps>  = ({ children, items = [] }) => {
  return (
    <Item.Group divided>
      {items.map((item: any) => <Item key={item.id}>{children(item)}</Item>)}
    </Item.Group>
  );
};

export default Locations;
