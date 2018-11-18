import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { Header, Label, Menu, Segment, Tab } from 'semantic-ui-react';
import { IParksStore } from '../stores/Parks';
import ParkAreas from './ParkAreas';
import ParkNav from './ParkNav';
import withFetch from './withFetch';

interface IProps {
  match: any;
  parks: IParksStore;
  route: any;
}

const Park: StatelessComponent<IProps> = withFetch(
  observer((props: IProps) => {
    const { match, parks, route } = props;
    // TODO: figure out how we want to handle loading state
    if (!parks.loaded) {
      return null;
    }
    const { id } = match.params;
    const park = parks.findById(id);

    if (!park) {
      return null;
    }

    const data = park.toJson;
    return (
      <>
        <Header as="h1">{data.name}</Header>
        <Segment basic clearing>
          <div>TODO: Other information</div>
          <ParkAreas park={data} />
        </Segment>
        <Segment basic>
          <ParkNav
            activitiesCount={data.activitiesCount}
            diningCount={data.diningCount}
            id={data.id}
          />
          {renderRoutes(route.routes)}
          {/* <Tab menu={{ secondary: true, pointing: true }} panes={panes(data)} /> */}
        </Segment>
      </>
    );
  }),
  {
    inject: true,
    isLoading: ({ parks }) => {
      if (parks.loaded) {
        return false;
      }

      return true;
    },
    model: 'parks',
  }
);

export default Park;
