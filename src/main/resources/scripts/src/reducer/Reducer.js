import {combineReducers, createStore} from 'redux';
import {loginInfo} from './LoginReducer.js';
import {showUserInfo} from './UsersActionReducer';
import {editDrawer} from "./editDrawerReducer";

const reducers =  combineReducers({loginInfo,showUserInfo,editDrawer});
const store = createStore(reducers);

export default store;