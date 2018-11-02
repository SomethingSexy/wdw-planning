import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { inject, observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Header } from 'semantic-ui-react';

interface IProps {
  match: {};
  parks: any;
}

// TODO: We probably need to load withFetch to make sure we have all of the parks first
const Park: StatelessComponent<IProps> = inject('parks')(
  observer(({ match, parks }) => {
    const { id } = match.params;
    const data = parks.findById(id);
    return (
      <Header as="h1">{data.name}</Header>
    );
  })
);

export default Park;
