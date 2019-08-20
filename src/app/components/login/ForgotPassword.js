import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { forgetPassword } from '../../actions/user';
import { Form, Button, Container } from 'react-bootstrap';
import '../../../assets/css/Login.css';


class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit() {
        const params = { email: this.state.email }
        this.props.actions.forgetPassword(params, this.props.history);
    }

    render() {
        return (
            <div id="login">
                <Container id="forgot-password-box">
                    <Form>
                        <h3 className="text-center form-heading text-color"><b>Forget Password</b></h3>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label><br />
                            <Form.Control type="text" name="email" onChange={this.handleChange} value={this.state.email} id="username" autoComplete="off" className="form-control" />
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button name="submit" onClick={this.handleSubmit}>Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch =>
    ({ actions: bindActionCreators({ forgetPassword }, dispatch) });

export default connect(null, mapDispatchToProps)(ForgetPassword);