import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { IResortsStore } from '../stores/Resorts';
import Locations from './Locations';
import Resort from './ResortItem';
import withFetch from './withFetch';

interface IProps {
  resorts: IResortsStore;
}

const Resorts: StatelessComponent<IProps> = withFetch(
  observer((props: { resorts: IResortsStore }) => {
    const { resorts } = props;
    const items = resorts.all;
    return (
      <Locations items={items}>{resort => <Resort resort={resort} />}</Locations>
    );
  }),
  { inject: true, model: 'resorts' }
);

export default Resorts;
