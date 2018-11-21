import createReactClass from 'create-react-class';
import { inject, IReactComponent, observer } from 'mobx-react';
import React from 'react';
import { Segment } from 'semantic-ui-react';

export type need = () => Promise<any>;

/**
 *
 */
interface IOptions {
  // method to find a specific model
  find?: string;
  // param or prop key for the id for the model, used when searching
  id?: string;
  // override to determine if the model is loading or not
  isLoading?: ((props: any) => boolean) | string;
  // models to fetch
  fetch: string;
  models: string | string[];
  // method to call when fetching
  method?: string;
  // store name to return as a prop when searching
  propName?: string;
}

const PARAM = 'param:';
const PROP = 'prop:';

/**
 * TODO: This needs to handle the ability to load and fetch an individual one
 * and check if both are loaded, this can remove the need for Park.tsx needing to
 * have the custom isLoading function.
 */
export default (
  WrappedComponent, options: IOptions): any => {
  const { fetch, models } = options;

  const observed: IReactComponent & { needs?: need[] } = observer(
    // TODO: Replace with stateless component and hooks when they are release in react
    createReactClass({
      componentDidMount() {
        const { find, id, method } = options;

        let store = this.props[fetch];
        // need to find the model first
        if (find && id) {
          store = this.findModel();
        }

        store[method || 'fetch']();
      },
      findModel() {
        const { find, id, method } = options;
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

        return this.props[fetch][find](value);
      },
      render() {
        const { isLoading, find, propName, id } = options;

        let props = this.props;
        let store = this.props[fetch];
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

  // TODO: This needs to get dynamically generated
  observed.needs = [() => Promise.resolve('balls')];

  // TODO: TS freaked out when I inlined the type check
  if (typeof models === 'string') {
    return inject(models)(observed);
  }

  return inject(...models)(observed);

};
