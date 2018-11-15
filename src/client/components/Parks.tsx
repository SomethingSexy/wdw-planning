import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { IParksStore } from '../stores/Parks';
import Locations from './Locations';
import Park from './ParkItem';
import withFetch, { need } from './withFetch';

interface IProps {
  parks: IParksStore;
}

const Parks: StatelessComponent<IProps> & { needs: need[] }  = withFetch(
  observer((props: IProps) => {
    const { parks } = props;
    const items = parks.all;
    return (
      <Locations items={items}>{park => <Park park={park} />}</Locations>
    );
  }),
  { inject: true, model: 'parks' }
);

export default Parks;
