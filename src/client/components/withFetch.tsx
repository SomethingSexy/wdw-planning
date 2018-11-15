import createReactClass from 'create-react-class';
import { inject, IReactComponent, observer } from 'mobx-react';
import React from 'react';
import { Segment } from 'semantic-ui-react';

export type need = () => Promise<any>;

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

const PARAM = 'param:';
const PROP = 'prop:';

export default (
  WrappedComponent, options: IOptions): any => {
  const { model } = options;
  // const injectModel = options.inject || false;

  const observed: IReactComponent & { needs?: need[] } = observer(
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
      },
      findModel() {
        const { find, id, method, params } = options;
        if (!find || !id) {
          return null;
        }

        let value;
        if (id.startsWith(PARAM)) {
          const idField = id.substring(PARAM.length);
          value = this.props.match.params[idField];
        } else if (id.startsWith(PROP)) {
          const idField = id.substring(PROP.length);
          value = this.props[idField];
        }

        return this.props[model][find](value);
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

  observed.needs = [() => Promise.resolve('balls')];

  return inject(model)(observed);
};
