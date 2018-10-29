import { observer } from 'mobx-react';
import React from 'react';
import Locations from './Locations';
import Park from './ParkItem';
import withFetch from './withFetch';

// const parks = [{
//   description: 'Explore Lands of Endless Enchantment, Where Your Fantasy Becomes a Reality',
//   id: 1,
//   image: '/public/magic-kingdom.jpg',
//   name: 'Magic Kingdom',
// }, {
//   description: 'Behold the Magic of Nature with Rare Animals and World-Class Entertainment',
//   id: 2,
//   image: '/public/animal-kingdom.jpg',
//   name: 'Animal Kingdom',
// }];

export default withFetch(
  observer(({ parks }) => {
    return (
      <Locations items={parks.all}>{park => <Park park={park} />}</Locations>
    );
  }),
  'parks'
);
