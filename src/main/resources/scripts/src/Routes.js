import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from  './components/Home'
import NotFound from './components/NotFound';
const  BasicRoute = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/home" component={Home}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default BasicRoute;