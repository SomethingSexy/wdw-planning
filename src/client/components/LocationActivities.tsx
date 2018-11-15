import React, { StatelessComponent } from 'react';
import { Card } from 'semantic-ui-react';
import LocationActivity from './LocationActivity';

interface IProps {
  activities: any[];
}

const LocationActivities: StatelessComponent<IProps> = (props: IProps) => {
  const { activities } = props;

  return (
    <Card.Group>
      {activities.map(activity => <LocationActivity key={activity.id} {...activity} />)}
    </Card.Group>
  );
};

export default LocationActivities;
