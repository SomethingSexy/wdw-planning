import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Card } from 'semantic-ui-react';
import ParkActivity from './ParkActivity';
import withFetch from './withFetch';

interface IProps {
  parkId: string;
}

// TODO: We probably need to load withFetch to make sure we have all of the parks first
const ParkActivities: StatelessComponent<IProps> = withFetch(
  observer(({ parkId, parks }) => {
    const park = parks.findById(parkId);
    if (!park.activities) {
      return null;
    }

    return (
      <Card.Group>
        {park.activities.map(activity => <ParkActivity key={activity.id} {...activity} />)}
      </Card.Group>
    );
  }),
  'parks',
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
    method: 'fetchParkActivities',
    params: ['parkId']
  }
);

export default ParkActivities;
