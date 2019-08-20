import { combineReducers } from 'redux';
import Users from './users';
import Tasks from './task';
import Messages from './message';

export default combineReducers({ Users, Tasks, Messages });

