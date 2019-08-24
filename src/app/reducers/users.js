import { USER_INFO } from '../constants/action_type';
import { setUserInfo } from '../helpers/session';

const initialState = {
    isRequest: false,
    loginInfo: null,
    error: null,
    userInfo: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO:
            setUserInfo(action.payload);
            state = { ...state, userInfo: action.payload }
            break;
        default:
            break;
    }
    return state;
}