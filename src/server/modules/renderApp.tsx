import { Provider } from 'mobx-react';
import React from 'react';
// tslint:disable-next-line:no-submodule-imports
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Application from '../../client/Application';
import Store from '../../client/stores/index';

const store = Store();

export default (url: string) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <Provider {...store}>
      <StaticRouter location={url} context={context}>
        <Application />
      </StaticRouter>
    </Provider>
  );

  return app;
};
