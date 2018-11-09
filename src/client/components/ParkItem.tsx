import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { StatelessComponent } from 'react';
import { Label } from 'semantic-ui-react';
import { IParkStore } from '../stores/Park';
import LocationItem from './LocationItem';

interface IProps {
  park: IParkStore;
}

const ParkItem: StatelessComponent<IProps> = ({ park }) => {
  const item = park.toJson;
  const meta = (
    <>
      <Label className="right" color="yellow">
        {item.activitiesCount}<Label.Detail><FontAwesomeIcon icon={faStar} /></Label.Detail>
      </Label>
      <Label className="right" color="blue">
      {item.diningCount}<Label.Detail><FontAwesomeIcon icon={faUtensils} /></Label.Detail>
      </Label>
    </>
  );

  return (
    <LocationItem
      description={item.description}
      key={item.id}
      icon={faFortAwesome}
      id={item.id}
      image={`public/${item.image}.jpg`}
      meta={meta}
      name={item.name}
      tags={item.areas}
      type="Theme Park"
    />
  );
};

export default ParkItem;
