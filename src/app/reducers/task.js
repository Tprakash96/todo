import { TASK_LIST } from "../constants/action_type";

const initialState = {
    taskList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TASK_LIST:
            state = { ...state, taskList: action.payload.message }
            break;
        default:
            break;
    }
    return state;
}