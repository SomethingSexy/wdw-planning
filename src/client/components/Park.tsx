import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { StatelessComponent } from 'react';
import { Header, Transition } from 'semantic-ui-react';

interface IProps {
  description: string;
  icon: IconProp;
  id: number;
  image: string;
  name: string;
  type: string;
}

const Park: StatelessComponent<IProps> = () => {
  return (
    <Header as="h1">Magic Kingdom</Header>
  );
};

export default Park;
