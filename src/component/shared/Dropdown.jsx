import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DropdownComponent(props) {
  const { selectedValue, type, data, updateData, initial } = props;
  console.log(initial)
  return (
    <>
      <Container>
        {/* <Row xs="auto">
          <Col>
            <label> {props.type} : </label>
          </Col>
          <Col>
            <DropdownButton
              as={ButtonGroup}
              id={`dropdown-variants-${type}`}
              variant="secondary"
              title={type}
              onSelect={updateData}
              //onChange={(e) => updateData(e)}
            >
              {data.map((item) => {
                return (
                  <Dropdown.Item eventKey={item.id}>{item.value}</Dropdown.Item>
                );
              })}
            </DropdownButton>
          </Col>
        </Row> */}
        <Row xs="auto">
          <Col>
            <label> {props.type} : </label>
          </Col>
          <Col>
            <select onChange={(e) => updateData(e.target.value, props.type)}>
              <option value="none" selected = {initial} disabled hidden>
                Select an Option
              </option>
              {data.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DropdownComponent;
