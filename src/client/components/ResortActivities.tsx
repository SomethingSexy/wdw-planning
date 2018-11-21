import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { IResort } from '../stores/Resort';
import { ILocationStore } from '../stores/types';
import LocationActivities from './LocationActivities';
import withFetch from './withFetch';

interface IProps {
  store?: ILocationStore<IResort>;
  id: string;
}

const ResortActivities: StatelessComponent<IProps> = withFetch(
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
    fetch: 'resorts',
    find: 'findById',
    id: 'param:id',
    method: 'fetchActivities',
    models: 'resorts',
    propName: 'store'
  }
);

export default ResortActivities;
