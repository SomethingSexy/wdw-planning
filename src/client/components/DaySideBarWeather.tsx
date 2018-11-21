import React, { StatelessComponent } from 'react';
import { Header } from 'semantic-ui-react';
import { IAppStore } from '../stores/App';

interface IProps {
  app?: IAppStore;
}

const DaySideBarWeather: StatelessComponent<IProps> = (props: IProps) => (
  <>
    <Header as="h4">Weather</Header>
    Morning / Afternoon / Night
  </>
);

export default DaySideBarWeather;
