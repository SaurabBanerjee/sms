import { Table } from "react-bootstrap";

export default function TableComponent(props) {
  const { data, header } = props;
  console.log(props);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{header[0]}</th>
          <th>{header[1]}</th>
          <th>{header[2]}</th>
          <th>{header[3]}</th>
          <th>{header[4]}</th>
          <th>{header[5]}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.Name}</td>
              <td>{item.Class}</td>
              <td>{item.Section}</td>
              <td>{item.RollNo}</td>
              <td>{item.Amount}</td>
              <td>{item.Status}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
