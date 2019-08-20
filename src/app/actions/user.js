import { USER_INFO, SIGNIN_INFO, SIGNUP_INFO } from '../constants/action_type';
import { defaultAgent } from '../helpers/web-agent';
import { successMessage, errorMessage } from './message';


export const userInfo = data => ({ type: USER_INFO, payload: data });

export const signupInfo = data => ({ type: SIGNUP_INFO, payload: data });

export const signinInfo = data => ({ type: SIGNIN_INFO, payload: data });

export const createUser = (params, history) => dispatch => {
    defaultAgent.post('/user/create', params).then(res => {
        const data = res.data;
        if (data.status === 2001) {
            dispatch(successMessage(data.message));
            history.push("/");
        }
        else dispatch(errorMessage(data.message));
    }).catch(ex => {
        console.log(ex);
    });
}

export const userLogin = (params, history) => dispatch => {
    defaultAgent.post('/user/login', params).then(res => {
        const data = res.data;
        if (data.status === 2001) {
            dispatch(userInfo(data.payload));
            history.push('/home/task');
        }
        else dispatch(errorMessage(data.message));
    }).catch(ex => {
        console.log(ex);
    });
}


export const verifyUser = (params, history) => dispatch => {
    defaultAgent.post('/user/verify', params).then(res => {
        const data = res.data;
        if (data.status === 3001) {
            history.push('/');
            dispatch(successMessage(data.message));
        }
    }).catch(ex => {
        console.log(ex);
    });
}

export const forgetPassword = (params, history) => dispatch => {
    defaultAgent.post('/user/forgetPassword', params).then(res => {
        const data = res.data;
        if (data.status === 2001) {
            history.push('/');
        }
    }).catch(ex => {
        console.log(ex);
    });
}

export const resetPassword = (params, history) => dispatch => {
    defaultAgent.post('/user/resetPassword', params).then(res => {
        const data = res.data;
        if (data.status === 2001) { history.push('/'); }
    }).catch(ex => {
        console.log(ex);
    });
}