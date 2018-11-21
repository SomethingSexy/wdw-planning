import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inject, observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Segment, Sidebar, Table } from 'semantic-ui-react';
import { IAppStore } from '../stores/App';
import { IDayStore } from '../stores/Days';
import DaySideBarHours from './DaySideBarHours';
import DaySideBarWeather from './DaySideBarWeather';
import withFetch from './withFetch';

interface IProps {
  app: IAppStore;
  days: IDayStore;
}

const dateStyle = {
  marginBottom: '1em',
  marginTop: '1em'
};

// TODO: Add colors for special event days and extended magic hours
const DaySideBar: StatelessComponent = withFetch(
  observer(
    (props: IProps) => {
      const { app, days } = props;
      const today = days.today;
      if (!today) {
        return null;
      }
      const visible = props.app && props.app.showDay;
      return (
        <Sidebar
          as={Segment}
          animation="overlay"
          className="day-sidebar"
          direction="top"
          visible={visible}
        >
          <Grid columns={3} style={dateStyle}>
            <Grid.Row >
              <Grid.Column align="right">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Grid.Column>
              <Grid.Column align="center">
                <Header as="h3">
                  <Link to={`/days/${today.date}`}>{today.label}</Link>
                </Header>
              </Grid.Column>
              <Grid.Column align="left">
                <FontAwesomeIcon icon={faArrowRight} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column align="center">
                <DaySideBarHours parks={today.parkHours} />
              </Grid.Column>
              <Grid.Column align="center">
                <DaySideBarWeather />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sidebar>
      );
    }
  ),
  {
    fetch: 'days',
    models: ['app', 'days']
  }
);

export default DaySideBar;
