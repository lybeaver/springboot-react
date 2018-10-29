import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';
import Home from  './components/Home';
import Store from './reducer/Reducer';
import axios from 'axios';
class Axios extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem("my_token")
        axios.interceptors.request.use(function (config) {
            if (config.url !== '/login' && token) {
                const json_token = JSON.parse(token);
                console.log("jsontoken",json_token);
                config.headers.Authorization = token;
            } else if(token == null || token === '') {
                setTimeout(()=>{
                    this.props.history.push('/login')
                },1500)
            }
            return config;
        },function (error) {
            return Promise.reject(error);
        })
        axios.interceptors.response.use(function (response) {
            return response;
        },function (error) {
            if (error.response.status === 401) {
                localStorage.removeItem('my_token')
            }
            setTimeout(() => {
                this.props.history.push('/login')
            },1500)
            return Promise.reject(error);
        })
    }
   
}
const  BasicRoute = ()=>(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Redirect from="/" exact to="/login"/>
                <Redirect to="/login" />
            </Switch>
        </BrowserRouter>
    </Provider>
)
export default BasicRoute;
