import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { inject, observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Header, List, Segment, Tab, Menu, Label } from 'semantic-ui-react';
import ParkActivities from './ParkActivities';
import ParkAreas from './ParkAreas';
import withFetch from './withFetch';

interface IProps {
  match: {};
  parks: any;
}

const panes = park => [
  {
    menuItem: (
      <Menu.Item key="attractions">
        Attractions<Label color="yellow">{park.activitiesCount}</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false} className="no-border">
        <ParkActivities parkId={park.id} />
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key="dining">
        Dining<Label color="blue">{park.diningCount}</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane attached={false} className="no-border">Tab 2 Content</Tab.Pane>
  }
];

// TODO: We probably need to load withFetch to make sure we have all of the parks first
const Park: StatelessComponent<IProps> = withFetch(
  observer(({ match, parks }) => {
    // TODO: figure out how we want to handle loading state
    if (!parks.loaded) {
      return null;
    }
    const { id } = match.params;
    const data = parks.findById(id);
    return (
      <>
        <Header as="h1">{data.name}</Header>
        <Segment basic clearing>
          <div>TODO: Other information</div>
          <div style={{ float: 'right' }}>
            <ParkAreas park={data} />
          </div>
        </Segment>
        <Segment basic>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes(data)} />
        </Segment>
      </>
    );
  }),
  'parks',
  {
    isLoading: ({ parks }) => {
      if (parks.loaded) {
        return false;
      }

      return true;
    },
  }
);

export default Park;
