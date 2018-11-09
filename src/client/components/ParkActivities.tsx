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
    // isLoading: ({ parkId, parks }) => {
    //   // TODO: figure out how we want to handle loading state
    //   if (!parks.loaded) {
    //     return false;
    //   }

    //   const park = parks.findById(parkId);

    //   if (!park.activities) {
    //     return false;
    //   }

    //   return true;
    // },
    find: 'findById',
    id: 'parkId',
    method: 'fetchParkActivities',
    model: 'parks',
    propName: 'park'
    // params: ['parkId']
  }
);

export default ParkActivities;
