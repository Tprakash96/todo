import { USER_INFO } from '../constants/action_type';

const initialState = {
    isRequest: false,
    loginInfo: null,
    error: null,
    userInfo: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO:
            state = { ...state, userInfo: action.payload }
            break;
        default:
            break;
    }
    return state;
}