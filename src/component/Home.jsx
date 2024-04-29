import TableComponent from "./shared/Table";
import DropdownComponent from "./shared/Dropdown";
import { Table } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
  const header = [
    "Name",
    "Class",
    "Section",
    "Roll Number",
    "Amount",
    "Status",
  ];
  const input = [
    {
      Name: "Soumen",
      Class: "10",
      Section: "A",
      RollNo: "4",
      Amount: "100",
      Status: "Paid",
    },
    {
      Name: "Saurab",
      Class: "08",
      Section: "A",
      RollNo: "3",
      Amount: "90",
      Status: "Paid",
    },
    {
      Name: "Subrata",
      Class: "07",
      Section: "A",
      RollNo: "2",
      Amount: "80",
      Status: "Paid",
    },
    {
      Name: "Pramita",
      Class: "07",
      Section: "A",
      RollNo: "1",
      Amount: "70",
      Status: "Paid",
    },
  ];

  let [inputData, setInputData] = useState(input);
  let [selectedValue, setSelectedValue] = useState("");
  let [initial, setInitial] = useState({
    Name: true,
    Class: true,
    Section: true,
    RollNo: true,
  });

  const resetFilter = () => {
    setInputData(input);
    setSelectedValue("");
    setInitial({
      Name: true,
      Class: true,
      Section: true,
      RollNo: true,
    });
  };

  const updateData = (e, type) => {
    console.log(e);
    console.log(type);
    setInitial(false);
    let filterData = [];
    console.log(inputData);
    switch (type) {
      case "Name":
        filterData = inputData.filter((i) => i.Name === e);
        //setInitial(...initial, { Name: false });
        break;
      case "Class":
        filterData = inputData.filter((input) => input.Class === e);
        //setInitial(...initial, { Class: false });
        break;
      case "Section":
        filterData = inputData.filter((input) => input.Section === e);
        //setInitial(...initial, { Section: false });
        break;
      case "RollNo":
        filterData = inputData.filter((input) => input.RollNo === e);
        //setInitial(...initial, { RollNo: false });
        break;
      default:
        break;
    }
    console.log(filterData);
    setInputData(filterData);
    setSelectedValue(e);
  };
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td>
              <DropdownComponent
                selectedValue={selectedValue}
                type="Name"
                data={[
                  { id: 1, value: "Soumen" },
                  { id: 2, value: "Saurab" },
                  { id: 3, value: "Subrata" },
                  { id: 1, value: "Pramita" },
                ]}
                updateData={updateData}
                initial={initial}
              ></DropdownComponent>
            </td>
            <td>
              <DropdownComponent
                selectedValue={selectedValue}
                type="Class"
                data={[
                  { id: 1, value: "10" },
                  { id: 2, value: "08" },
                  { id: 3, value: "07" },
                  { id: 1, value: "06" },
                ]}
                updateData={updateData}
                initial={initial}
              ></DropdownComponent>
            </td>
            <td>
              <DropdownComponent
                selectedValue={selectedValue}
                type="Section"
                data={[
                  { id: 1, value: "A" },
                  { id: 2, value: "B" },
                  { id: 3, value: "C" },
                  { id: 1, value: "D" },
                ]}
                updateData={updateData}
                initial={initial}
              ></DropdownComponent>
            </td>
            <td>
              <DropdownComponent
                selectedValue={selectedValue}
                type="Roll No"
                data={[
                  { id: 1, value: "4" },
                  { id: 2, value: "3" },
                  { id: 3, value: "2" },
                  { id: 1, value: "1" },
                ]}
                updateData={updateData}
                initial={initial}
              ></DropdownComponent>
            </td>
            <td>
              <button onClick={resetFilter}>Rest Filter</button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tbody>
          <tr>
            <td>
              <TableComponent header={header} data={inputData}></TableComponent>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
