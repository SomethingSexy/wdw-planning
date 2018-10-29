import createReactClass from 'create-react-class';
import { inject, observer } from 'mobx-react';
import React from 'react';

export default (WrappedComponent, model) => {
  return inject(model)(
    observer(
      // TODO: Replace with stateless component and hooks when they are release in react
      createReactClass({
        componentDidMount() {
          this.props[model].fetch();
        },
        render() {
          return <WrappedComponent {...this.props} />;
        }
      })
    )
  );
};
