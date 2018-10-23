import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Route, Switch,  } from 'react-router-dom';
import { Container, Item } from 'semantic-ui-react';
import Parks from './components/Parks';
import TopNav from './components/TopNav';

export default () => {
  return (
    <>
      <TopNav />
      <Container text style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path="/" component={Parks} />
          <Route exact path="/parks" component={Parks} />
        </Switch>
      </Container>
    </>
  );
};
