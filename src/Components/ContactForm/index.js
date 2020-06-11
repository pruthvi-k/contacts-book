import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

function ContactForm(props) {
  const [validated, setValidated] = useState(false);
  const { data, setShow, showPopup, countryList } = props;
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      props.handleAddContact(data);
    }
    event.preventDefault();
    setValidated(true);
  };

  return (
    <>
      <Modal
        show={showPopup}
        onHide={() => {
          setShow(false);
        }}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.type} Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={props.handleChange}
                  value={data.name}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Age"
                  name="age"
                  onChange={props.handleChange}
                  value={data.age}
                  min={1}
                  max={200}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter age.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="address"
                  required
                  onChange={props.handleChange}
                  value={data.address}
                  placeholder="Enter Address"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Pin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Pin"
                  name="pin"
                  required
                  onChange={props.handleChange}
                  value={data.pin}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter pin.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom05"
                name="country"
              >
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  required
                  onChange={props.handleChange}
                  value={data.country}
                  name="country"
                >
                  <option value="">-- Select Country --</option>
                  {countryList}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select country.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <hr />
            <Row>
              <Col>
                <Button variant="primary" className="mr-2" type="submit">
                  Add
                </Button>
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactForm;
