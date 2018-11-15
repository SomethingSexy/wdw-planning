import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, StatelessComponent } from 'react';
import { Card } from 'semantic-ui-react';

interface IProps {
  description: string;
  icon: IconProp;
  id: number;
  image: string;
  meta?: ReactNode;
  name: string;
  tags?: string[];
  type: string;
}

const LocationActivity: StatelessComponent<IProps> = (
  { description, icon, id, image, meta, name, tags = [], type }
) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default LocationActivity;
