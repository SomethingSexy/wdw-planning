import { observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { Header, Segment } from 'semantic-ui-react';
import { IResortsStore } from '../stores/Resorts';
import ParkAreas from './ParkAreas';
import ResortNav from './ResortNav';
import withFetch from './withFetch';

interface IProps {
  match: any;
  resorts: IResortsStore;
  route: any;
}

// const panes = park => [
//   {
//     menuItem: (
//       <Menu.Item key="attractions">
//         Attractions<Label color="yellow">{park.activitiesCount}</Label>
//       </Menu.Item>
//     ),
//     render: () => (
//       <Tab.Pane attached={false} className="no-border">
//         <ResortActivities id={park.id} />
//       </Tab.Pane>
//     )
//   },
//   {
//     menuItem: (
//       <Menu.Item key="dining">
//         Dining<Label color="blue">{park.diningCount}</Label>
//       </Menu.Item>
//     ),
//     render: () => <Tab.Pane attached={false} className="no-border">Tab 2 Content</Tab.Pane>
//   }
// ];

const Resort: StatelessComponent<IProps> = withFetch(
  observer((props: IProps) => {
    const { match, resorts, route } = props;
    // TODO: figure out how we want to handle loading state
    if (!resorts.loaded) {
      return null;
    }
    const { id } = match.params;
    const park = resorts.findById(id);

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
          <ResortNav
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
    isLoading: ({ resorts }) => {
      if (resorts.loaded) {
        return false;
      }

      return true;
    },
    model: 'resorts',
  }
);

export default Resort;
