import TableComponent from "./shared/Table";
import DropdownComponent from "./shared/Dropdown";
import { Table } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
  const input = {
    header: ["Name", "Class", "Section", "Roll Number", "Amount", "Status"],
    body: [
      {
        name: "Soumen",
        class: "10",
        section: "A",
        rollNo: "4",
        amount: "100",
        status: "Paid",
      },
      {
        name: "Saurab",
        class: "08",
        section: "A",
        rollNo: "3",
        amount: "90",
        status: "Paid",
      },
      {
        name: "Subrata",
        class: "07",
        section: "A",
        rollNo: "2",
        amount: "80",
        status: "Paid",
      },
      {
        name: "Pramita",
        class: "07",
        section: "A",
        rollNo: "1",
        amount: "70",
        status: "Paid",
      },
    ],
  };

  let [inputd, setInputData] = useState(input);

  const updateData = (e) => {
    setInputData({
      header: ["Name", "Class", "Section", "Roll Number", "Amount", "Status"],
      body: [
        {
          name: "Soumen",
          class: "10",
          section: "A",
          rollNo: "4",
          amount: "100",
          status: "Paid",
        },
      ],
    });
  };
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td>
              <DropdownComponent
                type="Name"
                data={[
                  { id: 1, value: "Soumen" },
                  { id: 2, value: "Saurab" },
                  { id: 3, value: "Subrata" },
                  { id: 1, value: "Pramita" },
                ]}
                updateData={updateData}
              ></DropdownComponent>
            </td>
            <td>
              <DropdownComponent
                type="Class"
                data={[
                  { id: 1, value: "10" },
                  { id: 2, value: "08" },
                  { id: 3, value: "07" },
                  { id: 1, value: "06" },
                ]}
                updateData={updateData}
              ></DropdownComponent>
            </td>
            <td>
              <DropdownComponent
                type="Section"
                data={[
                  { id: 1, value: "A" },
                  { id: 2, value: "B" },
                  { id: 3, value: "C" },
                  { id: 1, value: "D" },
                ]}
                updateData={updateData}
              ></DropdownComponent>
            </td>
            <td>
              <DropdownComponent
                type="Roll No"
                data={[
                  { id: 1, value: "4" },
                  { id: 2, value: "3" },
                  { id: 3, value: "2" },
                  { id: 1, value: "1" },
                ]}
                updateData={updateData}
              ></DropdownComponent>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tbody>
          <tr>
            <td>
              <TableComponent data={inputd}></TableComponent>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
