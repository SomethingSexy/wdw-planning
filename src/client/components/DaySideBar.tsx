import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inject, observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Segment, Sidebar } from 'semantic-ui-react';
import { IAppStore } from '../stores/App';
import { IDay, IDayStore } from '../stores/Days';
import DaySideBarEmpty from './DaySideBarEmpty';
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

const renderToday = (today: IDay) => {
  const { parkHours } = today;

  if (!parkHours) {
    return <DaySideBarEmpty />;
  }

  return (
    <Grid.Row>
      <Grid.Column align="center">
        <DaySideBarHours parks={parkHours} />
      </Grid.Column>
      <Grid.Column align="center">
        <DaySideBarWeather />
      </Grid.Column>
    </Grid.Row>
  );
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

      const previous = days.previous.bind(days);
      const next = days.next.bind(days);
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
                <Button onClick={previous}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
              </Grid.Column>
              <Grid.Column align="center">
                <Header as="h3">
                  <Link to={`/days/${today.date}`}>{today.label}</Link>
                </Header>
              </Grid.Column>
              <Grid.Column align="left">
                <Button onClick={next}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2} divided>
            {renderToday(today)}
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
