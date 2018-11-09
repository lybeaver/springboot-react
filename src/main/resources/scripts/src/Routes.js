import React from 'react';
import { Route, Switch, Redirect,withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from  './components/Home';
import axios from 'axios';
class BasicRoute extends React.Component {

    constructor(props) {
        super(props);
        console.log("this.props.history",props.history)
    }

    componentWillMount() {
        const history = this.props.history
        axios.interceptors.request.use(function (config) {
            const token = localStorage.getItem("my_token")
            console.log("1111111111111",token)
            if (config.url !== '/login' && token) {
                console.log("2222222222222",config)
                config.headers.Authorization = token;
            } else if (token == null || token === '') {
                setTimeout(()=>{
                    history.push('/login')
                },1)
            }
            return config;
        },function (error) {
            return Promise.reject(error);
        })
        axios.interceptors.response.use(function (response) {
            console.log("response response",response)
            return response;
        },function (error) {
            // localStorage.removeItem('my_token')
            console.log("error error",Promise.reject(error));
            if (error) {
                setTimeout(() => {
                    history.push('/home/found404')
                },1)
            }
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