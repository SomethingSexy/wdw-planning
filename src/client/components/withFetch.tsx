import createReactClass from 'create-react-class';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Segment } from 'semantic-ui-react';

interface IOptions {
  isLoading?: ((props: any) => boolean) | string;
  method?: string;
  params?: string[];
}

export default (
  WrappedComponent, model, options: IOptions = {}): any => {
  return inject(model)(
    observer(
      // TODO: Replace with stateless component and hooks when they are release in react
      createReactClass({
        componentDidMount() {
          const { method, params } = options;
          const call = this.props[model][method || 'fetch'];
          if (params) {
            call.call(this.props[model], ...params.map(param => this.props[param]));
          } else {
            call.call(this.props[model]);
          }
        },
        render() {
          // TODO: Maybe pass loading down if we need more fine grain rendering
          const loading = typeof options.isLoading === 'function'
            ? options.isLoading(this.props)
            : this.props[model][options.isLoading || 'isLoading'];
          return (
            <Segment basic loading={loading}>
              <WrappedComponent {...this.props} />
            </Segment>
          );
        }
      })
    )
  );
};
