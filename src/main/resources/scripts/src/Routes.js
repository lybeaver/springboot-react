import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { auth }  from './reducer/LoginReducer';
import Login from './components/Login';
import Register from './components/Register';
import Home from  './components/Home';
import NotFound from './components/NotFound';
const store = createStore(auth);
const  BasicRoute = ()=>(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Redirect from="/" exact to="/login"/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
)
export default BasicRoute;
