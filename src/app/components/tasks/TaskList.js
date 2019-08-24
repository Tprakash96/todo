import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserId } from '../../helpers/session';
import { getTaskList } from '../../actions/task';

class TaskList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getTaskList(getUserId());
    }

    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <td>S.no</td>
                            <td>Task Name</td>
                            <td>Task Details</td>
                            <td>Email</td>
                            <td>Phone Number</td>
                            <td>Task Time</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.taskList.map((task) => {
                                return <tr>
                                    <td>{task.task_id}</td>
                                    <td>{task.task_name}</td>
                                    <td>{task.task_details}</td>
                                    <td>{task.task_email}</td>
                                    <td>{task.task_phone}</td>
                                    <td>{task.task_time}</td>
                                    <td></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    taskList: state.Tasks.taskList,
});

const mapDispatchToProps = dispatch =>
    ({ actions: bindActionCreators({ getTaskList }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);