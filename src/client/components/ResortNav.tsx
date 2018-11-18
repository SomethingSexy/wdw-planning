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

const ResortNav: StatelessComponent<IProps> = (
  { activitiesCount, diningCount, id, location }
) => {
  const { pathname } = location;
  return (
    <Menu pointing secondary>
      <Menu.Item active={pathname.startsWith(`/resorts/${id}/activities`)}>
        <Link to={`/resorts/${id}/activities`}>
          Attractions<Label color="yellow" style={icon}>{activitiesCount}</Label>
        </Link>
      </Menu.Item>
      <Menu.Item active={pathname.startsWith(`/resorts/${id}/dining`)}>
        <Link to={`/resorts/${id}/dining`}>
          Dining<Label color="blue" style={icon}>{diningCount}</Label>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(ResortNav);
