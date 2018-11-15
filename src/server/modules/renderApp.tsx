import { Provider } from 'mobx-react';
import React from 'react';
// tslint:disable-next-line:no-submodule-imports
import ReactDOMServer from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';
import Application, { routes } from '../../client/Application';
import Store from '../../client/stores/index';

const store = Store();

const getRouteData = async (routesArray, url) => {
  const needs: any[] = [];
  // TODO: need to recursively check routes
  routesArray
    .filter(route => route.component.needs)
    .forEach(route => {
      const match = matchPath(url, route.path); // { exact: true, strict: false };
      // TODO: if match and isExact
      if (match) {
        console.log(match);
        route.component.needs.forEach(need => {
          const result = need(match.params);
          needs.push(result);
        });
      }
    });
  return Promise.all(needs);
};

export default async (url: string) => {
  const context = {};
  const test = await getRouteData(routes, url);
  console.log('final', test);
  const app = ReactDOMServer.renderToString(
    <Provider {...store}>
      <StaticRouter location={url} context={context}>
        <Application />
      </StaticRouter>
    </Provider>
  );

  return app;
};
