// import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
// import { faHotel, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { StatelessComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Label, Menu } from 'semantic-ui-react';

const icon = { marginLeft: '5px' };

// tslint:disable-next-line:no-empty-interface
interface IProps {
  activitiesCount: number;
  diningCount: number;
  history: any;
  id: string;
  location: any;
  match: any;
}

const ParkNav: StatelessComponent<IProps> = (
  { activitiesCount, diningCount, id, location }
) => {
  const { pathname } = location;
  return (
    <Menu pointing secondary>
      <Menu.Item active={pathname.startsWith(`/parks/${id}/activities`)}>
        <Link to={`/parks/${id}/activities`}>
          Attractions<Label color="yellow" style={icon}>{activitiesCount}</Label>
        </Link>
      </Menu.Item>
      <Menu.Item active={pathname.startsWith(`/parks/${id}/dining`)}>
        <Link to={`/parks/${id}/dining`}>
          Dining<Label color="blue" style={icon}>{diningCount}</Label>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(ParkNav);
