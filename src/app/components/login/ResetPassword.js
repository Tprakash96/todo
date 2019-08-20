import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Container } from 'react-bootstrap';
import { resetPassword } from '../../actions/user';
import { FormValidator } from '../../helpers/FormValidator';
import { Validator } from '../widgets/Validator';
import '../../../assets/css/Login.css';

class ResetPassword extends React.Component {
    constructor() {
        super();
        this.validator = this.getValidatorRules();
        this.submitted = false;

        this.state = {
            validation: this.validator.valid(),
            password: '',
            confirmPassword: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getValidatorRules() {
        return new FormValidator([
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
                const params = {
                    'userId': this.props.match.params.userId,
                    'password': this.state.password,
                }
                this.props.actions.resetPassword(params, this.props.history);
            }
        }
    }

    render() {
        const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;

        return (
            <div id="login">
                <Container id="forget-password-box">
                    <Form>
                        <h3 className="text-center form-heading text-color"><b>Reset Password</b></h3>
                        <Form.Group>
                            <Validator validation={validation.password}>
                                <Form.Label className="text-color">Password:</Form.Label><br />
                                <Form.Control type="password" onChange={this.handleChange} autoComplete name="password" id="password" className="form-control" />
                                <Validator.Text />
                            </Validator>
                        </Form.Group>
                        <Form.Group>
                            <Validator validation={validation.confirmPassword}>
                                <Form.Label className="text-color">Confirm Password:</Form.Label><br />
                                <Form.Control type="password" onChange={this.handleChange} autoComplete name="confirmPassword" id="confirmPassword" className="form-control" />
                                <Validator.Text />
                            </Validator>
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button variant="primary" onClick={this.handleSubmit} className="submit" autoComplete name="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    ({ actions: bindActionCreators({ resetPassword }, dispatch) });

export default connect(null, mapDispatchToProps)(ResetPassword);