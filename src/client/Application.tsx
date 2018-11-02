import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link, Route, Switch,  } from 'react-router-dom';
// tslint:disable-next-line:no-submodule-imports
import AnimatedSwitch from 'react-router-transition/lib/AnimatedSwitch';
import { Container, Item } from 'semantic-ui-react';
import Park from './components/Park';
import Parks from './components/Parks';
import TopNav from './components/TopNav';
import Root from './Root';
import './theme.css';

const routes: any[] = [{
  component: Parks,
  exact: true,
  path: '/',
}, {
  component: Parks,
  exact: true,
  path: '/parks',
}, {
  component: Park,
  exact: true,
  path: '/parks/:id'
}];

export default () => {
   /* tslint:disable-next-line:jsx-no-multiline-js */
  return (
    <div>
      <TopNav />
      <Container text style={{ marginTop: '7em' }}>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          {routes.map(route => (<Route key={route.path} {...route} />))}
        </AnimatedSwitch>
      </Container>
    </div>
  );
};
