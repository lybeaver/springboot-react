import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';
import Home from  './components/Home';
import Store from './reducer/Reducer';
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
