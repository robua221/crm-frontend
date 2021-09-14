import PropTypes from "prop-types";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
export default function SearchForm({ handleOnChange, str }) {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:{" "}
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              placeholder="Search..."
              onChange={handleOnChange}
              value={str}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
