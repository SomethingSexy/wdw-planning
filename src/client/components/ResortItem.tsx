import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { StatelessComponent } from 'react';
import { Label } from 'semantic-ui-react';
import { IResort } from '../stores/Resort';
import { ILocationStore } from '../stores/types';
import LocationItem from './LocationItem';

interface IProps {
  resort: ILocationStore<IResort>;
}

const ResortItem: StatelessComponent<IProps> = ({ resort }) => {
  const item = resort.toJson;
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
      detailPath={`/resorts/${item.id}`}
      key={item.id}
      icon={faFortAwesome}
      id={item.id}
      meta={meta}
      name={item.name}
      tags={item.areas}
      type={`Resort - ${item.tier}`}
    />
  );
};

export default ResortItem;
