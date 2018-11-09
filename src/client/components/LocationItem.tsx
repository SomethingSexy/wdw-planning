import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, StatelessComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Item, Label } from 'semantic-ui-react';

interface IProps {
  description: string;
  icon: IconProp;
  id: string;
  image: string;
  meta?: ReactNode;
  name: string;
  tags?: string[];
  type: string;
}

const LocationItem: StatelessComponent<IProps> = (
  { description, icon, id, image, meta, name, tags = [], type }
) => {
  return (
    <>
      <Item.Image size="small" src={image} />
      <Item.Content>
        <Item.Header><Link to={`/parks/${id}`}>{name}</Link></Item.Header>
        <Item.Meta>
          <span><FontAwesomeIcon icon={icon} /></span>
          <span>{type}</span>
          {meta}
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
        {<Item.Extra>{tags.map((tag, index) => <Label key={index}>{tag}</Label>)}</Item.Extra>}
      </Item.Content>
    </>
  );
};

export default LocationItem;
