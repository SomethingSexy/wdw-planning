import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Application = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </HashRouter>
)

ReactDOM.render(
  <Application/>,
  document.getElementsByTagName('body')[0]);
