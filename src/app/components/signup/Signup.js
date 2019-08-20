import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import { createUser } from '../../actions/user';
import { FormValidator } from '../../helpers/FormValidator';
import { Validator } from '../widgets/Validator';
import '../../../assets/css/Login.css';

class signup extends React.Component {
    constructor() {
        super();
        this.validator = this.getValidatorRules();
        this.submitted = false;

        this.state = {
            validation: this.validator.valid(),
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getValidatorRules() {
        return new FormValidator([
            {
                field: 'email',
                type: 'email',
                isEmpty: false,
                message: 'Please enter valid email'
            },
            {
                field: 'password',
                type: 'password',
                isEmpty: false,
                minLength: 6,
                maxLength: 16,
                message: 'password length should between 6 to 16'
            },
            {
                field: 'confirmPassword',
                type: 'password',
                isEmpty: false,
                minLength: 6,
                maxLength: 16,
                message: 'password length should between 6 to 16'
            }
        ]);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit() {
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        if (validation.isValid) {
            const isPasswordMatch = this.validator.isPasswordsAreMatched(this.state);
            if (!isPasswordMatch) { alert("Sorry,Password Didn't match"); }
            else {
                const { firstName, lastName, email, password } = this.state;
                const params = {
                    'user_name': firstName + " " + lastName,
                    'email': email,
                    'password': password,
                }
                this.props.actions.createUser(params, this.props.history);
            }
        }
    }

    render() {
        const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;

        return (
            <div id="login">
                <Container id="signup-box">
                    <Form>
                        <h3 className="text-center form-heading text-color"><b>SignUp</b></h3>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="text-color">First Name:</Form.Label><br />
                                    <Form.Control type="text" name="firstName" id="firstName" autoComplete="off" value={this.state.firstName} onChange={this.handleChange} className="form-control" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="text-color">Last Name:</Form.Label><br />
                                    <Form.Control type="text" name="lastName" id="lastName" autoComplete="off" className="form-control" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group>
                            <Validator validation={validation.email}>
                                <Form.Label className="text-color">Email:</Form.Label><br />
                                <Form.Control type="text" name="email" autoComplete="off" onChange={this.handleChange} id="email" className="form-control" />
                                <Validator.Text />
                            </Validator>
                        </Form.Group>
                        <Form.Group>
                            <Validator validation={validation.password}>
                                <Form.Label className="text-color">Password:</Form.Label><br />
                                <Form.Control type="password" onChange={this.handleChange} autoComplete="off" name="password" id="password" className="form-control" />
                                <Validator.Text />
                            </Validator>
                        </Form.Group>
                        <Form.Group>
                            <Validator validation={validation.confirmPassword}>
                                <Form.Label className="text-color">Confirm Password:</Form.Label><br />
                                <Form.Control type="password" onChange={this.handleChange} autoComplete="off" name="confirmPassword" id="confirmPassword" className="form-control" />
                                <Validator.Text />
                            </Validator>
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button variant="primary" onClick={this.handleSubmit} className="submit" autoComplete="off" name="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    ({ actions: bindActionCreators({ createUser }, dispatch) });

export default connect(null, mapDispatchToProps)(signup);