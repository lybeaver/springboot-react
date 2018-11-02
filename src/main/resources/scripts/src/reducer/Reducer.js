import { combineReducers,createStore } from 'redux';
import { loginInfo } from './LoginReducer.js';
import {showVisible} from './AddEditUserReducer';

const reducers =  combineReducers({loginInfo,showVisible});
const store = createStore(reducers);

export default store;