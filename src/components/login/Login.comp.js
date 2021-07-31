import React from 'react'
import {Container,Col,Form,Row,FormGroup, FormLabel,Button} from "react-bootstrap"
import PropTypes from 'prop-types';
export const LoginForm = ({handleOnChange,handleOnSubmit,email,password,formswitcher}) => {
    return (
<Container>
    <Row>
        <Col>
        <h1 className="text-info text-center">Client Login</h1>
        <hr/>
        <Form autoComplete="off" onSubmit={handleOnSubmit}> 
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
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={password}
                placeholder="Enter password"
                                 /> 
            </Form.Group>
<Button type="submit">Login</Button>
        </Form>
        <hr/>
        </Col>
    </Row> 
    <Row>
        <Col>
        <a href="#!" onClick={()=>formswitcher("reset")}>Forget Password</a>
            </Col>
    </Row>
</Container>
    )
}
LoginForm.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formswitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    

}


