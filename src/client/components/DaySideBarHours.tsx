import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { StatelessComponent } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { IParkHour } from '../stores/Days';

interface IProps {
  parks: IParkHour[];
}

{/* <Table.Row>
<Table.Cell>Magic Kingdom</Table.Cell>
<Table.Cell>10:00 AM to 12:00 AM</Table.Cell>
<Table.Cell />
</Table.Row>
<Table.Row warning>
<Table.Cell>Hollywood Studios</Table.Cell>
<Table.Cell>10:00 AM to 12:00 AM</Table.Cell>
<Table.Cell textAlign="center">
  <FontAwesomeIcon icon={faCheck} />
</Table.Cell>
</Table.Row> */}

const renderPark = park => {
  return (
    <Table.Row>
      <Table.Cell>{park.name}</Table.Cell>
      <Table.Cell>{`${park.open} to ${park.close}`}</Table.Cell>
      <Table.Cell />
    </Table.Row>
  );
};

const DaySideBarHours: StatelessComponent<IProps> = (props: IProps) => (
  <>
    <Header as="h4">Hours</Header>
    <Table celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Park</Table.HeaderCell>
          <Table.HeaderCell>Hours</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">EMH</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.parks.map(park => renderPark(park))}
      </Table.Body>
    </Table>
  </>
);

export default DaySideBarHours;
