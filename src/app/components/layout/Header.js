import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const Header = (props) => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand>TO-DO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to={`${props.path.path}/task`}>Task List</Nav.Link>
                        <Nav.Link as={Link} to={`${props.path.path}/task/create`}>Create Task</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Form.Label className={"p-3"}>Prakash T</Form.Label>
                        <Button>Logout</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
}

export default Header;