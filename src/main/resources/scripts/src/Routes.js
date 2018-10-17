import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
const  BasicRoute = ()=>(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    </HashRouter>
)
export default BasicRoute;