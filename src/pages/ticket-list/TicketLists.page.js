import React, {useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import SearchForm from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
 
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { fetchAllTickets } from "./TicketsAction";
export const TicketLists = () => {
  
 
const dispatch = useDispatch()
  useEffect(() => {
dispatch(fetchAllTickets())
  }, [dispatch]);

  // const handleOnChange = (e) => {
  //   const { value } = e.target;

  //   setStr(value);
  //   searchTicket(value);
  // };

  // const searchTicket = (sttr) => {
  //   const displayTicket = tickets.filter((row) =>
  //     row.subject.toLowerCase().includes(sttr.toLowerCase())
  //   );
  
  // };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable/>
        </Col>
      </Row>
    </Container>
  );
};
