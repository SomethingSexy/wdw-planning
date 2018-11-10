import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Header, Label, Menu, Segment, Tab } from 'semantic-ui-react';
import { IParksStore } from '../stores/Parks';
import ParkActivities from './ParkActivities';
import ParkAreas from './ParkAreas';
import withFetch from './withFetch';

interface IProps {
  match: any;
  parks: IParksStore;
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

const Park: StatelessComponent<IProps> = withFetch(
  observer((props: IProps) => {
    const { match, parks } = props;
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
          <Tab menu={{ secondary: true, pointing: true }} panes={panes(data)} />
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
