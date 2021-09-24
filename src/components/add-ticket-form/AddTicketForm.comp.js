import React from "react";
import { Form, Jumbotron, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmError,
  frmData,
}) => {
   
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            name="subject"
            value={frmData.subject}
            // minLength="3"
            maxLength="100"
            onChange={handleOnChange}
            placeholder="Subject"
            required
          />
          <Form.Text className="text-danger">
            {frmError.subject && "Subject is required"}
          </Form.Text>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>

          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              onChange={handleOnChange}
              required
              value={frmData.issuedate}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            rows="5"
            onChange={handleOnChange}
            required
            value={frmData.detail}
          />
        </Form.Group>
        <Button type="submit" varient="info" block>
          {" "}
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};
AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
  frmError: PropTypes.object.isRequired,
};
