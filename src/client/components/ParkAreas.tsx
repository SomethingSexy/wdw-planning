import { inject, observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Header, List } from 'semantic-ui-react';

interface IProps {
  park: any;
}

const renderArea = (park, area, id) => {
  return (
    <List.Item key={id}>
      <List.Content>
        <List.Header as="a" href={`/parks/${park.id}/areas/${area.id}`}>{area}</List.Header>
      </List.Content>
    </List.Item>
  );
};

// TODO: We probably need to load withFetch to make sure we have all of the parks first
const ParkAreas: StatelessComponent<IProps> = ({ park }) => {
  return (
    <>
      <Header as="h3">Park Areas</Header>
      <List animated divided relaxed selection verticalAlign="middle">
        {park.areas.map((area, index) => renderArea(park, area, index))}
      </List>
    </>
  );
};

export default ParkAreas;
