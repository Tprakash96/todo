import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormValidator } from '../../helpers/FormValidator';
import { Validator } from '../widgets/Validator';
import { createTask } from '../../actions/task';

import '../../../assets/css/App.css';
import "../../../assets/css/react-datetime.css";

class TaskForm extends React.Component {
    constructor() {
        super();
        this.validator = this.getValidatorRules();
        this.submitted = false;

        this.state = {
            validation: this.validator.valid(),
            taskName: '',
            taskDetails: '',
            phoneNumber: '',
            email: '',
            time: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDatetime = this.handleDatetime.bind(this);
    }

    getValidatorRules() {
        return new FormValidator([
            {
                field: 'taskName',
                type: 'text',
                isEmpty: false,
                message: 'Task name should not be empty'
            },
            {
                field: 'taskDetails',
                type: 'text',
                isEmpty: false,
                message: 'Task details name should not be empty'
            },
            {
                field: 'email',
                type: 'email',
                isEmpty: false,
                message: 'Please enter valid email address'
            },
            {
                field: 'phoneNumber',
                type: 'phone',
                isEmpty: false,
                message: 'Please enter valid phone number'
            },
            {
                field: 'time',
                type: 'text',
                isEmpty: false,
                message: 'Please select time'
            },
        ]);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleDatetime(value) {
        this.setState({ time: value.format("YYYY-MM-DD HH:mm:ss") });
    }

    handleSubmit() {
        const validation = this.validator.validate(this.state);
        this.setState({ validation });

        if (validation.isValid) {
            const { taskName, taskDetails, email, phoneNumber, time } = this.state;
            const params = {
                'taskName': taskName,
                'taskDetails': taskDetails,
                'email': email,
                'phoneNumber': phoneNumber,
                'time': time
            }
            this.props.actions.createTask(params, this.props.history);
        }
    }

    render() {
        const validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;

        return (
            <div className="task-form">
                <Form>
                    <Form.Group>
                        <Validator validation={validation.taskName}>
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} name="taskName" values={this.state.taskName} placeholder="Enter task" />
                            <Validator.Text />
                        </Validator>
                    </Form.Group>

                    <Form.Group>
                        <Validator validation={validation.taskDetails}>
                            <Form.Label>Task Details</Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} name="taskDetails" values={this.state.taskDetails} placeholder="Enter task details" />
                            <Validator.Text />
                        </Validator>
                    </Form.Group>

                    <Form.Group>
                        <Validator validation={validation.phoneNumber}>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="phone" onChange={this.handleChange} name="phoneNumber" values={this.state.phoneNumber} placeholder="Enter phone" />
                            <Validator.Text />
                        </Validator>
                    </Form.Group>

                    <Form.Group>
                        <Validator validation={validation.email}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={this.handleChange} name="email" values={this.state.email} placeholder="Enter email" />
                            <Validator.Text />
                        </Validator>
                    </Form.Group>

                    <Form.Group>
                        <Validator validation={validation.time}>
                            <Form.Label>Alert Time</Form.Label>
                            <Datetime onChange={this.handleDatetime} name="time" values={this.state.time} />
                            <Validator.Text />
                        </Validator>
                    </Form.Group>

                    <Form.Group className="text-right">
                        <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
    ({ actions: bindActionCreators({ createTask }, dispatch) });

export default connect(null, mapDispatchToProps)(TaskForm);