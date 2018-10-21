import React from 'react';
// tslint:disable-next-line:no-submodule-imports
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Application from '../../client/Application';

export default (url: string) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <Application />
    </StaticRouter>
  );

  return app;
};
