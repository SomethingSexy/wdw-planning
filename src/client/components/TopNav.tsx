import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inject } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { IAppStore } from '../stores/App';

interface IProps {
  app?: IAppStore;
}

const toggleDaySideBar = (app: IAppStore) => {
  app.setShowDay(!app.showDay);
};

const TopNav: StatelessComponent<IProps> = props => {
  const toggle = toggleDaySideBar.bind(undefined, props.app);
  return (
    <Menu color="violet" fixed="top" inverted>
      <Container>
        <Menu.Item><Link to="/">WDW Planner</Link></Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              as="a"
              onClick={toggle}
            >
              Date <FontAwesomeIcon icon={faCloudSun} />
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default inject('app')(TopNav);
