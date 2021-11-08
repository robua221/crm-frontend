 
import React from "react";
import {useDispatch} from "react-redux"
import { filterSearchTicket } from "../../pages/ticket-list/TicketsAction";
import { Form, Row, Col } from "react-bootstrap";

export default function SearchForm() {
  const dispatch=useDispatch()
const handleOnChange=(e)=>{
  const {value}=e.target;
 dispatch(filterSearchTicket(value))
}
 
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
         
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
 
