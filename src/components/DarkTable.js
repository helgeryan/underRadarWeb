import Table from 'react-bootstrap/Table';

const renderPlayer = (player, index) => {
    return (
        <tr key={index}>
            <td>{player.name} </td>
            <td>{player.email} </td>
            <td>{player.username} </td>
        </tr>
    )
 }

function DarkTable(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {[props.players.map(renderPlayer)]}
      </tbody>
    </Table>
  );
}

export default DarkTable;