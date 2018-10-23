import React, { StatelessComponent } from 'react';
import { Container, Menu } from 'semantic-ui-react';

// tslint:disable-next-line:no-empty-interface
interface IProps {

}

const TopNav: StatelessComponent<IProps> = () => {
  return (
    <Menu color="violet" fixed="top" inverted>
      <Container>
        <Menu.Item as="a">WDW Planner</Menu.Item>
      </Container>
    </Menu>
  );
};

export default TopNav;
