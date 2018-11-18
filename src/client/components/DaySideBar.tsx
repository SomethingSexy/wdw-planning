import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inject, observer } from 'mobx-react';
import React, { StatelessComponent } from 'react';
import { Grid, Header, Segment, Sidebar, Table } from 'semantic-ui-react';
import { IAppStore } from '../stores/App';

interface IProps {
  app?: IAppStore;
}

// TODO: Add colors for special event days and extended magic hours
const DaySideBar: StatelessComponent<IProps> = observer(
  (props: IProps) => (
    <Sidebar
      as={Segment}
      animation="overlay"
      direction="top"
      style={{ marginTop: '3em !important' }}
      visible={props.app && props.app.showDay}
    >
      <Grid.Row align="center" columns={1}>
        <Grid.Column>
          <Header as="h3">Thursday, March 2nd 2019</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column align="center">
            <Header as="h4">Hours</Header>
            <Table basic="very" celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Park</Table.HeaderCell>
                  <Table.HeaderCell>Hours</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Magic Kingdom</Table.Cell>
                  <Table.Cell>10:00 AM to 12:00 AM</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column align="center">
            <Header as="h4">Weather</Header>
            Morning / Afternoon / Night
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Sidebar>
  )
);

export default inject('app')(DaySideBar);
