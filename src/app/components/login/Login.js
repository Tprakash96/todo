import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { userLogin, forgetPassword } from '../../actions/user';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import '../../../assets/css/Login.css';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleForgetPassword = this.handleForgetPassword.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit() {
        const params = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.actions.userLogin(params, this.props.history);
    }

    handleForgetPassword() {
        this.props.history.push('/forgetPassword');
    }

    render() {
        return (
            <div id="login">
                <Container id="login-box">
                    <Form>
                        <h3 className="text-center form-heading text-color"><b>LogIn</b></h3>
                        <Form.Group>
                            <Form.Label>Username:</Form.Label><br />
                            <Form.Control type="text" name="email" onChange={this.handleChange} value={this.state.email} id="username" autoComplete="off" className="form-control" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password:</Form.Label><br />
                            <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} id="password" autoComplete="off" className="form-control" />
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button name="submit" onClick={this.handleSubmit}>Submit</Button>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col><Link onClick={this.handleForgetPassword}>Forget Password ?</Link></Col>
                                <Col className="text-right"><Link to="/signup">Create new account</Link></Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Container>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch =>
    ({ actions: bindActionCreators({ userLogin, forgetPassword }, dispatch) });

export default connect(null, mapDispatchToProps)(Login);