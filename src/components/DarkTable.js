import Table from 'react-bootstrap/Table';

const renderPlayer = (player, index) => {
    return (
        <tr key={index}>
            <td>{player.name} </td>
            <td>{player.position} </td>
            <td>{player.team} </td>
        </tr>
    )
 }

function DarkTable(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        {[props.players.map(renderPlayer)]}
      </tbody>
    </Table>
  );
}

export default DarkTable;