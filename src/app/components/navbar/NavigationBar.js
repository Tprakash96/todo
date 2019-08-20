import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const NavigationBar = (props) => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand href="#home text">TO-DO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={`${props.match.path}/task`}>Task List</Nav.Link>
                        <Nav.Link href={`${props.match.path}/task/create`}>Create Task</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Form.Label className={"p-3"}>Prakash T</Form.Label>
                        <Button>Logout</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;