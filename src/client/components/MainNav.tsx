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

const TopNav: StatelessComponent<IProps> = ({ location }) => {
  const { pathname } = location;
  return (
    <Menu pointing secondary>
      <Menu.Item
        active={pathname.startsWith('/parks') || pathname === '/'}
        style={leftMenu}
      >
        <FontAwesomeIcon icon={faFortAwesome} style={icon} />
        <Link to="/parks">Parks</Link>
      </Menu.Item>
      <Menu.Item
        active={pathname.startsWith('/resorts')}
      >
        <FontAwesomeIcon icon={faHotel} style={icon} />
        <Link to="/resorts">Resorts</Link>
      </Menu.Item>
      <Menu.Item
        active={pathname.startsWith('/attractions')}
        style={rightMenu}
      >
        <FontAwesomeIcon icon={faStar} style={icon} />
        <Link to="/attractions">Attractions</Link>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(TopNav);
