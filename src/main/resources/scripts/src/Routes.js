import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';
import Home from  './components/Home';
import Store from './reducer/Reducer';
import axios from 'axios';
class BasicRoute extends React.Component {

    constructor(props) {
        super(props);
        console.log("this.props.history",props.history)
    }

    componentWillMount() {
        const token = localStorage.getItem("my_token")
        const history = this.props.history
        console.log("history history",history);
        console.log("my_token my_token",token);
        axios.interceptors.request.use(function (config) {
            console.log("1111111111111",config)
            if (config.url !== '/login' && token) {
                console.log("2222222222222",config)
                config.headers.Authorization = token;
            } else if(token == null || token === '') {
                setTimeout(()=>{
                    history.push('/login')
                },1000)
            }
            return config;
        },function (error) {
            return Promise.reject(error);
        })
        axios.interceptors.response.use(function (response) {
            console.log("response response",response)
            return response;
        },function (error) {
            localStorage.removeItem('my_token')
            console.log("error",error);
            setTimeout(() => {
                history.push('/login')
            },1000)
            return Promise.reject(error);
        })
    }
    render() {
        return (
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/register" component={Register}/>
                    <Redirect from="/" exact to="/login"/>
                    <Redirect to="/login" />
                </Switch>
        )
    }
}
export default withRouter(BasicRoute);

// var headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'JWT fefege...'
// }
// axios.post(Helper.getUserAPI(), data, {"headers" : headers})
//     .then((response) => {
//         dispatch({type: FOUND_USER, data: response.data[0]})
//     })
//     .catch((error) => {
//         dispatch({type: ERROR_FINDING_USER})
//     })