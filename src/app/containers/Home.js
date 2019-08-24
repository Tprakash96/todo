import React from 'react';
import { Route } from 'react-router-dom';

import '../../assets/css/App.css';
import Task from '../components/tasks/TaskList';
import TaskForm from '../components/tasks/TaskForm'
import Header from '../components/layout/Header';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header path={this.props.match.path} history={this.props.history}></Header>
                <Route exact path={`${this.props.match.path}/task`} component={Task} />
                <Route exact path={`${this.props.match.path}/task/create`} component={TaskForm} />
            </div>
        );
    }
}

export default Home;