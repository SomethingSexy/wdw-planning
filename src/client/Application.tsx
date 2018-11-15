import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Item } from 'semantic-ui-react';
import MainNav from './components/MainNav';
import Park from './components/Park';
import ParkActivities from './components/ParkActivities';
import Parks from './components/Parks';
import Resort from './components/Resort';
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
  exact: true,
  path: '/resorts/:id',
}];

export default () => {
   /* tslint:disable-next-line:jsx-no-multiline-js */
  return (
    <div>
      <TopNav />
      <Container style={{ marginTop: '7em' }}>
        <MainNav />
        <Switch
        >
          <Redirect exact from="/" to="/parks" />
          {renderRoutes(routes)}
        </Switch>
      </Container>
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
