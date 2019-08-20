import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '../constants/action_type';

export const successMessage = data => ({ type: SUCCESS_MESSAGE, payload: data });

export const errorMessage = data => ({ type: ERROR_MESSAGE, payload: data });
