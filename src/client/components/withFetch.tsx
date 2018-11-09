import createReactClass from 'create-react-class';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Segment } from 'semantic-ui-react';

interface IOptions {
  find?: string;
  id?: string;
  inject?: boolean;
  isLoading?: ((props: any) => boolean) | string;
  model: string;
  method?: string;
  params?: string[];
  propName?: string;
}

export default (
  WrappedComponent, options: IOptions): any => {
  const { model } = options;
  // const injectModel = options.inject || false;

  const observed = observer(
    // TODO: Replace with stateless component and hooks when they are release in react
    createReactClass({
      componentDidMount() {
        const { find, id, method, params } = options;

        let store = this.props[model];
        // need to find the model first
        if (find && id) {
          store = this.findModel();
        }

        store[method || 'fetch']();
        // if (params) {
        //   call.call(this.props[model], ...params.map(param => this.props[param]));
        // } else {
          // call.call(this.props[model]);
        // }
      },
      findModel() {
        const { find, id, method, params } = options;
        if (!find || !id) {
          return null;
        }

        return this.props[model][find](this.props[id]);
      },
      render() {
        const { isLoading, find, propName, id } = options;

        let props = this.props;
        let store = this.props[model];
        if (find && id && propName) {
          store =  this.findModel();
          props = {
            ...props,
            [propName]: store
          };
        }

        // TODO: Maybe pass loading down if we need more fine grain rendering
        const loading = typeof isLoading === 'function'
          ? isLoading(props)
          : store[isLoading || 'isLoading'];

        return (
          <Segment basic loading={loading}>
            <WrappedComponent {...props} />
          </Segment>
        );
      }
    })
  );

  // if (injectModel) {
  return inject(model)(observed);
  // }

  // return observed;
};
