import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Application from './Application';
import Store from './stores/index';
// import './theme.css';

const store = Store();

// After rendering server is setup we can fully enable react-router.
ReactDOM.hydrate(
  <Provider {...store}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>
, document.getElementById('app'));
