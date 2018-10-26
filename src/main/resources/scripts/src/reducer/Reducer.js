import { combineReducers,createStore } from 'redux';
import { loginInfo } from './LoginReducer.js';

const reducers =  combineReducers({loginInfo});
const store = createStore(reducers);

export default store;