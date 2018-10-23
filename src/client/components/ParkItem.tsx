import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import LocationItem from './LocationItem';

export default ({ park }) => {
  return (
    <LocationItem
      description={park.description}
      key={park.id}
      icon={faFortAwesome}
      id={park.id}
      image={park.image}
      name={park.name}
      type="Theme Park"
    />
  );
};
