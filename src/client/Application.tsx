import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Item, Segment, Sidebar } from 'semantic-ui-react';
import DaySideBar from './components/DaySideBar';
import MainNav from './components/MainNav';
import Park from './components/Park';
import ParkActivities from './components/ParkActivities';
import Parks from './components/Parks';
import Resort from './components/Resort';
import ResortActivities from './components/ResortActivities';
import Resorts from './components/Resorts';
import Root from './components/Root';
import TopNav from './components/TopNav';
import './theme.css';

export const routes: any[] = [{
  component: Root,
  exact: true,
  path: '/',
}, {
  component: Parks,
  exact: true,
  path: '/parks',
}, {
  component: Park,
  path: '/parks/:id',
  routes: [
    {
      component: ParkActivities,
      exact: true,
      path: '/parks/:id/activities'
    }
  ]
}, {
  component: Resorts,
  exact: true,
  path: '/resorts',
}, {
  component: Resort,
  // exact: true,
  path: '/resorts/:id',
  routes: [
    {
      component: ResortActivities,
      exact: true,
      path: '/resorts/:id/activities'
    }
  ]
}];

const containerStyle = { marginTop: '5em' };

export default () => {
   /* tslint:disable-next-line:jsx-no-multiline-js */
  return (
    <div>
      <TopNav />
      <Sidebar.Pushable as={Container}>
        <DaySideBar />
        <Sidebar.Pusher>
          <Container style={containerStyle}>
            <MainNav />
            <Switch
            >
              <Redirect exact from="/" to="/parks" />
              {renderRoutes(routes)}
            </Switch>
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

// {routes.map(route => (<Route key={route.path} {...route} />))}

{/* <AnimatedSwitch
atEnter={{ opacity: 0 }}
atLeave={{ opacity: 0 }}
atActive={{ opacity: 1 }}
className="switch-wrapper"
>
{routes.map(route => (<Route key={route.path} {...route} />))}
</AnimatedSwitch> */}
