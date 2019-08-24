import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearSession } from '../../helpers/session';
import { getUserName } from '../../helpers/session';

class Header extends React.Component {
    constructor() {
        super();

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        clearSession();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Navbar bg="primary" expand="lg">
                    <Navbar.Brand>TO-DO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to={`${this.props.path}/task`}>Task List</Nav.Link>
                            <Nav.Link as={Link} to={`${this.props.path}/task/create`}>Create Task</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Form.Label className={"p-3"}>{getUserName()}</Form.Label>
                            <Button onClick={this.handleLogout}>Logout</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.Users.userInfo,
});

export default connect(mapStateToProps)(Header);