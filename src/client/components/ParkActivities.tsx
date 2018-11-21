import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { IPark } from '../stores/Park';
import { ILocationStore } from '../stores/types';
import LocationActivities from './LocationActivities';
import withFetch from './withFetch';

interface IProps {
  store?: ILocationStore<IPark>;
  id: string;
}

const ParkActivities: StatelessComponent<IProps> = withFetch(
  observer((props: IProps) => {
    const { id, store } = props;
    if (!store) {
      return null;
    }

    const data = store.toJson;

    if (!data.activities) {
      return null;
    }

    return (
      <LocationActivities activities={data.activities} />
    );
  }),
  {
    fetch: 'parks',
    find: 'findById',
    id: 'param:id',
    method: 'fetchActivities',
    models: 'parks',
    propName: 'store'
  }
);

export default ParkActivities;
