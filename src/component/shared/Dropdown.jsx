import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DropdownComponent(props) {
  const { type, data, updateData } = props;
  return (
    <>
      <Container>
        <Row xs="auto">
          <Col>
            <label> {props.type} : </label>
          </Col>
          <Col>
            <DropdownButton
              as={ButtonGroup}
              key={type}
              id={`dropdown-variants-${type}`}
              variant="secondary"
              title={type}
              onSelect={updateData}
            >
              {data.map((item) => {
                return (
                  <Dropdown.Item eventKey={item.id}>{item.value}</Dropdown.Item>
                );
              })}
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DropdownComponent;
