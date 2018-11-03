import { observer } from 'mobx-react';
import React from 'react';
import Locations from './Locations';
import Park from './ParkItem';
import withFetch from './withFetch';

const Parks = withFetch(
  observer(({ parks }) => {
    return (
      <Locations items={parks.all}>{park => <Park park={park} />}</Locations>
    );
  }),
  'parks'
);

export default Parks;
