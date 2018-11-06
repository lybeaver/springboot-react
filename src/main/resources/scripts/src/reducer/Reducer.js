import { combineReducers,createStore } from 'redux';
import { loginInfo } from './LoginReducer.js';
import {showUserInfo} from './AddEditUserReducer';

const reducers =  combineReducers({loginInfo,showUserInfo});
const store = createStore(reducers);

export default store;