import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faHotel, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { StatelessComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const leftMenu = { marginLeft: 'auto' };
const rightMenu = { marginRight: 'auto' };
const icon = { marginRight: '5px' };

// tslint:disable-next-line:no-empty-interface
interface IProps {
  history: any;
  location: any;
  match: any;
}

const MainNav: StatelessComponent<IProps> = ({ location }) => {
  const { pathname } = location;
  return (
    <Menu pointing secondary>
      <Menu.Item
        active={pathname.startsWith('/parks') || pathname === '/'}
        style={leftMenu}
      >
        <Link to="/parks"><FontAwesomeIcon icon={faFortAwesome} style={icon} />Parks</Link>
      </Menu.Item>
      <Menu.Item
        active={pathname.startsWith('/resorts')}
      >
        <Link to="/resorts"><FontAwesomeIcon icon={faHotel} style={icon} />Resorts</Link>
      </Menu.Item>
      <Menu.Item
        active={pathname.startsWith('/attractions')}
        style={rightMenu}
      >
        <Link to="/attractions"><FontAwesomeIcon icon={faStar} style={icon} />Attractions</Link>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(MainNav);
