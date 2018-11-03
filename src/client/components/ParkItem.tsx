import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { StatelessComponent } from 'react';
import { Label } from 'semantic-ui-react';
import LocationItem from './LocationItem';

interface IProps {
  park: any; // TODO: common type
}

const ParkItem: StatelessComponent<IProps> = ({ park }) => {
  const meta = (
    <>
      <Label className="right" color="yellow">
        {park.activitiesCount}<Label.Detail><FontAwesomeIcon icon={faStar} /></Label.Detail>
      </Label>
      <Label className="right" color="blue">
      {park.diningCount}<Label.Detail><FontAwesomeIcon icon={faUtensils} /></Label.Detail>
      </Label>
    </>
  );

  return (
    <LocationItem
      description={park.description}
      key={park.id}
      icon={faFortAwesome}
      id={park.id}
      image={`public/${park.image}.jpg`}
      meta={meta}
      name={park.name}
      tags={park.areas}
      type="Theme Park"
    />
  );
};

export default ParkItem;
