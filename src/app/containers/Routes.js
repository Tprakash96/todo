import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Home from '../containers/Home';
import Verfication from '../components/signup/Verification';
import ForgetPassword from '../components/login/ForgotPassword';
import ResetPassword from '../components/login/ResetPassword';
import TaskList from '../components/tasks/TaskList';
import NotFound from './NotFound';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgetPassword" component={ForgetPassword} />
            <Route exact path="/user/verification/:userId" component={Verfication} />
            <Route exact path="/user/resetPassword/:userId" component={ResetPassword} />
            <Route exct path="/home" component={Home} />
            <Route exact path="/*" component={NotFound} />
        </Switch>
    </Router>
)

export default Routes;