import {createStore} from 'redux'
import reducer from '../reducer/Reducer'
const initValue={
    'token':""
}
const store=createStore(reducer,initValue)
export default store