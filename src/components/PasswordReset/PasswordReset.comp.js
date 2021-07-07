import React from "react";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";
import PropTypes from "prop-types";
export const PasswordReset = ({ handleOnChange, handleOnResetSubmit, email,formswitcher }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Password Reset</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!"onClick={()=>formswitcher("login")}>Login Now</a>
        </Col>
      </Row>
    </Container>
  );
};
PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formswitcher: PropTypes.func.isRequired,
  
};
