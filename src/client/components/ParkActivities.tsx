import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Card } from 'semantic-ui-react';
import { IParkStore } from '../stores/Park';
import ParkActivity from './ParkActivity';
import withFetch from './withFetch';

interface IProps {
  park?: IParkStore;
  parkId: string;
}

// TODO: We probably need to load withFetch to make sure we have all of the parks first
const ParkActivities: StatelessComponent<IProps> = withFetch(
  observer((props: IProps) => {
    const { park } = props;
    if (!park) {
      return null;
    }

    const data = park.toJson;

    if (!data.activities) {
      return null;
    }

    return (
      <Card.Group>
        {data.activities.map(activity => <ParkActivity key={activity.id} {...activity} />)}
      </Card.Group>
    );
  }),
  {
    find: 'findById',
    id: 'parkId',
    method: 'fetchctivities',
    model: 'parks',
    propName: 'park'
  }
);

export default ParkActivities;
