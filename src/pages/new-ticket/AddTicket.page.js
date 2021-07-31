import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  details: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  details: false,
};
export const AddTicket = () => {
  const [frmData, setfrmData] = useState(initialFrmDt);
  const [frmError, setfrmError] = useState(initialFrmError);

  useEffect(() => {}, [frmData, frmError]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setfrmData({
      ...frmData,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
setfrmError(initialFrmError)
    const isSubjectValid = await shortText(frmData.subject);

    setfrmError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });
    console.log("form submitted", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Add New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}
            handleOnChange={handleOnChange}
            frmError={frmError}
          />
        </Col>
      </Row>
    </Container>
  );
};
