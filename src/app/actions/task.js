import { defaultAgent } from '../helpers/web-agent';
import { TASK_LIST } from '../constants/action_type';

export const taskList = data => ({ type: TASK_LIST, payload: data });

export const createTask = (params, history) => dispatch => {
    defaultAgent.post('/task/create', params).then(res => {
        const data = res.data;
        if (data.status === 2001) {
            history.push('/home/task');
            alert("Table was added");
        }
    }).catch(ex => {
        console.log(ex);
    });
}

export const getTaskList = (userId) => dispatch => {
    defaultAgent.post('/task/list', { userId: userId }).then(res => {
        const data = res.data;
        dispatch(taskList(data));
    }).catch(ex => {
        console.log(ex);
    });
}