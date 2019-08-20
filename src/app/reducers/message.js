import React from 'react';
import Simplert from 'react-simplert';
import { toast } from 'react-toastify';
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from "../constants/action_type";

const initialState = {
    taskList: [],
}

export const setMessage = (data, type) => {
    if (type === SUCCESS_MESSAGE) toast.success(data);
    else toast.error(data);
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_MESSAGE:
            console.log("Success message received");
            setMessage(action.payload, SUCCESS_MESSAGE);
            break;
        case ERROR_MESSAGE:
            console.log("Reducer Error Message");
            setMessage(action.payload, ERROR_MESSAGE);
            break;
        default:
            break;
    }
    return state;
}