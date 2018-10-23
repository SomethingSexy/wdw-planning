import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { StatelessComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Item } from 'semantic-ui-react';

interface IProps {
  description: string;
  icon: IconProp;
  id: number;
  image: string;
  name: string;
  type: string;
}

const LocationItem: StatelessComponent<IProps> = ({ description, icon, id, image, name, type }) => {
  return (
    <>
      <Item.Image size="small" src={image} />
      <Item.Content>
        <Item.Header><Link to="/park">{name}</Link></Item.Header>
        <Item.Meta>
          <span><FontAwesomeIcon icon={icon} /></span>
          <span>{type}</span>
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
      </Item.Content>
    </>
  );
};

export default LocationItem;
