import { Table } from "react-bootstrap";

export default function TableComponent(data) {  
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
            <th>{data.data.header[0]}</th>
            <th>{data.data.header[1]}</th>
            <th>{data.data.header[2]}</th>
            <th>{data.data.header[3]}</th>
            <th>{data.data.header[4]}</th>
            <th>{data.data.header[5]}</th>
        </tr>
      </thead>
      <tbody>
        {data.data.body.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.class}</td>
              <td>{item.section}</td>
              <td>{item.rollNo}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
